import "./style.css";
import telegram from "../../assets/telegram fill.svg";
import instagram from "../../assets/instagram.svg.svg";
import youtube from "../../assets/youtube.svg.svg";
import facebook from "../../assets/facebook.svg.svg";
import tiktok from "../../assets/tik-tok.svg";
import flag from "../../assets/uzb-flag.svg";
import gerb from "../../assets/gerb.svg";
import music from "../../assets/music 1.svg";
import search from "../../assets/search.svg.svg";
import Header from "./header/index"

function index() {
  return (
    <>
      <div className="top d-lg-block">
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-1">
                <div className="topbar-left">
                  <ul className="toplist-unstyled toplist-inline">
                    <li className="toplist-inline-item hidden-mobile">
                      <a href="#">
                        <img src={telegram} alt="" />
                      </a>
                    </li>
                    <li className="toplist-inline-item hidden-mobile">
                      <a href="#">
                        <img src={instagram} alt="" />
                      </a>
                    </li>
                    <li className="toplist-inline-item hidden-mobile">
                      <a href="#">
                        <img src={facebook} alt="" />
                      </a>
                    </li>
                    <li className="toplist-inline-item hidden-mobile">
                      <a href="#">
                        <img src={youtube} alt="" />
                      </a>
                    </li>
                    <li className="toplist-inline-item hidden-mobile">
                      <a href="#">
                        <img src={tiktok} alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
                </div>
                <div className="col-md-6 col-11">
                  <div className="bar-right d-flex justify-content-end">
                    <ul className="list-unstyled list-inline">
                      <li className="toplist-inline-item">
                        <a href="/pages/emblem">
                          <img src={flag} alt="flag" />
                        </a>
                      </li>
                      <li className="toplist-inline-item" id="gerb">
                        <a href="/pages/flag">
                          <img src={gerb}/>
                        </a>
                      </li>
                      <li className="toplist-inline-item">
                        <a href="/pages/anthem">
                          <img src={music} alt="" />
                        </a>
                      </li>
                      <li className="toplist-inline-item position-relative">
                        <button className="search-open">
                          <img src={search} alt="" />
                        </button>
                        <form className="search-box d-none" action="/uz/search">
                          <div>
                            <div>
                              <button type="button" className="search-close">
                                <i className="bi bi-x"></i>
                              </button>
                            </div>
                            <h4 className="text-white">Qidirish...</h4>
                            <div className="d-flex align-items-center justify-content-center">
                              <input
                                name="q"
                                placeholder="Qidirish..."
                                className="search-text"
                                type="search"
                              ></input>
                              <button className="search-button" type="submit">
                                <i className="bi bi-search"></i>
                              </button>
                            </div>
                          </div>
                        </form>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        </section>
      </div>
      <Header/>
    </>
  );
}

export default index;
