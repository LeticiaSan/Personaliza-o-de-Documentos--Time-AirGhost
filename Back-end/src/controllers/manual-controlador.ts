import Manual from '../business/manual-business';

export default {
  adiciona: async (req, res) => {
    const { id_manual, name_manual } = req.body;
    try {
      const manual = new Manual(
        id_manual,
        name_manual
      );

      await manual.adiciona();

      res.status(201).json();
    } catch (error: any) {
      res.status(500).json({ erro: error.message });
    }
  },

  buscaPorId: async (req, res) => {
    try {
      const response = await Manual.buscaPorId();
      res.status(201).json(response);
    } catch (error: any) {
      res.status(500).json({ erro: error.message });
    }
  }
}
