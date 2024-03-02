import css from './Slogan.module.css';

const Slogan = () => {
  return (
    <section className={css.sloganSection}>
      <div className={css.sloganWrapper}>
        <h1>I Am Frontend developer</h1>
        <p className={css.sloganText}>Let’s create important and useful projects together!</p>
      </div>
    </section>
  );
};

export default Slogan;
