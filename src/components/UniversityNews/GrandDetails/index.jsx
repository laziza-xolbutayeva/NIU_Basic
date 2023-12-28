
import img from "../../../assets/grand.svg";
import { NavLink } from "react-router-dom";

function index() {
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
            <h3 className="News-title-h mb-5 mt-3">«TOP STUDENT MOBILITY» stipendiyasi tanlovi</h3>
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