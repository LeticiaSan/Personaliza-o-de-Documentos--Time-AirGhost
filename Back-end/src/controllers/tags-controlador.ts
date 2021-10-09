import Tag from '../business/tags-business';

export default {
  adiciona: async (req, res) => {
    const { id_tag, name_tag } = req.body;
    try {
      const tag = new Tag(
        id_tag,
        name_tag
      );

      await tag.adiciona();

      res.status(201).json();
    } catch (error: any) {
      res.status(500).json({ erro: error.message });
    }
  },

  buscaPorId: async (req, res) => {
    try {
      const response = await Tag.buscaPorId();
      res.status(200).json(response);
    } catch (error: any) {
      res.status(500).json({ erro: error.message });
    }
  }
}
