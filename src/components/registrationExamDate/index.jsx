import React, { Component } from 'react';
import './style.css'
import Navbar from '../../UI/Registration-Navbar/index'
import { NavLink } from 'react-router-dom'

function index() {
  function ContinueBtn() {
    document.getElementsByClassName("registration_continue")[0].classList.remove("regNoContinue");
    document.getElementsByClassName("registration_continue")[0].removeAttribute("disabled");
    
  }
  return (
    <>
      <Navbar />
      <div className="regExamDate-wrapper">
        <div className="container">
          <div className="regExamDate">
            <div className="regExamDate_box">
              <h3>Imtihon sanasi</h3>
              <p>
                Imtihonda qantnashish uchun ushbu ma’lumotlarni kiritishingiz
                shart!
              </p>
              <form action="regExamDate" autoComplete="off">
                <div className="regExamDate-form mb-4">
                  <p>Qanday tartibda imthonga qatnashmoqchisiz!</p>
                  <div>
                    <input type="radio" name="TakeTheExam" id="exam" onClick={()=>{
                      document.getElementById("Examtype").classList.remove("d-none");
                    }}/>
                    <label htmlFor="exam" className="ms-2">
                      Imtihon topshirish orqali
                    </label>
                  </div>
                  <input type="radio" name="TakeTheExam" id="mandat" onClick={()=>{ContinueBtn()}}/>
                  <label htmlFor="mandat" className="ms-2">
                    UZB Mandat natijalari bo’yicha
                  </label>
                </div>
                <div className="regExamDate-form mb-4 d-none" id="Examtype">
                  <p>Imthonni qanday tartibda topshirmoqchisiz!</p>
                  <div>
                    <input type="radio" name="ExamType" id="off" onClick={()=>{
                      document.getElementById("ExamPlace").classList.remove("d-none");
                      document.getElementById("ExamTime").classList.remove("d-none");
                    }}/>
                    <label htmlFor="off" className="ms-2" >
                      Offline
                    </label>
                  </div>
                  <input type="radio" name="ExamType" id="on" onClick={()=>{
                      document.getElementById("ExamTime").classList.remove("d-none");
                    }}/>
                  <label htmlFor="on" className="ms-2">
                    Online
                  </label>
                </div>
                <div className="regExamDate-form mb-4 d-none" id="ExamPlace">
                  <p>Imtihon markazi</p>
                  <select name="" id="">
                    <option value="" selected disabled hidden>
                      Tanlang
                    </option>
                    <option>Toshkent shahar, Yunusabad tumani, Osiyo ko’chasi </option>
                  </select>
                </div>
                <div className="regExamDate-form mb-4 d-none" id="ExamTime">
                  <p>Imtihon kuni va vaqti</p>
                  <select name="" id="" onSelect={(e)=>{
                    console.log(1221)
                  }}>
                    <option value="" selected disabled hidden>
                      Tanlang
                    </option>
                    <option>12.12.2023   12:00</option>
                  </select>
                </div>
                <div className="d-flex justify-content-end">
                <NavLink
                  to="/Registration/GeneralInfo"
                  className="text-decoration-none"
                >
                  <button className="regNoContinue registration_continue " disabled type="button">
                    Davom etish
                  </button>
                </NavLink>
                </div>
                
              </form>
            </div>
            <p className="registration_contact">
              Savollar bo’lsa bog’lanishingiz mumkin +998 55 500 00 43
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default index
