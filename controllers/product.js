// Import Models
const { Product } = require("../models/product.model");

// Import Utils
const { AppError } = require("../utils/appError");
const { catchAsync } = require("../utils/catchAsync");
const { filterObj } = require("../utils/filterObj");


exports.createProduct = catchAsync(async (req, res, next) => {
    const { batchNumber, name, price, quantityAvailable } = req.body;
  
    const { id } = req.currentUser;
  
    const newProduct = await Product.create({
      batchNumber,
      name,
      price,
      quantityAvailable,
      userId: id
    });
  
    res.status(201).json({
      status: "success",
      data: {
        newProduct
      }
    });
  });

  exports.getAllProducts = catchAsync(async (req, res, next) => {
    const products = await Product.findAll({ where: { status: "active" } });
  
    res.status(200).json({
      status: "success",
      data: {
        products
      }
    });
  });

  