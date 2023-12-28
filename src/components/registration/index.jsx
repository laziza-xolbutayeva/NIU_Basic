import "./style.css";
import Navbar from "../../UI/Registration-Navbar/index";
import {NavLink} from "react-router-dom";

function index() {
  return (
    <>
      <Navbar />
      <div className="registration-wrapper">
        <div className="container">
          <div className="registration">
            <div className="registration_box">
              <h3>
                Assalomu aleykum! NIUga ro'yxatdan o'tish platformasiga xush
                kelibsiz!
              </h3>
              <p>
                Sahifada keltirilgan bandlarni to'ldirish bo'yicha savollar
                tug'ilsa, quyidagi telefon raqamiga bog'laning! Sizga omad
                tilaymiz!
              </p>
              <form action="registration" autoComplete="off">
                <div className="registration-form mb-4">
                  <label htmlFor="registration">FID</label>
                  <input type="text" placeholder="Famliya Ism Otasing ism" />
                </div>
                <div className="registration-form mb-4">
                  <label htmlFor="registration">Telefon raqami</label>
                  <input type="text" placeholder="+998" />
                </div>
                <div className="d-none registration-form mb-4" id="AdditionalPhone">
                  <label htmlFor="registration">Qo'shimcha telefon raqami</label>
                  <input type="text" placeholder="+998" />
                </div>
                <div className="d-flex justify-content-center">
                <button className="addPhone" onClick={(e)=>{
                  document.getElementById("AdditionalPhone").classList.remove("d-none");
                  console.log(e.target.classList.add("d-none"))
                }}>Telefon raqam qo’shish</button>
              </div>
              <div className="PublicOffer">
                <input type="radio" name="" id=""/>
                <label htmlFor="">Men, <a href="#" className="text-dark">Ommaviy oferta</a> talablari bilan tanishib chiqganimni va ularga e`tirozim yo'qligini tasdiqlayman</label>
              </div>
              <NavLink to="/Registration/SMS" className="d-flex justify-content-end text-decoration-none">
                <button className="registration_continue" type="button" >Davom etish</button>
              </NavLink>
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
