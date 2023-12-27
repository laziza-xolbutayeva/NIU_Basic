import "./style.css";
import Navbar from "../../UI/Reistration-Navbar/index";
import { NavLink } from "react-router-dom";


function index() {
    var num=0;
    function myFunction(e){
        num++;
        if(e.target.value.length==1){
            console.log(num);
            
      console.log(document.getElementById(`${num}`).focus());
        }
    }
    console.log()
    //Timer
    var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
var timer=0;
var x = setInterval(function() {
    timer++;
    if(timer<10){
        document.getElementById("demo").innerHTML = `00.0${timer}` 
    }
    else{
        if(timer==60)
        {timer=0
            document.getElementById("demo").innerHTML = `00.00` }
        else{
            document.getElementById("demo").innerHTML = `00.${timer}` 
        }
    }
}, 1000);
    const fieldset = document.querySelector(".fieldset");
const fields = document.querySelectorAll(".field");
const boxes = document.querySelectorAll(".box");

function handleInputField({ target }) {
  const value = target.value.slice(0, 1);
  target.value = value;

  const step = value ? 1 : -1;
  const fieldIndex = [...fields].findIndex((field) => field === target);
  const focusToIndex = fieldIndex + step;

  if (focusToIndex < 0 || focusToIndex >= fields.length) return;

  fields[focusToIndex].focus();
}
fields.forEach((field) => {
  field.addEventListener("input", handleInputField);
});

  return (
    <>
      <Navbar />

      <div className="registrationSMS-wrapper">
        <div className="container">
          <div className="registrationSMS">
            <div className="registrationSMS_box">
              <h3>SMS-kodni kiriting!</h3>
              <p className="registrationSMS_box_info">Sizga +998 (99) 999-99-99 raqamiga SMS kod yuborildi.</p>
                <div className="main">
                  <div className="fieldset">
                    <label className="box">
                      <input className="field" type="text" minLength="1" maxLength="1" onKeyUp={(e)=>{myFunction(e)}}/>
                    </label>
                    <label className="box">
                      <input className="field" type="text" id="1"  minLength="1" maxLength="1" onKeyUp={(e)=>{myFunction(e)}}/>
                    </label>
                    <label className="box">
                      <input className="field" type="text" id="2"  minLength="1" maxLength="1" onKeyUp={(e)=>{myFunction(e)}}/>
                    </label>
                    <label className="box">
                      <input className="field" type="text" id="3"  minLength="1" maxLength="1" onKeyUp={(e)=>{myFunction(e)}}/>
                    </label>
                    <label className="box">
                      <input className="field" type="text" id="4"  minLength="1" maxLength="1" onKeyUp={(e)=>{myFunction(e)}}/>
                    </label>
                    <label className="box">
                      <input className="field" type="text" id="5"  minLength="1" maxLength="1" />
                    </label>
                  </div>
                </div>
                <p id="demo"></p>
                <NavLink to="/Registration/Info" className="d-flex justify-content-center text-decoration-none">
                    <button className="Confirmation_btn">Tasdiqlash</button>
                </NavLink>
            </div>
            <p className="registrationSMS_contact">Savollar bo’lsa bog’lanishingiz mumkin +998 55 500 00 43</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default index;
