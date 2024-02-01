import "./Collection.scss";
import burrito from "../../assets/6.png";
import pettie from "../../assets/7.png";
import salad from "../../assets/12.png";

function Collection() {
  return (
    <section className="collection">
        <div className="collection__wrap">
            <div className="collection__title-wrap">
                <h2 className="collection__title"><span className="collection__title-red">Top </span>Collections</h2>
                <p className="collection__tag">All our meals in one delicious snap</p>
            </div>
            <div className="collection__imgs">
                <div><img src={burrito} alt="burrito" className="collection__img" /></div>
                <div><img src={pettie} alt="pettie" className="collection__img" /></div>
                <div><img src={salad} alt="salad" className="collection__img" /></div>
            </div>
        </div>
    </section>
  )
}

export default Collection
