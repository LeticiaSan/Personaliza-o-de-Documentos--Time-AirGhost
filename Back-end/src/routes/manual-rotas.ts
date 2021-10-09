import manualControlador from '../controllers/manual-controlador';

export default app => {
  app
    .route('/manual')
    .post(manualControlador.adiciona)

  app
    .route('/manual')
    .get(manualControlador.buscaPorId)
};
