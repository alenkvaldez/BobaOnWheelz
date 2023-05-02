import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Boba, Delivered To You</h2>
      <p>
        Choose your favorite Boba from our broad selection of available drinks
        and enjoy a delicious drink at home.
      </p>
      <p>
        All our Boba is cooked with high-quality ingredients, just-in-time and
        of course by experienced Bobaristas!
      </p>
    </section>
  );
};

export default MealsSummary;