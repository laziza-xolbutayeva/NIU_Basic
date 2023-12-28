import * as React from "react";
import "./style.css";
import img from "../../../assets/school icon.svg";
function index() {
  return (
    <>
      <div className="index-direction">
        <div className="container">
          <div className="direction">
            <div className="direction-title">
              <h2>Ta'lim yo'nalishlari</h2>
            </div>
            <div className="direction-body">
              <div className="row">
                <div className="col-4">
                  <div className="direction-card">
                    <div className="direction-card_icon">
                      <img src={img} alt="" />
                    </div>
                    <p>Maktabgacha talim</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="direction-card">
                    <div className="direction-card_icon">
                      <img src={img} alt="" />
                    </div>
                    <p>Maktabgacha talim</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="direction-card">
                    <div className="direction-card_icon">
                      <img src={img} alt="" />
                    </div>
                    <p>Maktabgacha talim</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="direction-card">
                    <div className="direction-card_icon">
                      <img src={img} alt="" />
                    </div>
                    <p>Maktabgacha talim</p>
                  </div>
                </div>
                {/* <div className="col-3">
                  <div className="diraction2"></div>
                    <div className="direction-card">
                      <p>
                        Texnologik jarayonlar va ishlab chiqarishni
                        avtomatlashtirish va boshqarish (tarmoqlar bo'yicha)
                      </p>
                    </div>
                </div>
                <div className="col-3">
                  <div className="diraction2"></div>
                    <div className="direction-card">
                      <p>
                        Texnologik jarayonlar va ishlab chiqarishni
                        avtomatlashtirish va boshqarish (tarmoqlar bo'yicha)
                      </p>
                    </div>
                </div>
                <div className="col-3">
                  <div className="diraction2"></div>
                    <div className="direction-card">
                      <p>
                        Texnologik jarayonlar va ishlab chiqarishni
                        avtomatlashtirish va boshqarish (tarmoqlar bo'yicha)
                      </p>
                    </div>
                </div>
                <div className="col-3">
                  <div className="diraction2"></div>
                    <div className="direction-card">
                      <p>
                        Texnologik jarayonlar va ishlab chiqarishni
                        avtomatlashtirish va boshqarish (tarmoqlar bo'yicha)
                      </p>
                    </div>
                </div>
                <div className="col-3">
                  <div className="diraction2"></div>
                    <div className="direction-card">
                      <p>
                        Texnologik jarayonlar va ishlab chiqarishni
                        avtomatlashtirish va boshqarish (tarmoqlar bo'yicha)
                      </p>
                    </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default index;
