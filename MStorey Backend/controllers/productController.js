const Product = require("../models/productModel")

const createProduct = async (req,res) =>{
    try{
        const {name, price, category, stock, description, image} = req.body;
        if(!name|| price === undefined|| !category|| stock === undefined|| !description|| !image){
            return res.status(400).json({msg: "Enter all fields correctly"})
        }

        const createdProduct = await Product.create({
            name,
            price,
            category,
            stock,
            description,
            image
        })

        // await Product.create({
        //     name,
        //     price,
        //     category,
        //     stock,
        //     description,
        //     image
        // })

        res.status(201).json({
            msg: "Product created successfully",
            createdProduct
        })
    }catch(err){
        return res.status(500).json({msg: err.message})
    }
}

const getAllProducts = async (req,res) => {
    try{
        const products = await Product.find()
        res.status(200).json({
            count: products.length,
            products
        })
    }catch(err){
        res.status(500).json({msg: err.message})
    }
}

const getProductById = async (req,res) =>{
    try{
       const id = req.params.id;
       const foundProduct = await Product.findById(id);
       if (!foundProduct){
        return res.status(404).json({msg: "No product with this ID exists"})
       }
       res.status(200).json(foundProduct) 
    }catch(err){
        res.status(500).json({msg: err.message})
    }
}

const updateProduct = async (req,res) =>{
    try{
        const id = req.params.id;
        // const oldProduct = await Product.findById(id);
        // if(!oldProduct){
        //     return res.status(404).json({msg: "Product not found"})
        // }
        //const {new_name, new_price, new_category, new_stock, new_description, new_image} = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(id,
            // {
            //     name: new_name,
            //     price: new_price,
            //     category: new_category,
            //     stock: new_stock,
            //     description: new_description,
            //     image: new_image 
            // },
            req.body, //express automatically converts json into js
            {new: true, runValidators: true}
        );
        if (!updatedProduct){
            return res.status(404).json({msg: "Product not found"})
        }
        res.status(200).json({
            msg: "product updated successfully",
            updatedProduct
        })
    }catch(err){
        res.status(500).json({msg: err.message})
    }
}

const deleteProduct = async (req,res) =>{
    try{
        const id = req.params.id
        const deletedProduct = await Product.findByIdAndDelete(id)
        if (!deletedProduct){
            return res.status(404).json({msg: `Couldn't Find Product with id ${id}`})
        }
        res.status(200).json({
            msg: "Product deleted successfully",
            deletedProduct
        })
    }catch(err){
        res.status(500).json({msg: err.message})
    }
}

module.exports = {createProduct, getAllProducts, getProductById, updateProduct, deleteProduct}