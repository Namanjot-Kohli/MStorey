const Cart = require("../models/cartModel");
const Product = require("../models/productModel");


const addToCart = async (req, res) => {
  try {
    const userId = req.user.id;
    if (!userId) {
      return res.status(401).json({ msg: "User not logged in" });
    }
    const productId = req.body.productId;
    if (!productId) {
      return res.status(400).json({ msg: "Product doesnt exist" });
    }
    const product = await Product.findById(productId)
    
    // WE NEED PRODUCT TO CHECK STOCK SO THEREFORE WE TAKE PRODUCT IN A VAR
    // if (!(await Product.findById(productId))) {
      //   return res.status(404).json({ msg: "Product not found" });
      // }
      
    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }
    const existingCart = await Cart.findOne({ user: userId });
    if (!existingCart) {
      if (product.stock === 0){
        return res.status(409).json({msg: "Product Out of Stock"})
      }
      await Cart.create({
        user: userId,
        items: [
          {
            product: productId,
            quantity: 1,
          },
        ],
      });
      return res
        .status(200)
        .json({ msg: "Cart created nd Product added to cart successfully!" });
    }

    //no need of await for findIndex() + it return '-1' if not found
    // const checkItem = existingCart.items.findIndex(function (item){
    //     return item.product.toString() === productId
    // })
    const checkItem = existingCart.items.findIndex(
      (item) => item.product.toString() === productId,
    );

    if (checkItem === -1) {
      if (product.stock === 0){
        return res.status(409).json({msg: "Product Out of Stock"})
      }
      existingCart.items.push({
        product: productId,
        quantity: 1,
      });
      await existingCart.save();
      return res.status(200).json({ msg: "Added product to cart" });
    }
    if(existingCart.items[checkItem].quantity >= product.stock){
      return res.status(409).json({msg: `Only ${product.stock} quantity left in stock`})
    }
    existingCart.items[checkItem].quantity += 1;
    await existingCart.save();
    return res
      .status(200)
      .json({ msg: "product alr in cart, quantity increased by 1" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const removeFromCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId } = req.body;
    if (!productId) {
      return res.status(400).json({ msg: "Product ID doesn't exist" });
    }
    const existingCart = await Cart.findOne({ user: userId });
    if (!existingCart) {
      return res.status(404).json({ msg: "Cart not found" });
    }

    const index = existingCart.items.findIndex(
      (item) => item.product.toString() === productId,
    );

    if (index === -1) {
      return res.status(404).json({ msg: "Product not found in cart" });
    }

    existingCart.items.splice(index, 1);
    await existingCart.save();

    return res.json({ msg: "Item removed!! " });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const updateQuantity = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId } = req.body;
    if (!productId) {
      return res.status(400).json({ msg: "Product doesn't exist" });
    }

    const product = await Product.findById(productId)
    if (!product){
      return res.status(404).json({msg: "Product not found"})
    }

    const { qOperation } = req.body;
    if (qOperation !== "inc" && qOperation !== "dec") {
      return res.status(400).json({ msg: "Invalid operation received" });
    }

    const existingCart = await Cart.findOne({ user: userId });
    if (!existingCart) {
      return res.status(404).json({ msg: "Cart not found" });
    }

    const index = existingCart.items.findIndex(
      (item) => item.product.toString() === productId,
    );

    if (index === -1) {
      return res.status(404).json({ msg: "Product not found" });
    }

    if (qOperation === "inc") {
      if(product.stock <= existingCart.items[index].quantity){
        return res.status(409).json({msg: "Product out of stock"})
      }
      existingCart.items[index].quantity += 1;
    } else {
      existingCart.items[index].quantity -= 1;
      if (existingCart.items[index].quantity === 0) {
        existingCart.items.splice(index, 1);
      }
    }
    await existingCart.save();
    return res.json({ msg: "Quantity changed acc to req" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const getCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const existingCart = await Cart.findOne({ user: userId }).populate(
      "items.product",
    );
    if (!existingCart) {
      return res.status(404).json({ msg: "Cart not found" });
    }
    // filter returns NEW ARRAY 
    // existingCart.items.filter(item => item.product)
    existingCart.items = existingCart.items.filter(item => item.product)
    await existingCart.save()


    let totalPrice = 0;
    let totalItems = 0;
    const itemNames = [];
    existingCart.items.forEach((item) => {
      itemNames.push(item.product.name);
      totalItems += item.quantity;
      totalPrice += item.product.price * item.quantity;
    });

    const cartDetails = {
      itemNames,
      totalItems,
      totalPrice,
      items: existingCart.items,
    };
    return res.status(200).json(cartDetails);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const clearCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const existingCart = await Cart.findOne({ user: userId });
    if (!existingCart) {
      return res.status(404).json({ msg: "Cart not found" });
    }

    existingCart.items = [];
    await existingCart.save();
    return res.json({ msg: " Cart Cleared" });
  } catch (err) {
    res.status(500).json({msg: err.message });
  }
};

module.exports = {addToCart, removeFromCart, updateQuantity, getCart, clearCart}