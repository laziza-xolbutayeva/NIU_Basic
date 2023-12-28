import "./style.css";
import img from "../../../assets/photo.svg";
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
                <NavLink to="/Gallery" className="Grand-title-now">
                  Video galareya
                </NavLink>
              </li>
            </ul>
            <h3 className="Grand-title-h">Video galareya</h3>
          </div>
          <div className="row mt-5">
            <div className="col-4">
              <NavLink to="/VideoGallery/Details">
                <div
                  className="card position-relative"
                  style={{ width: "400px" }}
                >
                  <img src={img} className="card-img-top" alt="..."></img>
                  <div className="card-body p-4">
                    <h5 className="card-title">Muzokaralar muvaffaqiyatli yakunlandi.
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
              <NavLink to="/VideoGallery/Details">
                <div
                  className="card position-relative"
                  style={{ width: "400px" }}
                >
                  <img src={img} className="card-img-top" alt="..."></img>
                  <div className="card-body p-4">
                    <h5 className="card-title">Muzokaralar muvaffaqiyatli yakunlandi.
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
              <NavLink to="/VideoGallery/Details">
                <div
                  className="card position-relative"
                  style={{ width: "400px" }}
                >
                  <img src={img} className="card-img-top" alt="..."></img>
                  <div className="card-body p-4">
                    <h5 className="card-title">Muzokaralar muvaffaqiyatli yakunlandi.
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
              <NavLink to="/VideoGallery/Details">
                <div
                  className="card position-relative"
                  style={{ width: "400px" }}
                >
                  <img src={img} className="card-img-top" alt="..."></img>
                  <div className="card-body p-4">
                    <h5 className="card-title">Muzokaralar muvaffaqiyatli yakunlandi.
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
              <NavLink to="/VideoGallery/Details">
                <div
                  className="card position-relative"
                  style={{ width: "400px" }}
                >
                  <img src={img} className="card-img-top" alt="..."></img>
                  <div className="card-body p-4">
                    <h5 className="card-title">Muzokaralar muvaffaqiyatli yakunlandi.
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
                    <h5 className="card-title">Muzokaralar muvaffaqiyatli yakunlandi.
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
