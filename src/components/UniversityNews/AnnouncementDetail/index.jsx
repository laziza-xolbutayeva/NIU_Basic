import "./style.css";
import img from "../../../assets/announDetail.svg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { baseURL } from "../../../API/API/index";

function index() {
   //GETDATA
   const data=useSelector((state)=>state.announData);
   console.log(data);
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
                <NavLink to="/News">Universitet yangiliklari</NavLink>
              </li>
              <li>
                <NavLink to="/News/Details">
                  E'lonlar
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="News-title-now">
                  Batafsil
                </NavLink>
              </li>
            </ul>
            <h3 className="News-title-h mb-5 mt-3">{(data!=0?data.title:'')}</h3>
          </div>
          <div className="NewsDetail_Card d-flex">
            <img src={((data!=0)?baseURL+data.image[0].image:img)} alt="" className="NewsDetail_Card_img"/>
            <div className="NewsDetail_Card_box">
                <p>{((data!=0)?data.text:"")}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default index;