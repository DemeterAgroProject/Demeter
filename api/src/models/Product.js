const mongoose = require('mongoose');
const validator = require('validator');
const { create } = require('connect-mongo');

const ProductSchema = new mongoose.Schema({
  status: { type: String, required: true },
  marca: { type: String, required: true },
  modelo: { type: String, required: true },
  potencia: { type: Number, required: true },
  funcao: { type: String, required: true },
  odometro: { type: Number, required: true },
  ano: { type: Number, required: true },
});

const ProductModel = mongoose.model('Product', ProductSchema);

class Product {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.product = null;
  }
  
  async cadastrar() {
    this.valida();

    if(this.errors.length > 0) return;

    this.product = await ProductModel.create(this.body);

  }

  static async listar() {
    try {
      const products = await ProductModel.find();
      return products;
    } catch (error) {
      console.error(error);
      throw new Error('Erro ao listar produtos');
    }
  }

  static async findById(id) {
    if(typeof id !== 'string') return;
    const product = await ProductModel.findById(id);
    return product;
  }


  async atualizar(id) {
    this.valida();

    if(this.errors.length > 0) return;

    this.product = await ProductModel.findByIdAndUpdate(id, this.body);
  }

  valida() {
    this.cleanUp();

    if(this.body.modelo == '') this.errors.push('Modelo é um campo obrigatório.');
    if(this.body.marca == '') this.errors.push('Marca é um campo obrigatório.');
    if(this.body.potencia == '') this.errors.push('Potência é um campo obrigatório.');
    if(this.body.funcao == '') this.errors.push('Função é um campo obrigatório.');
    if(this.body.odometro == '') this.errors.push('Odômetro é um campo obrigatório.');
    if(this.body.ano == '') this.errors.push('Ano é um campo obrigatório.');
  }

  cleanUp() {
    this.body = {
      status: this.body.status,
      marca: this.body.marca,
      modelo: this.body.modelo,
      potencia: this.body.potencia,
      funcao: this.body.funcao,
      odometro: this.body.odometro,
      ano: this.body.ano
    };
  }
}

module.exports = Product;
