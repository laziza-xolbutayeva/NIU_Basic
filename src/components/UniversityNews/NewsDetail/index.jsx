import "./style.css";
import img from "../../../assets/newsdetail.svg";
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
                <NavLink to="/News">Universitet yangiliklari</NavLink>
              </li>
              <li>
                <NavLink to="/News/Details">
                  Yangiliklar
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="News-title-now">
                  Batafsil
                </NavLink>
              </li>
            </ul>
            <h3 className="News-title-h mb-5 mt-3">Universitet talabalari o'rtasida "Zakovat" intellektual o'yini o'tkazildi.</h3>
          </div>
          <div className="NewsDetail_Card d-flex">
            <img src={img} alt="" className="NewsDetail_Card_img"/>
            <div className="NewsDetail_Card_box">
                <p>Kurs talabalarni kredit texnologiyasi va Mirasda o'qitishning o'ziga xos xususiyatlariga moslashtirish, shuningdek, o'qish va hayot uchun foydali ko'nikmalarga ega bo'lish uchun mo'ljallangan.</p>
                <p>Kurs talabalarni kredit texnologiyasi va Mirasda o'qitishning o'ziga xos xususiyatlariga moslashtirish, shuningdek, o'qish va hayot uchun foydali ko'nikmalarga ega bo'lish uchun mo'ljallangan.</p>
                <p>Kurs talabalarni kredit texnologiyasi va Mirasda o'qitishning o'ziga xos xususiyatlariga moslashtirish, shuningdek, o'qish va hayot uchun foydali ko'nikmalarga ega bo'lish uchun mo'ljallangan.</p>
                <p>Kurs talabalarni kredit texnologiyasi va Mirasda o'qitishning o'ziga xos xususiyatlariga moslashtirish, shuningdek, o'qish va hayot uchun foydali ko'nikmalarga ega bo'lish uchun mo'ljallangan.</p>
                <p>Kurs talabalarni kredit texnologiyasi va Mirasda o'qitishning o'ziga xos xususiyatlariga moslashtirish, shuningdek, o'qish va hayot uchun foydali ko'nikmalarga ega bo'lish uchun mo'ljallangan.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default index;
