import codelistControlador from '../controllers/codelist-controlador';

export default app => {
  app
    .route('/codelist')
    .post(codelistControlador.adiciona)

  app
    .route('/codelist')
    .get(codelistControlador.buscaPorId)

  app
    .route('/codelist')
    .delete(codelistControlador.deletar)

  app
    .route('/codelist')
    .patch(codelistControlador.atualizar)
};
