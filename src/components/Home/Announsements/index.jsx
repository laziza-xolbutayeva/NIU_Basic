import "./style.css";
import img from "../../../assets/announsement.svg";
import time from "../../../assets/time.svg";
import eye from "../../../assets/eyes.svg";

function index() {
  return (
    <>
    <section className="index-announsement">
        <div className="container">
          <div className="col-12">
            <div className="announsement-title d-flex justify-content-between">
              <h3 className="announsement-title-h">E'lonlar</h3>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-4 text-center">
              <a href="#">
              <div className="card position-relative" style={{ width: "420px" }}>
                <img src={img} className="card-img-top" alt="..."></img>
                <div className="card-body p-4">
                  <h5 className="card-title">Ochiq dars</h5>
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
                  <a href="#" className="text-decoration-none">
                  <button className="announsement-btn">Batafsil ko'rish</button>
                  </a>
                  
                </div>
              </div>
              </a>
              
            </div>
            <div className="col-4">
              <a href="#">
              <div className="card position-relative" style={{ width: "420px" }}>
                <img src={img} className="card-img-top" alt="..."></img>
                <div className="card-body p-4">
                  <h5 className="card-title">Ochiq dars</h5>
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
                  <a href="#" className="text-decoration-none">
                  <button className="announsement-btn">Batafsil ko'rish</button>
                  </a>
                  
                </div>
              </div>
              </a>
              
            </div>
            <div className="col-4">
              <a href="#">
              <div className="card position-relative" style={{ width: "420px" }}>
                <img src={img} className="card-img-top" alt="..."></img>
                <div className="card-body p-4">
                  <h5 className="card-title">Ochiq dars</h5>
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
                  <a href="#" className="text-decoration-none">
                  <button className="announsement-btn">Batafsil ko'rish</button>
                  </a>
                  
                </div>
              </div>
              </a>
              
            </div>
            <div className="col-4">
              <a href="#">
              <div className="card position-relative" style={{ width: "420px" }}>
                <img src={img} className="card-img-top" alt="..."></img>
                <div className="card-body p-4">
                  <h5 className="card-title">Ochiq dars</h5>
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
                  <a href="#" className="text-decoration-none">
                  <button className="announsement-btn">Batafsil ko'rish</button>
                  </a>
                  
                </div>
              </div>
              </a>
              
            </div>
            <div className="col-4">
              <a href="#">
              <div className="card position-relative" style={{ width: "420px" }}>
                <img src={img} className="card-img-top" alt="..."></img>
                <div className="card-body p-4">
                  <h5 className="card-title">Ochiq dars</h5>
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
                  <a href="#" className="text-decoration-none">
                  <button className="announsement-btn">Batafsil ko'rish</button>
                  </a>
                  
                </div>
              </div>
              </a>
              
            </div>
            
          </div>
          
        </div>
      </section>
    </>
  )
}
export default index;