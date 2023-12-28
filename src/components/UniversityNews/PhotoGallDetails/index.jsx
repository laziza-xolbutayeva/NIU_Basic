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
                <NavLink to="/Gallery">Fotogalareya</NavLink>
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
          <div className="row d-flex ">
            <div className="col-6 mb-4">
                <img src={img} alt="" style={{width:"600px"}} className="" />
            </div>
            <div className="col-6 mb-4">
                <img src={img} alt="" style={{width:"600px"}} className="" />
            </div>
            <div className="col-6 mb-4">
                <img src={img} alt="" style={{width:"600px"}} className="" />
            </div>
            <div className="col-6 mb-4">
                <img src={img} alt="" style={{width:"600px"}} className="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default index;
