import codelistControlador from '../controllers/codelist-controlador';

export default app => {
  app
    .route('/codelist')
    .post(codelistControlador.adiciona)

  app
    .route('/codelist')
    .get(codelistControlador.buscaPorId)
};
