import { NavLink } from 'react-router-dom';

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
                  to="/UniversityAbout/University"
                  className="News-title-now"
                >
                  Navoiy innovatsiyalar universiteti bilan bog'lanish
                </NavLink>
              </li>
            </ul>
            <h3 className="News-title-h">
              Navoiy innovatsiyalar universiteti bilan bog'lanish
            </h3>
          </div>
          <div>
              
          </div>
          </div>
          </section>
          </>
  )
}
export default index;