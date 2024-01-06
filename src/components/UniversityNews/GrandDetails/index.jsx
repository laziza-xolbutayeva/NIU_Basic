
import img from "../../../assets/grand.svg";
import { NavLink } from "react-router-dom";
import { baseURL } from "../../../API/API/index";
import { useSelector } from "react-redux";

function index() {
   //GETDATA
   const data=useSelector((state)=>state.grandData);
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
                <NavLink to="/">Universitet yangiliklari</NavLink>
              </li>
              <li>
                <NavLink to="/Grand">
                Xalqaro grand-stipendiyalari
                </NavLink>
              </li>
              <li>
                <NavLink to="/Grand/Details" className="News-title-now">
                  Batafsil
                </NavLink>
              </li>
            </ul>
            <h3 className="News-title-h mb-5 mt-3">{(data!=0?data.title:'«TOP STUDENT MOBILITY» stipendiyasi tanlovi')}</h3>
          </div>
          <div className="NewsDetail_Card d-flex">
            <img src={((data!=0)?baseURL+data.image[0].image:img)} alt="" className="NewsDetail_Card_img"/>
            <div className="NewsDetail_Card_box">
                <p>{((data!=0)?data.text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, ad.")}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default index;