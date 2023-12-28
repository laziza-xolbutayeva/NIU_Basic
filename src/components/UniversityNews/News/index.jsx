import "./style.css";
import img from "../../../assets/newsImg.svg";
import time from "../../../assets/time.svg";
import eye from "../../../assets/eyes.svg";
import { NavLink } from "react-router-dom";

function index() {
  return (
    <>
      <section className="index-News">
        <div className="container">
          <div className="col-12">
            <ul className="News-title d-flex">
                <li><NavLink to="/">Asosiy</NavLink></li>
                <li><NavLink to="/News">Universitet yangiliklari</NavLink></li>
                <li><NavLink to="/" className="News-title-now">Yangiliklar</NavLink></li>
            </ul>
            <h3 className="News-title-h">Yangiliklar</h3>
          </div>
          <div className="row mt-5">
            <div className="col-3">
              <NavLink to="/News/Details">
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
              </NavLink>
              
            </div>
            <div className="col-3">
              <NavLink to="/News/Details">
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
              </NavLink>
              
            </div>
            <div className="col-3">
              <NavLink to="/News/Details">
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
              </NavLink>
              
            </div>
            <div className="col-3">
              <NavLink to="/News/Details">
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
              </NavLink>
              
            </div><div className="col-3">
              <NavLink to="/News/Details">
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
              </NavLink>
              
            </div><div className="col-3">
              <NavLink to="/News/Details">
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
              </NavLink>
              
            </div><div className="col-3">
              <NavLink to="/News/Details">
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
              </NavLink>
              
            </div><div className="col-3">
              <NavLink to="/News/Details">
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
              </NavLink>
              
            </div>
            <div className="pagination d-flex justify-content-center">
      <ul>
          <li><a href="#"></a></li>
          <li className="active" ><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
      </ul>
  </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default index;