const mongoose = require("mongoose");

const checkoutSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        // we are populating when getting orders so no need to specifically save name
        // if SELLER CHANGES NAME, CHECKOUT ALSO HAS NAME CHANGED
        // name: {
        //   type: String,
        //   required: true,
        // },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
        //EVEN IF SELLER CHANGED PRICE IT WOULD NOT AFFECT US AS WE STORE THE ORIGINAL PRICE TOO IN CHECKOUT UNLIKE NAME 
        // PRICE PRESERVEED
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
    shippingAddress: {
      type: String,
      required: true,
    },
    paymentMethod: {
      type: String,
      enum: ["COD", "UPI", "NETBANKING"],
      default: "COD",
    },
    orderStatus: {
      type: String,
      enum: ["Pending", "Confirmed", "Shipped", "Delivered", "Cancelled"],
      default: "Pending",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Checkout", checkoutSchema);
