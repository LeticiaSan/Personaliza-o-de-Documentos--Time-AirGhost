import Codelist from '../business/codelist-business';

export default {
    adiciona: async (req, res) => {
    const { id_codelist, id_tag, id_manual, number_section, number_subsection, number_block, name_block, code } = req.body;
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
      );

      await codelist.adiciona();

      res.status(201).json();
      } catch (error:any) {
        res.status(500).json({ erro: error.message });
      }
    },

    buscaPorId: async (req,res) => {
      const { id } = req.query;

      try{
        const response = await Codelist.buscaPorId(id);
        res.status(201).json(response);
      }catch(error:any){
        res.status(500).json({ erro: error.message });
      }
    }
};
