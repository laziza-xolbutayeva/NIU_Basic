
import { NavLink } from 'react-router-dom';
import img from "../../../assets/requieites.svg"

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
                <NavLink
                  to="/UniversityAbout/Requisites"
                  className="News-title-now"
                >
                  Navoiy innovatsiyalar universiteti rekvizitlari
                </NavLink>
              </li>
            </ul>
            <h3 className="News-title-h">
              Navoiy innovatsiyalar universiteti rekvizitlari
            </h3>
          </div>
          <div>
              <img src={img} alt=""/>
          </div>
          </div>
          </section>
          </>
  )
}
export default index;