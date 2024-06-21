const mongoose = require('mongoose');
const validator = require('validator');
const { create } = require('connect-mongo');

const MachineSchema = new mongoose.Schema({
  modelo: { type: String, required: true },
  marca: { type: String, required: true },
  funcao: { type: String, required: true },
  potencia: { type: Number, required: true },
  ano: { type: Number, required: true }
});

const MachineModel = mongoose.model('Machine', MachineSchema);

class Machine {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.machine = null;
  }
  
  async cadastrar() {
    this.valida();

    if(this.errors.length > 0) return;

    this.machine = await MachineModel.create(this.body);

  }
  
  async atualizar(id) {
    this.valida();

    if(this.errors.length > 0) return;

    this.machine = await MachineModel.findByIdAndUpdate(id, this.body);
  }

  static async listar() {
    try {
      const machines = await MachineModel.find();
      return machines;
    } catch (error) {
      console.error(error);
      throw new Error('Erro ao listar máquinas');
    }
  }

  static async findById(id) {
    if(typeof id !== 'string') return;
    const machine = await MachineModel.findById(id);
    return machine;
  }


  static async deletar(id) {
    if (typeof id !== 'string') return null;
    try {
      return await MachineModel.findByIdAndDelete(id);
    } catch (error) {
      console.error(error);
      throw new Error('Erro ao deletar máquina');
    }
  }

  valida() {
    this.cleanUp();

    if(this.body.modelo == '') this.errors.push('Modelo é um campo obrigatório.');
    if(this.body.marca == '') this.errors.push('Marca é um campo obrigatório.');
    if(this.body.funcao == '') this.errors.push('Função é um campo obrigatório.');
    if(this.body.potencia == '') this.errors.push('Potência é um campo obrigatório.');
    if(this.body.ano == '') this.errors.push('Ano é um campo obrigatório.');
  }

  cleanUp() {
    this.body = {
      modelo: this.body.modelo,
      marca: this.body.marca,
      funcao: this.body.funcao,
      potencia: this.body.potencia,
      ano: this.body.ano,
    };
  }
}

module.exports = Machine;
