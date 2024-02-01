import "./Foodies.scss";
import order from "../../assets/8.png";
import delivery from "../../assets/9.png";
import quality from "../../assets/10.png";
function Foodies() {
  return (
    <section>
        <div>
            <h2>Why Foodies's</h2>
            <div>
                <div>
                    <img src={order} alt="" />
                    <h3>Easy To Order</h3>
                </div>
                <div>
                    <img src={delivery} alt="" />
                    <h3>Fastest Delivery</h3>
                </div>
                <div>
                    <img src={quality} alt="" />
                    <h3>Best Quality</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Foodies
