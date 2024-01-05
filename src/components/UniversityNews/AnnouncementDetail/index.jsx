import "./style.css";
import img from "../../../assets/announDetail.svg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function index() {
   //GETDATA
   const counter=useSelector((state)=>state.counter);
   console.log(counter);
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
            <h3 className="News-title-h mb-5 mt-3">Ochiq dars</h3>
          </div>
          <div className="NewsDetail_Card d-flex">
            <img src={img} alt="" className="NewsDetail_Card_img"/>
            <div className="NewsDetail_Card_box">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere magnam omnis delectus quae, dignissimos ex ab similique consequuntur sit ullam inventore quo laborum totam deserunt perspiciatis corporis. Tempora porro beatae reprehenderit saepe debitis iure repellat quisquam eum reiciendis quod dolor, itaque molestiae autem officia fuga nostrum distinctio incidunt error quidem illum! Quos sit voluptates, quo facilis debitis soluta similique atque facere corporis architecto hic ea error aut. Odit doloribus quos debitis ullam laborum sequi quia veritatis saepe unde sint, incidunt distinctio consectetur repudiandae corporis, modi facilis voluptatibus. Temporibus officia quam eligendi. Quae id tempora ea, debitis vero porro! Asperiores, officia.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default index;