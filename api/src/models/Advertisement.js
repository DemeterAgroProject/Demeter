const mongoose = require('mongoose');
const validator = require('validator');
const { create } = require('connect-mongo');

const AdvertisementSchema = new mongoose.Schema({
    productId: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    localization: { type: String, required: true },
    details: { type: String, required: true },
    price: { type: Number, required: true },
});

const AdvertisementModel = mongoose.model('Advertisement', AdvertisementSchema);

class Advertisement {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.advertisement = null;
  }
  
  async cadastrar() {
    this.valida();

    if(this.errors.length > 0) return;

    this.advertisement = await AdvertisementModel.create(this.body);

  }

  static async listar() {
    try {
      const advertisements = await AdvertisementModel.find();
      return advertisements;
    } catch (error) {
      console.error(error);
      throw new Error('Erro ao listar anuncios');
    }
  }

  static async findById(id) {
    if(typeof id !== 'string') return;
    const advertisement = await AdvertisementModel.findById(id);
    return advertisement;
  }


  async atualizar(id) {
    this.valida();

    if(this.errors.length > 0) return;

    this.advertisement = await AdvertisementModel.findByIdAndUpdate(id, this.body);
  }

  static async deletar(id) {
    if (typeof id !== 'string') return null;
    try {
      return await AdvertisementModel.findByIdAndDelete(id);
    } catch (error) {
      console.error(error);
      throw new Error('Erro ao deletar anuncio');
    }
  }

  valida() {
    this.cleanUp();

    if(this.body.productId === '') this.errors.push('ID do produto é um campo obrigatório');
    if(this.body.title === '') this.errors.push('Título é um campo obrigatório');
    if(this.body.description === '') this.errors.push('Descrição é um campo obrigatório');
    if(this.body.localization === '') this.errors.push('Localização é um campo obrigatório');
    if(this.body.details === '') this.errors.push('Detalhes é um campo obrigatório');
    if(this.body.price === '') this.errors.push('Preço é um campo obrigatório');
  }

  cleanUp() {
    this.body = {
      productId: this.body.productId,
      title: this.body.title,
      description: this.body.description,
      localization: this.body.localization,
      details: this.body.details,
      price: this.body.price,
    };
  }
}

module.exports = Advertisement;
