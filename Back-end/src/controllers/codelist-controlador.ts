import Codelist from '../business/codelist-business';

export default {
  adiciona: async (req, res) => {
    const { id_codelist, id_tag, id_manual, number_section, number_subsection, number_block, name_block, code, fk_manual, fk_tag } = req.body;
    try {
      const codelist = new Codelist(
        id_codelist,
        id_tag,
        id_manual,
        number_section,
        number_subsection,
        number_block,
        name_block,
        code,
        fk_manual,
        fk_tag
      );

      await codelist.adiciona();

      res.status(201).json();
    } catch (error: any) {
      res.status(500).json({ erro: error.message });
    }
  },

  buscaPorId: async (req, res) => {
    const { id } = req.query;

    try {
      const response = await Codelist.buscaPorId(id);
      res.status(201).json(response);
    } catch (error: any) {
      res.status(500).json({ erro: error.message });
    }
  },

  deletar: async (req, res) => {
    const { id } = req.query;

    try {
      const response = await Codelist.deleteById(id);
      res.status(200).json(response);
    } catch (error: any) {
      res.status(500).json({ erro: error.message });
    }
  },

  atualizar: async (req, res) => {
    const { id_codelist, id_tag, id_manual, number_section, number_subsection, number_block, name_block, code, fk_manual, fk_tag } = req.body;
    try {
      const codelist = new Codelist(
        id_codelist,
        id_tag,
        id_manual,
        number_section,
        number_subsection,
        number_block,
        name_block,
        code,
        fk_manual,
        fk_tag
      );

      await codelist.atualizar();

      res.status(201).json();
    } catch (error: any) {
      res.status(500).json({ erro: error.message });
    }
  },
}
