import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Jasmine Green',
      description: 'Floral and silky.',
      price: 3.50,
    },
    {
      id: 'm2',
      name: 'SAPIN SAPIN',
      description: 'A filipino specialty!',
      price: 5.50,
    },
    {
      id: 'm3',
      name: 'BERRY HIBISCUS',
      description: 'A tart and fruity drink fused with strawberry, mint and hibiscus tea.',
      price: 3.50,
    },
    {
      id: 'm4',
      name: 'ESPRESSO MILK TEA',
      description: 'Bold and shaken espresso and black tea.',
      price: 3.50,
    },
    {
      id: 'm5',
      name: 'MANGO JASMINE FRESCA',
      description: 'Bright, vibrant and refreshing.',
      price: 3.50,
    },
    {
      id: 'm6',
      name: 'MATCHA YUZU PALMER',
      description: 'Our twist on a classic Arnold Palmer.',
      price: 3.50,
    },
    {
      id: 'm7',
      name: 'Decaf Black',
      description: 'A full-bodied black tea without the kick.',
      price: 3.50,
    },
    {
      id: 'm8',
      name: 'Hibiscus Mint',
      description: 'Our version of an Agua de Jamaica.',
      price: 3.50,
    },
  ];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem 
      key = {meal.id}
      id = {meal.id}
      name = {meal.name} 
      description = {meal.description} 
      price = {meal.price}
      />
      ));

    return (
    <section className = {classes.meals}>
            <Card>
            <ul>{mealsList}</ul>
            </Card>
    </section>
    );
};

export default AvailableMeals;