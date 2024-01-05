import React, { useState, useEffect } from "react";
import "./style.css";
import time from "../../../assets/time.svg";
import eye from "../../../assets/eyes.svg";
import { NavLink } from "react-router-dom";
import { req } from "../../../API/API/index";
import { baseURL } from "../../../API/API/index";
import { useDispatch, useSelector } from "react-redux";
function index() {
  // GET DATA
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const result = await req.getNews();
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
  const toggleData=(newData)=>{
    dispatch({type:'newDataChange',newData:newData})
  }

  return (
    <>
      <section className="index-News">
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
                <NavLink to="/News" className="News-title-now">
                  Yangiliklar
                </NavLink>
              </li>
            </ul>
            <h3 className="News-title-h">Yangiliklar</h3>
          </div>
          <div className="row mt-5">
            {data.map((obj,i) => {
              console.log(i)
              return (
                <>
                  <div className="col-3">
                    <NavLink to="/News/Details" onClick={()=>toggleData(obj)}>
                      <div
                        className="card position-relative"
                        style={{ width: "310px" }}
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
                        </div>
                      </div>
                    </NavLink>
                  </div>
                </>
              );
            })}
            
            <div className="pagination d-flex justify-content-center">
              <ul>
                <li>
                  <a href="#"></a>
                </li>
                {/* {for(let i=0;i<obj.count;i++){}} */}
                <li className="active">
                  <a href="#"></a>
                </li>
                <li>
                  <a href="#"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default index;
