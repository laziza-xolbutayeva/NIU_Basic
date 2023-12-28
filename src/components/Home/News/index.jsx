import "./style.css";
import img from "../../../assets/newsImg.svg";
import time from "../../../assets/time.svg";
import eye from "../../../assets/eyes.svg";
import { NavLink } from "react-router-dom";

function index() {
  return (
    <>
      <section className="index-news">
        <div className="container">
          <div className="col-12">
            <div className="news-title d-flex justify-content-between">
              <h3 data-aos="news-title-h">Yangiliklar</h3>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-3">
              <a href="#">
              <div className="card position-relative" style={{ width: "310px" }}>
                <img src={img} className="card-img-top" alt="..."></img>
                <div className="card-body p-4">
                  <h5 className="card-title">
                    Universitet talabalari o'rtasida "Zakovat" intellektual
                    o'yi...
                  </h5>
                  <div className="d-flex justify-content-between pt-1">
                    <p className="d-inline-block">
                      <i className="me-1">
                        <img src={time} alt="" />
                      </i>
                       2023-12-11
                    </p>
                    <p className="d-inline-block">
                      <i  className="me-1">
                        <img src={eye} alt="" />
                      </i>
                       1000
                    </p>
                  </div>
                </div>
              </div>
              </a>
              
            </div>
            <div className="col-3">
              <a href="#">
              <div className="card" style={{ width: "310px" }}>
                <img src={img} className="card-img-top" alt="..."></img>
                <div className="card-body p-4">
                  <h5 className="card-title">
                    Universitet talabalari o'rtasida "Zakovat" intellektual
                    o'yi...
                  </h5>
                  <div className="d-flex justify-content-between pt-1">
                    <p className="d-inline-block">
                      <i className="me-1">
                        <img src={time} alt="" />
                      </i>
                       2023-12-11
                    </p>
                    <p className="d-inline-block">
                      <i  className="me-1">
                        <img src={eye} alt="" />
                      </i>
                       1000
                    </p>
                  </div>
                </div>
              </div>
              </a>
              
            </div>
            <div className="col-3">
              <a href="#">
              <div className="card" style={{ width: "310px" }}>
                <img src={img} className="card-img-top" alt="..."></img>
                <div className="card-body p-4">
                  <h5 className="card-title">
                    Universitet talabalari o'rtasida "Zakovat" intellektual
                    o'yi...
                  </h5>
                  <div className="d-flex justify-content-between pt-1">
                    <p className="d-inline-block">
                      <i className="me-1">
                        <img src={time} alt="" />
                      </i>
                       2023-12-11
                    </p>
                    <p className="d-inline-block">
                      <i  className="me-1">
                        <img src={eye} alt="" />
                      </i>
                       1000
                    </p>
                  </div>
                </div>
              </div>
              </a>
              
            </div>
            <div className="col-3">
              <a href="#">
              <div className="card" style={{ width: "310px" }}>
                <img src={img} className="card-img-top" alt="..."></img>
                <div className="card-body p-4">
                  <h5 className="card-title">
                    Universitet talabalari o'rtasida "Zakovat" intellektual
                    o'yi...
                  </h5>
                  <div className="d-flex justify-content-between pt-2">
                    <p className="d-inline-block">
                      <i className="me-1">
                        <img src={time} alt="" />
                      </i>
                       2023-12-11
                    </p>
                    <p className="d-inline-block">
                      <i  className="me-1">
                        <img src={eye} alt="" />
                      </i>
                       1000
                    </p>
                  </div>
                </div>
              </div>
              </a>
              
            </div>
          </div>
          <div className="d-flex py-4 justify-content-center">
              <NavLink to="/News">
                <button className=" news-btn">Barcha yangiliklar</button>
              </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}
export default index;
