import app from './app';
const PORT = process.env.PORT || 5000;

import routes from './routes/usuarios-rotas';

routes(app);
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
 