import './style.css'
import Navbar from '../../UI/Registration-Navbar/index'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/Link → niu_logotype_white_2.png (1).svg'

function index() {
  return (
    <>
      <Navbar />
      <div className="GeneralInfo-wrapper">
        <div className="container">
          <div className="GeneralInfo">
            <div className="GeneralInfo_box">
              <div className="d-flex justify-content-center mb-5">
                <img
                  src={logo}
                  alt=""
                  className="m-auto justify-content-center"
                />
              </div>
              <h3>Tasdiqlash</h3>
              <p className="text-danger text-center">
                Eslatma: kiritilgan ma’lumotlar tog’ri ekanligini tekshiring
              </p>
              <div className="GeneralInfo_cards">
                <div className="GeneralInfo_card mb-3">
                  <p className="GeneralInfo_card_text">Shaxsiy ma’lumotlari</p>
                </div>
                <div className="GeneralInfo-form mb-4">
                  <label htmlFor="GeneralInfo">Familiyangiz</label>
                  <input type="text" value="Pistonchi" />
                </div>
                <div className="GeneralInfo-form mb-4">
                  <label htmlFor="GeneralInfo">Sharifingiz</label>
                  <input type="text" value="Alisher o'g'li" />
                </div>

                <div className="GeneralInfo-form mb-4 ">
                  <label htmlFor="GeneralInfo">Jinsi</label>
                  <div className="d-flex">
                    <div>
                      <input type="radio" name="gender" value="Palonchi" />
                      <label htmlFor="" className="ms-1">
                        Erkak
                      </label>
                    </div>
                    <div className="ms-3">
                      <input type="radio" name="gender" value="Palonchi" />
                      <label htmlFor="" className="ms-1">
                        Ayol
                      </label>
                    </div>
                  </div>
                </div>
                <div className="GeneralInfo_card mb-3">
                  <p className="GeneralInfo_card_text">Pasport ma’lumotlari</p>
                </div>
                <div className="GeneralInfo-form mb-4">
                  <label htmlFor="GeneralInfo">Davlat</label>
                  <input type="text" value="Uzbekistan" />
                </div>
                <div className="GeneralInfo-form mb-4">
                  <label htmlFor="GeneralInfo">Pasport seriya va raqami</label>
                  <input type="text" value="AC1234567" />
                </div>
                <div className="GeneralInfo-form mb-4">
                  <label htmlFor="GeneralInfo">Tug’ilgan kun</label>
                  <input type="date" value="20.11.1998" />
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="GeneralInfo-form2 mb-4" id="sertificat">
                      <label htmlFor="regPrevEdu">Viloyat</label>
                      <select name="" id="" placeholder="Tanlang">
                        <option selected>Toshkent shahar</option>
                        <option value="Milliy">Mlilliy</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className=" GeneralInfo-form2 mb-4" id="sertificat">
                      <label htmlFor="regPrevEdu">Shahar/Tman</label>
                      <select name="" id="" placeholder="Tanlang">
                        <option value="" selected>
                          Chilonzor
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="GeneralInfo-form mb-4">
                  <label htmlFor="GeneralInfo">Manzil</label>
                  <input
                    type="date"
                    value="Toshkent shahar Chilonzor tumani 20-uy"
                  />
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="GeneralInfo-form2 mb-4" id="sertificat">
                      <label htmlFor="regPrevEdu">Qachon berilgan</label>
                      <input type="date" name="" id="" value="20.11.1998" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className=" GeneralInfo-form2 mb-4" id="sertificat">
                      <label htmlFor="regPrevEdu">Qayerda berilgan</label>
                      <input
                        type="text"
                        name=""
                        id=""
                        value="Toshkent shahar Chilonzor tumani"
                      />
                    </div>
                  </div>
                </div>

                <div className="GeneralInfo_card mb-3">
                  <p className="GeneralInfo_card_text">Ta'lim ma’lumotlari</p>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="GeneralInfo-form2 mb-4" id="sertificat">
                      <label htmlFor="regPrevEdu">
                        Oxirgi ta’lim muassasasi
                      </label>

                      <select name="" id="" placeholder="Tanlang">
                        <option selected>Maktab</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className=" GeneralInfo-form2 mb-4" id="sertificat">
                      <label htmlFor="regPrevEdu">
                        Attestat yoki diplomning elektron nushasi
                      </label>
                      <input type="text" name="" id="" value="diplom93.jpg" />
                    </div>
                  </div>
                </div>

                <div className="GeneralInfo_card mb-3">
                  <p className="GeneralInfo_card_text">
                    Ta'lim yo'nalishi ma’lumotlari
                  </p>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="GeneralInfo-form2 mb-4" id="sertificat">
                      <label htmlFor="regPrevEdu">Ta’lim tili</label>

                      <select name="" id="" placeholder="Tanlang">
                        <option selected>O'zbekcha</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className=" GeneralInfo-form2 mb-4" id="sertificat">
                      <label htmlFor="regPrevEdu">Ta'lim shakli</label>
                      <select name="" id="">
                        <option selected>Sirtqi</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="GeneralInfo-form mb-4">
                  <label htmlFor="GeneralInfo">Ta’lim yo’nalishi</label>
                  <select name="" id="">
                    <option selected value="">
                      Moliya
                    </option>
                  </select>
                </div>

                <div className="GeneralInfo_card mb-3">
                  <p className="GeneralInfo_card_text">Imthon ma’lumotlari</p>
                </div>
                <div className="regExamDate-form mb-4">
                  <p>Qanday tartibda imthonga qatnashmoqchisiz!</p>
                  <div>
                    <input
                      type="radio"
                      name="TakeTheExam"
                      id="exam" checked
                    />
                    <label htmlFor="exam" className="ms-2">
                      Imtihon topshirish orqali
                    </label>
                  </div>
                </div>
                <div className="regExamDate-form mb-4" id="Examtype">
                  <p>Imthonni qanday tartibda topshirmoqchisiz!</p>
                  <input type="radio" name="ExamType" id="on" checked/>
                  <label htmlFor="on" className="ms-2">
                    Online
                  </label>
                </div>
                <div className="regExamDate-form mb-4" id="ExamTime">
                  <p>Imtihon kuni va vaqti</p>
                  <select name="" id="" >
                    <option selected>12.12.2023   12:00</option>
                  </select>
                </div>
                <div className="d-flex justify-content-end">
                <NavLink
                  to="/Registration/Download"
                  className="text-decoration-none"
                >
                  <button className="registration_continue " type="button">
                    Saqlash
                  </button>
                </NavLink>
                </div>
              </div>
            </div>  <p className="registration_contact">Savollar bo’lsa bog’lanishingiz mumkin +998 55 500 00 43</p>
            
          </div>
        </div>
      </div>
    </>
  )
}
export default index
