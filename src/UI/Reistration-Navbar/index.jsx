import "./style.css";
import logo from "../../assets/Link → niu_logotype_white_2.png.svg";
import flag from "../../assets/uzb-flag.svg";
import russian from "../../assets/russia-flag-circular-17765.svg";
import english from "../../assets/united_kingdom.svg";


function index() {
  return (
    <>
    <div className="reg-navbar-wrapper">
        <div className="container">
            <div className="reg-navbar d-flex justify-content-between">
                <div className="reg-navbar_logo d-flex">
                    <img src={logo} alt="" />
                    <h2 className="reg-navbar_logo_text">Navoiy 
innovatsiyalar 
universiteti</h2>
                </div>
                <div className="reg-navbar_lang">
                <div className="list-inline-item nav-submenu menu-type-1">
                  <a data-turbo="true" href="#">
                    <img
                      src={flag}
                      alt="O'zbek"
                      className="mobile-lang-photo"
                      width="20"
                      height="20"
                    ></img>
                    O'zbekcha
                  </a>
                  <ul className="min-width-160">
                    <li className="menu-type-2">
                      <a data-turbo="true" href="/ru" className="lang-menu">
                        <img
                          src={russian}
                          alt="O'zbek - O'zbek"
                          className="mobile-lang-photo me-2"
                          width="20"
                          height="20"
                        ></img>
                        Русский
                      </a>
                    </li>

                    <li className="menu-type-2">
                      <a data-turbo="true" href="/en" className="lang-menu">
                        <img
                          src={english}
                          alt="O'zbek - O'zbek"
                          className="mobile-lang-photo me-2"
                          width="20"
                          height="20"
                        ></img>
                        English
                      </a>
                    </li>

                    <li className="menu-type-2">
                      <a data-turbo="true" href="/cy" className="lang-menu">
                        <img
                          src={flag}
                          alt="O'zbek - O'zbek"
                          className="mobile-lang-photo me-2"
                          width="20"
                          height="20"
                        ></img>
                        Ўзбек
                      </a>
                    </li>
                  </ul>
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
export default index;