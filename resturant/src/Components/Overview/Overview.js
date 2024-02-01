import "./Overview.scss";
import overview from "../../assets/1.png";
function Overview() {
  return (
    <section className="overview">
      <div className="overview__wrap">
        <div className="overview__img">
          <img src={overview} alt="overview img" />
        </div>
        <div className="overview__contain-wrap">
          <h3 className="overview__subtitle">overview</h3>
          <h2 className="overview__title">A Little Information For Our Guest</h2>
          <p className="overview__tag">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
            quidem veritatis cum cupiditate suscipit autem nisi fugiat quae
            amet. At beatae mollitia odio tempore est, laborum aliquid
            voluptatum accusamus neque?
          </p>
          <div className="overview__detail">
            <div className="overview__detail-wrap">
              <h3 className="overview__count">15K+</h3>
              <p className="overview__count-tag">Happy Customer</p>
            </div>
            <div className="overview__detail-wrap">
              <h3 className="overview__count">10+</h3>
              <p className="overview__count-tag">Award Win</p>
            </div>
            <div className="overview__detail-wrap">
              <h3 className="overview__count">30+</h3>
              <p className="overview__count-tag">Food Menu</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
