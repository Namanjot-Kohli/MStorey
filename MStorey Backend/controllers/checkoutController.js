const Checkout = require("../models/checkoutModel");
const Cart = require("../models/cartModel");
// const clearCart = require("./cartController/clearCart")
// const Product = require('../models/productModel');
// const { getProductById } = require('./productController');
// const { checkout } = require('../routes/authRoute');

const placeOrder = async (req, res) => {
  try {
    const userId = req.user.id;
    if (!userId) {
      return res.status(401).json({ msg: "User not logged in" });
    }

    const { shippingAddress, paymentMethod } = req.body;

    if (!shippingAddress) {
      return res.status(400).json({ msg: "Shipping Address missing" });
    }

    const cart = await Cart.findOne({
      // user: userId.populate('items.product')
      user: userId,
    }).populate("items.product");

    if (!cart) {
      return res.status(400).json({ msg: "Cart not found" });
    }

    cart.items = cart.items.filter((item) => item.product);
    await cart.save();

    if (cart.items.length === 0) {
      return res.status(400).json({ msg: "Cart is empty" });
    }

    for (const item of cart.items) {
      if (item.quantity > item.product.stock) {
        return res
          .status(409)
          .json({
            msg: `Only ${item.product.stock} of ${item.product.name} exist in stock`,
          });
      }
    }

    // const product = await Product.findById(
    //     cart.items[0].product
    // )
    // if (!product){
    //     return res.status(400).json({msg: "Product not found"})
    // }
    // for(const key in cart.items[0])
    // const totalPrice = cart.items[0]

    let totalPrice = 0;
    cart.items.forEach((val) => {
      totalPrice += val.product.price * val.quantity;
    });

    const checkoutOrder = await Checkout.create({
      user: userId,
      items: cart.items.map((val) => {
        return {
          product: val.product._id,
          // WE ARE NOT PRESERVING NAME AND IMAGE MEANING IF THE SELLER CHANGES THEM, IT ALSO CHANGES IN OUR CHECKOUT ORDER
          // WE GET NAME AND IMAGE BY POPULATING WHILE GETTING ORDER

          // name: val.product.name,
          // image: val.product.image,
          quantity: val.quantity,
          //PRICE IS PRESERVED
          price: val.product.price,
        };
      }),
      totalPrice,
      shippingAddress,
      paymentMethod,
      // shippingAddress: req.body.shippingAddress,
      // paymentMethod: req.body.paymentMethod
    });

    //clearing cart after checkout created
    //Removing Order Quantity from Stock

    // const checkout_productId_list = cart.items.map(item => item.product._id)
    // for(let i=0; i<checkout_productId_list.length;i++){
    //     let product = await Product.findById(checkout_productId_list[i])
    //     product.stock = product.stock - cart.items[i].quantity
    //     await product.save()
    // }
    //(NOT THE BEST WAY) ALT WAY DOWN

    for (const item of cart.items) {
      item.product.stock -= item.quantity;
      await item.product.save();
    }

    cart.items = [];
    await cart.save();

    return res.status(201).json({
      msg: "checkoutOrder created successfully and cart cleared",
      checkoutOrder,
    });
    // return res.status(201).json({
    //     msg: "checkoutOrder created successfully and cart cleared",
    //     checkoutOrder
    // })
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const getMyOrders = async (req, res) => {
  try {
    const userId = req.user.id;
    if (!userId) {
      return res.status(401).json({ msg: "User not logged in" });
    }

    const orders = await Checkout.find({ user: userId })
      .populate("items.product")
      .sort({ createdAt: -1 });
    return res.status(200).json({
      msg: "All orders shown successfully",
      orders,
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const getSingleOrder = async (req, res) => {
  try {
    const userId = req.user.id;
    if (!userId) {
      return res.status(401).json({ msg: "User not logged in" });
    }
    const { id } = req.params;
    const order = await Checkout.findById(id).populate("items.product");
    if (!order) {
      return res.status(404).json({ msg: "Order doesn't exist" });
    }

    //To check if the order that user clicks on is of user

    // if(order.user.toString() !== userId){
    //     return res.status(403).json({msg: "Autheticated but not allowed to access this order"})
    // }
    //modifing for admins
    if (order.user.toString() !== userId && req.user.role !== "admin") {
      return res
        .status(403)
        .json({ msg: "Autheticated but not allowed to access this order" });
    }

    return res.status(200).json({
      msg: `Order with id ${id} shown successfully`,
      order,
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const cancelOrder = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;
    const order = await Checkout.findById(id).populate("items.product");

    // if(order.user.toString()!==userId){
    //     return res.status(403).json({msg: "Not allowed"})
    // }
    if (!order) {
      return res.status(404).json({ msg: "Order not found" });
    }
    if (order.user.toString() !== userId) {
      return res.status(403).json({ msg: "Not allowed" });
    }

    // if(order.orderStatus = "Delivered"){
    if (order.orderStatus === "Delivered") {
      return res
        .status(409)
        .json({ msg: "Product already delivered and cannot be cancelled" });
    }
    if (order.orderStatus === "Shipped") {
      return res
        .status(409)
        .json({ msg: "Product already shipped and cannot be cancelled" });
    }
    if (order.orderStatus === "Cancelled") {
      return res.status(409).json({ msg: "Product already cancelled" });
    }
    // else if(order.orderStatus === "Cancelled"){
    //     return res.status(409).json({msg: "Product already cancelled"})
    // }
    // else{
    //    order.orderStatus = "Cancelled"
    for (const item of order.items) {
      item.product.stock += item.quantity;
      await item.product.save();
    }
    order.orderStatus = "Cancelled";
    await order.save();

    return res.status(200).json({ msg: "Order cancelled successfully" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Checkout.find()
      .populate("items.product")
      .sort({ createdAt: -1 });
    return res.status(200).json({
      msg: "All orders successfully shown",
      orders,
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const updateOrderStatusAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const { updatedStatus } = req.body;
    // if(updatedStatus !== "")
    if (
      !["Pending", "Confirmed", "Shipped", "Delivered", "Cancelled"].includes(
        updatedStatus,
      )
    ) {
      return res.status(400).json({ msg: "Invalid status" });
    }
    const order = await Checkout.findById(id).populate("items.product");
    if (!order) {
      return res.status(404).json({ msg: "Order not found" });
    }
    if (
      order.orderStatus === "Delivered" ||
      order.orderStatus === "Cancelled"
    ) {
      return res.status(409).json({ msg: "Cannot Change final states" });
    }
    // if(Order.orderStatus = updatedStatus){
    if (order.orderStatus === updatedStatus) {
      return res.status(409).json({
        msg: `Order is already ${updatedStatus}`,
      });
    }
    order.orderStatus = updatedStatus;
    if (updatedStatus === "Cancelled") {
      for (const item of order.items) {
        item.product.stock += item.quantity;
        await item.product.save();
      }
    }
    await order.save();
    return res.status(200).json({
      msg: `Order status changed successfully to ${updatedStatus}`,
      order,
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  placeOrder,
  getMyOrders,
  getSingleOrder,
  cancelOrder,
  getAllOrders,
  updateOrderStatusAdmin,
};
