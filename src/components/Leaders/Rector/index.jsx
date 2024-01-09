import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import img from "../../../assets/leaders_img.svg";
import "./style.css";
import { req } from "../../../API/API/index";
import { baseURL } from "../../../API/API/index";
import { useSelector } from "react-redux";

function index() {
  const [data, setData] = useState([]);
  const [bio, setBio] = useState([]);
  const [task, setTask] = useState([]);

//GETDATA
const getdata=useSelector((state)=>state.menuData);
console.log(getdata);

  const fetchData = async () => {
    try {
      const result = await req.getRector(getdata.slug);
      setData(result);
      setBio(result.biography);
      setTask(result.task);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, [getdata]);

  
  return (
    <>
      <section className="index-News">
        <div className="container">
          <div className="col-12 mb-5">
            <ul className="News-title d-flex">
              <li>
                <NavLink to="/">Asosiy</NavLink>
              </li>
              <li>
                <NavLink to="/">Tuzilma</NavLink>
              </li>
              <li>
                <NavLink to="/">Rahbariyat</NavLink>
              </li>
              <li>
                <a to="#" className="News-title-now">
                {data.name}
                </a>
              </li>
            </ul>
            <h3 className="News-title-h">{data.name}</h3>
          </div>
          <div className="leaders-wrapper">
            <div className="leaders_name d-flex">
              <img src={baseURL+data.image} alt="" />
              <div className="leaders_name_box">
                <h3 className="leaders_name_box_title">{data.fio}</h3>
                <p className="leaders_name_box_text">{data.name}</p>
                <div className="d-flex justify-content-between">
                  <div>
                    <div className="leaders_name_box_contact">
                      <p className="leaders_name_box_contact_title">Qabul:</p>
                      <p className="leaders_name_box_contact_text">
                        {data.reception_time}
                      </p>
                    </div>
                    <div className="leaders_name_box_contact">
                      <p className="leaders_name_box_contact_title">E-mail:</p>
                      <p className="leaders_name_box_contact_text">
                        {data.email}
                      </p>
                    </div>
                  </div>
                  <div className="leaders_name_box_contact">
                    <p className="leaders_name_box_contact_title">Telefon:</p>
                    <p className="leaders_name_box_contact_text">
                      +998 {data.number}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="leaders_biography">
              <h2 className="text-center leaders_biography_title">
                Biografiya
              </h2>
              <ul className="leaders_biography_ul">
                {bio.map((obj) => {
                  return (
                    <>
                      <li>{obj.text}</li>
                    </>
                  );
                })}
              </ul>
            </div>
            <div className="leaders_biography">
              <h2 className="text-center leaders_biography_title">Vazifalar</h2>
              <ul className="leaders_biography_ul">
                {task.map((obj) => {
                  return (
                    <>
                      <li>{obj.text}</li>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default index;
