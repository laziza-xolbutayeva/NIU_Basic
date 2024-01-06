import "./style.css";
import img from "../../../assets/grand.svg";
import time from "../../../assets/time.svg";
import eye from "../../../assets/eyes.svg";
import { NavLink } from "react-router-dom";
import { req } from "../../../API/API/index";
import { baseURL } from "../../../API/API/index";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function index() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const result = await req.getGrand();
      setData(result.results);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  // SEND DATA
const dispatch=useDispatch();
const toggleDataGrand=(data)=>{
  dispatch({type:'GrandDataChange',newData:data})
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
                <NavLink to="/">Universitet yangiliklari</NavLink>
              </li>
              <li>
                <NavLink to="/Grand" className="News-title-now">
                  Xalqaro grand-stipendiyalari
                </NavLink>
              </li>
            </ul>
            <h3 className="News-title-h">Xalqaro grand-stipendiyalari</h3>
          </div>
          <div className="row mt-5">
          {data.map((obj) => {
              return (
                <>
                <div className="col-4">
              <NavLink to="/Grand/Details" onClick={()=>toggleDataGrand(obj)}>
                <div
                  className="card position-relative"
                  style={{ width: "400px" }}
                >
                  <img src={baseURL + obj.image[0].image} className="card-img-top" alt="..."></img>
                  <div className="card-body p-4">
                    <h5 className="card-title">
                    {obj.title}
                    </h5>
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
                  </div>
                </div>
              </NavLink>
            </div>
                </>
              )
          })}
            
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
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
export default index;
