import "./Client.scss";
import smith from "../../assets/client-1.jpg";
import john from "../../assets/client-2.jpg";
function Client() {
  return (
    <section className="client">
      <div className="client__wrap">
        <div className="client__title-wrap">
          <h2 className="client__title">
            What's Our <span className="client__title-red">Client Say</span>
          </h2>
        </div>
        <div className="client__story">
          <div className="client__story-wrap">
            <div className="client__img-wrap">
              <img src={smith} alt="Jhon smith" 
              className="client__img"/>
            </div>
            <div className="client__detail-wrap">
              <h3 className="client__name">Jhon Smith</h3>
              <p className="client__tag">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                quas assumenda voluptate sed quam ad placeat itaque minus
                voluptatum fugit!
              </p>
            </div>
          </div>
          <div className="client__story-wrap">
            <div className="client__img-wrap">
              <img src={john} alt="Jhon smith" 
              className="client__img"/>
            </div>
            <div className="client__detail-wrap">
              <h3 className="client__name">Jhon Smith</h3>
              <p className="client__tag">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                quas assumenda voluptate sed quam ad placeat itaque minus
                voluptatum fugit!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Client;
