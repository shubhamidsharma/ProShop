import mongoose from "mongoose";
import Order from "./models/orderModel.js";
import Product from "./models/productModel.js";
import User from "./models/userModel.js";
import colors from "colors";
import products from "./data/products.js";
import users from "./data/users.js";
import connectDB from "./config/db.js";
import dotenv,{ config } from "dotenv";

config();
connectDB();

const importData = async() => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users)
    const adminUser = createdUsers[0]._id
    const newProducts = products.map(product=>{
      return {...product,user: adminUser}
    })

    await Product.insertMany(newProducts)
    console.log('Data Imported!!!'.green.inverse)
    process.exit()

  } catch (error) {
    console.log(`${error}`.red.inverse)
    process.exit(1)
  }
}

const delelteData = async() => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Data Deleted!!!'.red.inverse)
    process.exit()

  } catch (error) {
    console.log(`${error}`.red.inverse)
    process.exit(1)
  }
}

if(process.argv[2]==='-d'){
  delelteData();
}else{
  importData();
}