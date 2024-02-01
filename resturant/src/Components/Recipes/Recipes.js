import "./Recipes.scss";
import vegan from "../../assets/14.png";
import pepper from "../../assets/15.png";
import penne from "../../assets/16.png";
export default function Recipes() {
  return (
    <section className="recipe">
      <div className="recipe__wrap">
      <div className="recipe__title-wrap">
        <h2 className="recipe__title"> <span className="recipe__title-red">Trending </span>Recipes</h2>
      </div>
      <div className="recipe__item">
        <div className="recipe__item-wrap">
          <div className="recipe__img-wrap">
            <img src={vegan} alt="vegan "
            className="recipe__img" />
          </div>
          <div className="recipe__contain">
            <h4 className="recipe__price">$40</h4>
            <p className="recipe__tag">Vegan Sweet & Chickpea Curry</p>
          </div>
        </div>
        <div className="recipe__item-wrap">
          <div className="recipe__img-wrap">
            <img src={pepper} alt="vegan "
            className="recipe__img" />
          </div>
          <div className="recipe__contain">
            <h4 className="recipe__price">$35</h4>
            <p className="recipe__tag">Pepper Steak</p>
          </div>
        </div>
        <div className="recipe__item-wrap">
          <div className="recipe__img-wrap">
            <img src={penne} alt="vegan "
            className="recipe__img" />
          </div>
          <div className="recipe__contain">
            <h4 className="recipe__price">$39.9</h4>
            <p className="recipe__tag">Penne Pasta In Tomato Sauce</p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
