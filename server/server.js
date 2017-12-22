import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { data } from './data/data.js';
import filterFoodsByNutrients from './utilities/helpers';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const router = express.Router();

const staticFiles = express.static(path.join(__dirname, '../../client/build'));
app.use(staticFiles);

router.get('/foods', (req, res) => {
  const foods = data.report.foods;
  const filteredFoods = Object.keys(req.query).length === 0 ? foods : foods.filter(food => filterFoodsByNutrients(food, req.query));
  res.json(filteredFoods);
});

app.use(router);

app.use('/*', staticFiles);

app.set('port', (process.env.PORT || 3001));
app.listen(app.get('port'), () => {
  console.log(`Listening on ${ app.get('port') }`)
})