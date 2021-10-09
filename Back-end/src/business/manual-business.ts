import manualDB from '../models/manual-modelo';

class Manual {
  id_manual?: string;
  name_manual?: string

  constructor(id_manual: string, name_manual: string) {
    this.id_manual = id_manual,
      this.name_manual = name_manual
  };

  async adiciona() {
    return manualDB.create(this);
  }

  static async buscaPorId(manualId: string) {
    const foundManual = await manualDB.findByPk(manualId);

    return foundManual.dataValues
  }
}

export default Manual