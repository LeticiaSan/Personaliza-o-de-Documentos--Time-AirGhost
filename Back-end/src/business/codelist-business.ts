import codelistDB from '../models/codelist-modelo';

class Codelist {
  id_codelist?: string;
  number_section?: string;
  number_subsection: string;
  number_block: string;
  name_block: string;
  code: string;
  fk_manual: number;
  fk_tag: number;

  constructor(id_codelist: string, number_section: string, number_subsection: string, number_block: string, name_block: string, code: string, fk_manual: number, fk_tag: number) {
    this.id_codelist = id_codelist,
      this.number_section = number_section,
      this.number_subsection = number_subsection,
      this.number_block = number_block,
      this.name_block = name_block,
      this.code = code;
    this.fk_manual = fk_manual;
    this.fk_tag = fk_tag;
  }

  async adiciona() {
    return codelistDB.create(this);
  }

  static async buscaPorId(manualId: number) {
    console.log(typeof (manualId));

    const foundCodelist = await codelistDB.findAll({ where: { fk_manual: manualId } });

    return foundCodelist
  }

  static async deleteById(codelistId: number) {
    const foundCodelist = await codelistDB.destroy({ where: { id_codelist: codelistId } });

    return foundCodelist.dataValues
  }

  async atualizar() {
    const foundCodelist = await codelistDB.update(this, { where: { id_codelist: this.id_codelist } });

    return foundCodelist.dataValues
  }
}

export default Codelist