import "./style.css";
import Navbar from "../../UI/Registration-Navbar/index";
import { NavLink } from "react-router-dom";

function index() {
  return (
    <>
      <Navbar />
      <div className="registrationInfo-wrapper">
        <div className="container">
          <div className="registrationInfo">
            <div className="registrationInfo_box">
            <h3>Pasport ma’lumot</h3>
              <p className="registrationSMS_box_info">Ro’yhatdan o’tish uchun ushub ma’lumotni to’ldiring!</p>
              <form action="registration" autoComplete="off">
                <div className="registration-form mb-4">
                  <label htmlFor="registration">Pasport seriya va raqami</label>
                  <input type="text" placeholder="Pasport seriya raqmingiz" />
                </div>
                <div className="registration-form mb-4">
                  <label htmlFor="registration">Tug’ilgan kun</label>
                  <input type="date"  />
                </div>
                <div className="d-flex justify-content-end ">
              <NavLink to="/Registration/PassportInfo" className="text-decoration-none">
                <button className="registration_continue" type="button" >Davom etish</button>
              </NavLink>
              </div>
              </form>
            </div>
            <p className="registration_contact">Savollar bo’lsa bog’lanishingiz mumkin +998 55 500 00 43</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default index;
