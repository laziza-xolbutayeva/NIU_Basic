import "./style.css";
import logo from "../../assets/logo.svg";
import telegram from "../../assets/telegram fill.svg";
import instagram from "../../assets/instagram.svg.svg";
import youtube from "../../assets/youtube.svg.svg";
import facebook from "../../assets/facebook.svg.svg";
import tiktok from "../../assets/tik-tok.svg";

function index() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className=" ">
              <div className="footer-logo">
                <div>
                  <img src={logo} alt=""></img>
                </div>
                <div>
                  <p>
                    “Navoiy innovatsiyalar universiteti” - Yangi olam, yangi
                    jamiyatda ilg'or texnologiyalar innovatsiyalar asosida yetuk
                    mutaxassislarni tayyorlash maskani.
                  </p>
                </div>
                <h2 className="footer-title">Biz ijtimoiy tarmoqlarda </h2>
                <ul className=" ">
                  <li>
                    <a href="#">
                      <img src={telegram} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={youtube} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={instagram} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={facebook} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={tiktok} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row">
              <div className="footer-card col-lg-6 ">
                <h2>Sahiflar</h2>
                <ul className="footer-links">
                  <li>
                    <a href="#">Biz haqimizda</a>
                  </li>
                  <li>
                    <a href="#">Universitet yangiliklari</a>
                  </li>
                  <li>
                    <a href="#">E'lonlar</a>
                  </li>
                  <li>
                    <a href="#">Elektron kutubxona</a>
                  </li>
                  <li>
                    <a href="#">Litsenziya</a>
                  </li>
                </ul>
              </div>
              <div className="footer-card col-lg-6 ">
                <h2 className="footer-title">Biz bilan bog'lanish</h2>
                <ul className="footer-links ">
                  <li>
                    <p>Telefonlar</p>
                    <a href="#" className="text-warning">
                      (55) 500-00-43
                    </a>
                  </li>
                  <li>
                    <p>Elektron pochta:</p>
                    <a href="#" className="text-warning">
                      info@niuedu.uz
                    </a>
                  </li>
                  <li>
                    <p>Manzil</p>
                    <a href="#" className="text-warning">
                      Navoiy viloyati Karmana tumani Toshkent ko'chasi 39-uy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="footer-card">
                <h2 className="footer-title">Xarita</h2>
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    marginTop: "40px",
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3052.185959147006!2d65.36759297651867!3d40.093566675244176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f51c7784ada55fd%3A0xc72c7fd7cecb4416!2sNavoiy%20innovatsiyalar%20instituti!5e0!3m2!1suz!2s!4v1703770607241!5m2!1suz!2s"
                    width="475"
                    height="300"
                    style={{ border: "0", borderRadius: "15px" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 v-line"></div>
        <div className="row w-100">
          <div className="col-lg-12 col-md-12 col-sm-12 text-copyright">
            © 2023 Navoiy innovatsiyalar universiteti, All Rights Reserved.
            Created By <span className="text-warning">Startapp.uz</span>
          </div>
        </div>
      </footer>
    </>
  );
}
export default index;
