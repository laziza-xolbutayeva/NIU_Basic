import "./style.css";
import img from "../../../assets/grand.svg";
import time from "../../../assets/time.svg";
import eye from "../../../assets/eyes.svg";
import { NavLink } from "react-router-dom";

function index() {
  return (
    <>
      <section className="index-Grand">
        <div className="container">
          <div className="col-12">
            <ul className="Grand-title d-flex">
              <li>
                <NavLink to="/">Asosiy</NavLink>
              </li>
              <li>
                <NavLink to="/">Universitet yangiliklari</NavLink>
              </li>
              <li>
                <NavLink to="/Grand" className="Grand-title-now">
                  Xalqaro grand-stipendiyalari
                </NavLink>
              </li>
            </ul>
            <h3 className="Grand-title-h">Xalqaro grand-stipendiyalari</h3>
          </div>
          <div className="row mt-5">
            <div className="col-4">
              <NavLink to="/Grand/Details">
                <div
                  className="card position-relative"
                  style={{ width: "400px" }}
                >
                  <img src={img} className="card-img-top" alt="..."></img>
                  <div className="card-body p-4">
                    <h5 className="card-title">
                      2023-2024 o’quv yillari uchun Malaga universiteti grant
                      asosida bakalavr yo’nalishiga
                    </h5>
                    <div className="d-flex justify-content-between pt-1">
                      <p className="d-inline-block">
                        <i className="me-1">
                          <img src={time} alt="" />
                        </i>
                        2023-12-11
                      </p>
                      <p className="d-inline-block">
                        <i className="me-1">
                          <img src={eye} alt="" />
                        </i>
                        1000
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col-4">
              <NavLink to="/Grand/Details">
                <div
                  className="card position-relative"
                  style={{ width: "400px" }}
                >
                  <img src={img} className="card-img-top" alt="..."></img>
                  <div className="card-body p-4">
                    <h5 className="card-title">
                      2023-2024 o’quv yillari uchun Malaga universiteti grant
                      asosida bakalavr yo’nalishiga
                    </h5>
                    <div className="d-flex justify-content-between pt-1">
                      <p className="d-inline-block">
                        <i className="me-1">
                          <img src={time} alt="" />
                        </i>
                        2023-12-11
                      </p>
                      <p className="d-inline-block">
                        <i className="me-1">
                          <img src={eye} alt="" />
                        </i>
                        1000
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col-4">
              <NavLink to="/Grand/Details">
                <div
                  className="card position-relative"
                  style={{ width: "400px" }}
                >
                  <img src={img} className="card-img-top" alt="..."></img>
                  <div className="card-body p-4">
                    <h5 className="card-title">
                      2023-2024 o’quv yillari uchun Malaga universiteti grant
                      asosida bakalavr yo’nalishiga
                    </h5>
                    <div className="d-flex justify-content-between pt-1">
                      <p className="d-inline-block">
                        <i className="me-1">
                          <img src={time} alt="" />
                        </i>
                        2023-12-11
                      </p>
                      <p className="d-inline-block">
                        <i className="me-1">
                          <img src={eye} alt="" />
                        </i>
                        1000
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col-4">
              <NavLink to="/Grand/Details">
                <div
                  className="card position-relative"
                  style={{ width: "400px" }}
                >
                  <img src={img} className="card-img-top" alt="..."></img>
                  <div className="card-body p-4">
                    <h5 className="card-title">
                      2023-2024 o’quv yillari uchun Malaga universiteti grant
                      asosida bakalavr yo’nalishiga
                    </h5>
                    <div className="d-flex justify-content-between pt-1">
                      <p className="d-inline-block">
                        <i className="me-1">
                          <img src={time} alt="" />
                        </i>
                        2023-12-11
                      </p>
                      <p className="d-inline-block">
                        <i className="me-1">
                          <img src={eye} alt="" />
                        </i>
                        1000
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col-4">
              <NavLink to="/Grand/Details">
                <div
                  className="card position-relative"
                  style={{ width: "400px" }}
                >
                  <img src={img} className="card-img-top" alt="..."></img>
                  <div className="card-body p-4">
                    <h5 className="card-title">
                      2023-2024 o’quv yillari uchun Malaga universiteti grant
                      asosida bakalavr yo’nalishiga
                    </h5>
                    <div className="d-flex justify-content-between pt-1">
                      <p className="d-inline-block">
                        <i className="me-1">
                          <img src={time} alt="" />
                        </i>
                        2023-12-11
                      </p>
                      <p className="d-inline-block">
                        <i className="me-1">
                          <img src={eye} alt="" />
                        </i>
                        1000
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col-4">
              <NavLink to="/News/Details">
                <div
                  className="card position-relative"
                  style={{ width: "400px" }}
                >
                  <img src={img} className="card-img-top" alt="..."></img>
                  <div className="card-body p-4">
                    <h5 className="card-title">
                      2023-2024 o’quv yillari uchun Malaga universiteti grant
                      asosida bakalavr yo’nalishiga
                    </h5>
                    <div className="d-flex justify-content-between pt-1">
                      <p className="d-inline-block">
                        <i className="me-1">
                          <img src={time} alt="" />
                        </i>
                        2023-12-11
                      </p>
                      <p className="d-inline-block">
                        <i className="me-1">
                          <img src={eye} alt="" />
                        </i>
                        1000
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
          <div className="pagination d-flex justify-content-center">
            <ul>
              <li>
                <a href="#"></a>
              </li>
              <li className="active">
                <a href="#"></a>
              </li>
              <li>
                <a href="#"></a>
              </li>
              <li>
                <a href="#"></a>
              </li>
              <li>
                <a href="#"></a>
              </li>
              <li>
                <a href="#"></a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
export default index;
