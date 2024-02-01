import "./Chef.scss";
import Deo from "../../assets/2.png";
import  Smith from "../../assets/3.png";
import Aleyia from "../../assets/4.png";
import Jhon from "../../assets/5.png";

export default function Chef() {
  return (
    <section className="chef">
    <div className="chef__wrap">
        <div className="chef__title-wrap">
            <h2 className="chef__title"><span className="chef__title-red">Meet Our </span>Chefs</h2>
        </div>
        <div className="chef__imgs">
            <div><img src={Deo} alt="Deo" className="chef__img" />
            <p className="chef__tag">Jhon Deo</p></div>
            <div><img src={Smith} alt="smith" className="chef__img" />
            <p className="chef__tag">Jhon Smith</p></div>
            <div><img src={Aleyia} alt="Aleyia" className="chef__img" />
            <p className="chef__tag">Jhon Aleyia</p></div>
            <div><img src={Jhon} alt="Aleyia" className="chef__img" />
            <p className="chef__tag">Jhon Deo</p></div>
        </div>
    </div>
</section>
  )
}
