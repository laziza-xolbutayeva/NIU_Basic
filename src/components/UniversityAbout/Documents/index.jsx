
import { NavLink } from "react-router-dom";

function index() {
  return (
    <>
      <section className="index-Grand">
        <div className="container">
          <div className="col-12">
            <ul className="Grand-title d-flex">
              <li>
                <NavLink to="/">Asosiy</NavLink>
              </li>
              <li>
                <NavLink to="/">Universitet yangiliklari</NavLink>
              </li>
              <li>
                <NavLink to="/Grand" className="Grand-title-now">
                  Xalqaro grand-stipendiyalari
                </NavLink>
              </li>
            </ul>
            <h3 className="Grand-title-h">Xalqaro grand-stipendiyalari</h3>
          </div>
          </div>
          </section>
          </>
  )
}
export default index;