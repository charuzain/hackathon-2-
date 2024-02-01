import "./Hero.scss";
import backgroundimg from "../../assets/11.png";
function Hero() {
  return (
    <section className="hero">
      <div className="hero__wrap">
        <div className="hero__item-wrap">
          <div className="hero__title-wrap">
            <h1 className="hero__title">
              The taste of tradition's with a modern twist
            </h1>
          </div>
          <div className="hero__tag-wrap">
            <p className="hero__tag">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              fuga quis praesentium molestiae ratione blanditiis iure sed,
              architect!
            </p>
          </div>
          <div className="hero__btn-wrap">
            <button className="hero__btn">See Our Menu</button>
          </div>
        </div>
        <div className="hero__img-wrap">
          <img src={backgroundimg} alt="background image"
          className="hero__img" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
