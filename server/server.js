import express from 'express';
import bodyParser from 'body-parser';
import data from './data/food_data.json';
import filterFoodsByNutrients from './utilities/helpers';

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('port', (process.env.PORT || 3001));
app.use(router);

router.get('/foods', (req, res) => {
  const foods = data.report.foods;
  const filteredFoods = Object.keys(req.query).length === 0 ? foods : foods.filter(food => filterFoodsByNutrients(food, req.query));
  res.json(filteredFoods);
});

app.listen(app.get('port'), () => {
  console.log(`Listening on ${ app.get('port') }`)
})