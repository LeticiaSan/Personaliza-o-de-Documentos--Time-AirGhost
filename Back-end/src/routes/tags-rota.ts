import tagsControlador from '../controllers/tags-controlador';

export default app => {
  app
    .route('/tags')
    .post(tagsControlador.adiciona)

  app
    .route('/tags')
    .get(tagsControlador.buscaPorId)
};
