import "./Collection.scss";
import burrito from "../../assets/7.png";
import pettie from "../../assets/8.png";
import salad from "../../assets/12.png";

function Collection() {
  return (
    <section>
        <div>
            <div>
                <h2><span>Top </span>Collections</h2>
                <p>All our meals in one delicious snap</p>
            </div>
            <div>
                <div><img src={burrito} alt="burrito" /></div>
                <div><img src={pettie} alt="" /></div>
                <div></div>
            </div>
        </div>
    </section>
  )
}

export default Collection
