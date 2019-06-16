const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new mongoose.Schema({
    id: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    price: {
      type: Number
    },
    info: {
        type: String,
        required: true
    },
    inCart: {
        type: Boolean,
        default: false
    },
    count: {
        type: Number,
        default: 0
    },
    total: {
        type: Number,
        default: 0
    },
    date: {
      type: Date,
      default: Date.now
    }
  });
  

module.exports = Product = mongoose.model('product', ProductSchema);
