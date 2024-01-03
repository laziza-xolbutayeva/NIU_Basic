
import { NavLink } from "react-router-dom";
import img from "../../../assets/structure.svg";

function index() {
  return (
    <>
      <section className="index-News">
        <div className="container">
          <div className="col-12 mb-5">
            <ul className="News-title d-flex">
              <li>
                <NavLink to="/">Asosiy</NavLink>
              </li>
              <li>
                <NavLink to="/">Universitet haqida</NavLink>
              </li>
              <li>
                <NavLink to="/UniversityAbout/Structure" className="News-title-now">
                  Navoiy innovatsiyalar universiteti tuzilmasi
                </NavLink>
              </li>
            </ul>
            <h3 className="News-title-h">Navoiy innovatsiyalar universiteti tuzilmasi</h3>
          </div>
          <div className="w-100">
              <img src={img} className="w-100" alt=""/>
          </div>
          </div>
          </section>
          </>
  )
}
export default index;