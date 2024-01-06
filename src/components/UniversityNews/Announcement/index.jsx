import "./style.css";
import img from "../../../assets/announsement.svg";
import time from "../../../assets/time.svg";
import eye from "../../../assets/eyes.svg";
import { NavLink } from "react-router-dom";
import { req } from "../../../API/API/index";
import { baseURL } from "../../../API/API/index";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function index() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const result = await req.getAnnouncements();
      setData(result.results);
      console.log(result.results);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

// SEND DATA
const dispatch=useDispatch();
const toggleDataAnnoun=(data)=>{
  dispatch({type:'AnnounDataChange',newData:data})
}

  return (
    <>
      <section className="index-Grand">
        <div className="container">
          <div className="col-12">
            <ul className="News-title d-flex">
              <li>
                <NavLink to="/">Asosiy</NavLink>
              </li>
              <li>
                <NavLink to="/News">Universitet yangiliklari</NavLink>
              </li>
              <li>
                <NavLink to="/News/Details" className="News-title-now">
                  E'lonlar
                </NavLink>
              </li>
            </ul>
            <h3 className="News-title-h mb-5 mt-3">E'lonlar</h3>
          </div>
          <div className="row mt-5">
            {data.map((obj) => {
              return (
                <>
                  <div className="col-4 text-center">
                    <a href="#">
                      <div
                        className="card position-relative"
                        style={{ width: "420px" }}
                      >
                        <img
                          src={baseURL + obj.image[0].image}
                          className="card-img-top"
                          alt="..."
                        ></img>
                        <div className="card-body p-4">
                          <h5 className="card-title">{obj.title}</h5>
                          <div className="d-flex justify-content-between pt-1">
                            <p className="d-inline-block">
                              <i className="me-1">
                                <img src={time} alt="" />
                              </i>
                              {obj.created_at}
                            </p>
                            <p className="d-inline-block">
                              <i className="me-1">
                                <img src={eye} alt="" />
                              </i>
                              {obj.see}
                            </p>
                          </div>
                          <NavLink
                            to="/Announcements/Details"
                            className="text-decoration-none"
                            onClick={()=>toggleDataAnnoun(obj)}
                          >
                            <button className="announsement-btn">
                              Batafsil ko'rish
                            </button>
                          </NavLink>
                        </div>
                      </div>
                    </a>
                  </div>
                </>
              );
            })}
            {/* <div className="col-4 text-center">
              <a href="#">
                <div
                  className="card position-relative"
                  style={{ width: "420px" }}
                >
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
                        <i className="me-1">
                          <img src={eye} alt="" />
                        </i>
                        1000
                      </p>
                    </div>
                    <NavLink
                      to="/Announcements/Details"
                      className="text-decoration-none"
                    >
                      <button className="announsement-btn">
                        Batafsil ko'rish
                      </button>
                    </NavLink>
                  </div>
                </div>
              </a>
            </div> */}
          </div>
          <div className="col-12 pagination d-flex justify-content-center">
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
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
export default index;
