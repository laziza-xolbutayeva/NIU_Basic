import "./style.css";
import img from "../../../assets/photo.svg";
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
      const result = await req.getVideoGallery();
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
const toggleDataVideo=(data)=>{
  dispatch({type:'VideoDataChange',newData:data})
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
                <NavLink to="/VideoGallery" className="News-title-now">
                  Video galareya
                </NavLink>
              </li>
            </ul>
            <h3 className="News-title-h">Video galareya</h3>
          </div>
          <div className="row mt-5">
          {data.map((obj) => {
              console.log(obj);
              const video='https://youtu.be/jm-7mOwVOVM';
              return (
                <>
                <div className="col-4">
              <NavLink to="/VideoGallery/Details" onClick={()=>toggleDataVideo(obj)}>
                <div
                  className="card position-relative"
                  style={{ width: "420px" }}
                >
                  <iframe width="420" height="300" className="card-img-top" src={obj.url} frameborder="0" allow=" picture-in-picture;" ></iframe>
                  <div className="card-body p-4">
                    <h5 className="card-title">{obj.title}
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
                </>)
          })}
            
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
