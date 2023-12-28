import './style.css'
import Navbar from '../../UI/Registration-Navbar/index'
import { NavLink } from 'react-router-dom';
import img from "../../assets/regInfo.svg"

function index() {
  return (
    <>
      <Navbar />
      <div className="regPasInfo-wrapper">
        <div className="container">
          <div className="regPasInfo">
            <div className="regPasInfo_box">
              <h3>Pasport ma’lumot</h3>
              <p>
                Ro’yhatdan o’tish uchun ushub ma’lumotni to’ldiring!
              </p>
              <div className="regPasInfo_Card d-flex">
                  <div className="regPasInfo_Card1">
                      <img src={img} alt=""/>
                  </div>
                  <div className="regPasInfo_Card2 row">
                      <div className="regPasInfo_Card2_left col-6">
                          <div className="regPasInfo_Card2_box">
                              <h5>Passport seriya va raqam</h5>
                              <input type="text" value="AC2245207"/>
                          </div>
                          <div className="regPasInfo_Card2_box">
                              <h5>Familiya</h5>
                              <input type="text" value="Palonchiyev"/>
                          </div>
                          <div className="regPasInfo_Card2_box">
                              <h5>Ism</h5>
                              <input type="text" value="Pistonchi"/>
                          </div>
                          <div className="regPasInfo_Card2_box">
                              <h5>Otasining ismi</h5>
                              <input type="text" value="Qahhor o'g'li"/>
                          </div>
                          <div className="regPasInfo_Card2_box">
                              <h5>Tug'ilgan kun</h5>
                              <input type="date" value="Dec 31 2005"/>
                          </div>
                          <div className="regPasInfo_Card2_box">
                              <h5>Jinsi</h5>
                              <input type="text" value="Erkak"/>
                          </div>
                      </div>
                      <div className="regPasInfo_Card2_right col-6">
                          <div className="regPasInfo_Card2_box">
                              <h5>JShShIR</h5>
                              <input type="text" value="154351154512121"/>
                          </div>
                          <div className="regPasInfo_Card2_box">
                              <h5>Passport berilgan vaqti</h5>
                              <input type="text" value="Sep 31 2021"/>
                          </div>
                          <div className="regPasInfo_Card2_box">
                              <h5>Passport tugash vaqti</h5>
                              <input type="text" value="Sep 31 2031"/>
                          </div>
                          <div className="regPasInfo_Card2_box">
                              <h5>Passport berilgan joyi</h5>
                              <input type="text" value="Yangiyo'l tumani Toshkent shahri"/>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="regPasInfo_Btn_Wrapper d-flex justify-content-end">
                  <NavLink to="/Registration/Info">
                  <button className="regPasInfo_back_btn">Ortga</button>
                  </NavLink>
                  <NavLink to="/Registration/PreviousEducation" className="ms-3">
                  <button className="regPasInfo_continue">Davom etish</button>
                  </NavLink>
                  
              </div>
            </div>
            <p className="registration_contact">Savollar bo’lsa bog’lanishingiz mumkin +998 55 500 00 43</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default index
