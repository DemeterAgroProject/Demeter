const mongoose = require('mongoose');
const validator = require('validator');
const { create } = require('connect-mongo');

const BrandSchema = new mongoose.Schema({
  nome: { type: String, required: true }
});

const BrandModel = mongoose.model('Brand', BrandSchema);

class Brand {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.machine = null;
  }

  static async findById(id) {
      const brand = await BrandModel.findById(id);
      return brand;
  }
}

module.exports = Brand;