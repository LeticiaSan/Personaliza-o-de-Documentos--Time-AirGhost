import tagsDB from '../models/tag-modelo';

class Tags {
  id_tag?: string;
  name_tag?: string

  constructor(id_tag: string, name_tag: string) {
    this.id_tag = id_tag,
      this.name_tag = name_tag
  };

  async adiciona() {
    return tagsDB.create(this);
  }

  static async buscaPorId() {
    const foundTag = await tagsDB.findAll();

    return foundTag
  }
}

export default Tags