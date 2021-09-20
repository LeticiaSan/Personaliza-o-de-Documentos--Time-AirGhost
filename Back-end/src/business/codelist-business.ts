import codelistDB from '../models/codelist-modelo';

class Codelist {
  id_codelist ?: string;
  id_tag ?: string
  id_manual : string;
  number_section ?: string;
  number_subsection : string;
  number_block : string;
  name_block : string;
  code : string;
 
  constructor(id_codelist:string, id_tag: string , id_manual: string, number_section: string, number_subsection: string, number_block: string, name_block:string, code: string) {
    this.id_codelist = id_codelist,
    this.id_tag = id_tag,
    this.id_manual = id_manual,
    this.number_section = number_section,
    this.number_subsection = number_subsection,
    this.number_block = number_block,
    this.name_block = name_block,
    this.code = code;
  }

  async adiciona() {
    return codelistDB.create(this);
  }

  static async buscaPorId(codelistId:string) {
    const foundCodelist = await codelistDB.findOne({where:{id_codelist:codelistId}});
    
    return foundCodelist.dataValues
  }
}

export default Codelist