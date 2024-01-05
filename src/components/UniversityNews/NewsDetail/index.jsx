import "./style.css";
import img from "../../../assets/newsdetail.svg";
import { NavLink } from "react-router-dom";
import { useState,useEffect } from "react";
import { req } from "../../../API/API/index";
import { baseURL } from "../../../API/API/index";
import { useSelector } from "react-redux";

function index() {
  

  //GETDATA
  const counter=useSelector((state)=>state.counter);
console.log(counter);
  return (
    <>
      <section className="index-News">
        <div className="container">
          <div className="col-12">
            <ul className="News-title d-flex">
              <li>
                <NavLink to="/">Asosiy</NavLink>
              </li>
              <li>
                <NavLink to="/">Universitet yangiliklari</NavLink>
              </li>
              <li>
                <NavLink to="/News">
                  Yangiliklar
                </NavLink>
              </li>
              <li>
                <NavLink to="/News/Details" className="News-title-now">
                  Batafsil
                </NavLink>
              </li>
            </ul>
            <h3 className="News-title-h mb-5 mt-3">{((counter!=0)?counter.title:'')}</h3>
          </div>
          <div className="NewsDetail_Card d-flex">
            <img src={((counter!=0)?baseURL+counter.image[0].image:img)} alt="" className="NewsDetail_Card_img"/>
            <div className="NewsDetail_Card_box">
                <p>{((counter!=0)?counter.text:'')}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default index;
