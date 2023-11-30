import express from 'express';
import routes from './routes';  // Importe suas rotas aqui

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', routes);  // Defina um prefixo para suas rotas se desejar

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
