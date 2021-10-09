import app from './app';
const PORT = process.env.PORT || 5000;

import routes3 from './routes/tags-rota';
import routes from './routes/codelist-rotas';
import routes2 from './routes/manual-rotas';

routes3(app);
routes2(app);
routes(app);
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
