const Checkout = require('../models/checkoutModel')
const Cart = require('../models/cartModel');
// const clearCart = require("./cartController/clearCart")
const Product = require('../models/productModel');
const { getProductById } = require('./productController');
// const { checkout } = require('../routes/authRoute');

const placeOrder = async(req,res) =>{
    try{
        const userId = req.user.id;
        if (!userId){
            return res.status(401).json({msg: "User not logged in"})
        }

        const cart = await Cart.findOne({
            // user: userId.populate('items.product')
            user: userId
        }).populate('items.product')

        if(!cart){
            return res.status(400).json({msg: "Cart not found"})
        }

        if(cart.items.length === 0){
            return res.status(400).json({msg: "Cart is empty"})
        }

        // const product = await Product.findById(
        //     cart.items[0].product
        // )
        // if (!product){
        //     return res.status(400).json({msg: "Product not found"})
        // }
        // for(const key in cart.items[0])
        // const totalPrice = cart.items[0] 
        const {shippingAddress, paymentMethod} = req.body

        if(!shippingAddress){
            return res.status(404).json({msg: "Shipping Address missing"})
        }


        let totalPrice = 0;
        cart.items.forEach((val) => {
            totalPrice += val.product.price * val.quantity
        });
        
        const checkoutOrder = await Checkout.create({
            user: userId,
            items: cart.items.map((val)=>{
                return{
                    product: val.product._id,
                    quantity: val.quantity,
                    price: val.product.price
                }
            }),
            totalPrice,
            shippingAddress,
            paymentMethod
            // shippingAddress: req.body.shippingAddress,
            // paymentMethod: req.body.paymentMethod
        })

        //clearing cart after checkout created
        cart.items = [];
        await cart.save();

        return res.status(201).json({
            msg: "checkoutOrder created successfully and cart cleared",
            checkoutOrder   
        })
        // return res.status(201).json({
        //     msg: "checkoutOrder created successfully and cart cleared",
        //     checkoutOrder   
        // })
        


    }catch(err){
        res.status(500).json({msg: err.message})
    }
}