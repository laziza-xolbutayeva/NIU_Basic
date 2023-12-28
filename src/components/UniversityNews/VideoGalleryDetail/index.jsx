import img from "../../../assets/photoGallery.svg";
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
                <NavLink to="/Gallery">Video galareya</NavLink>
              </li>
              <li>
                <NavLink to="/Gallery/Details" className="News-title-now">
                  Batafsil
                </NavLink>
              </li>
            </ul>
            <h3 className="News-title-h mb-5 mt-3">
              Universitetda O'zbekiston Respulikasi Konstitutsiyada
              iste'molchilar huquqlarini himoya qilish bo'yicha davra suhbati
              bo'lib o'tdi.
            </h3>
          </div>
          <div>
          <iframe width="1280" height="720" style={{borderRadius:"15px"}} src="https://www.youtube.com/embed/5ZS__KFmP3w" title="QABUL BOSHLANDI | 2023-2024 | NAVOIY INNOVATSIYALAR UNIVERSITETI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          </div>
          </section>
          </>
  )
}
export default index;