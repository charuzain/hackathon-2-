import "./Foodies.scss";
import order from "../../assets/8.png";
import delivery from "../../assets/9.png";
import quality from "../../assets/10.png";
function Foodies() {
  return (
    <section className="foodies">
        <div className="foodies__wrap">
            <h2 className="foodies__title">Why <span className="foodies__title-red">Foodies's</span> </h2>
            <div className="foodies__img-wrap">
                <div className="foodies__item-wrap">
                    <img src={order} alt="order icon" className="foodies__order" />
                    <h3 className="foodies__order-tag">Easy To Order</h3>
                </div>
                <div className="foodies__item-wrap">
                    <img src={delivery} alt="" />
                    <h3>Fastest Delivery</h3>
                </div>
                <div className="foodies__item-wrap">
                    <img src={quality} alt="" />
                    <h3>Best Quality</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Foodies
