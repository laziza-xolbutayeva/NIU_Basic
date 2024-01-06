import { useSelector } from "react-redux";
import img from "../../../assets/photoGallery.svg";
import { NavLink } from "react-router-dom";

function index() {
  //GETDATA
  const data=useSelector((state)=>state.videoData);
  console.log(data);
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
                <NavLink to="/VideoGallery">Video galareya</NavLink>
              </li>
              <li>
                <NavLink to="/Gallery/Details" className="News-title-now">
                  Batafsil
                </NavLink>
              </li>
            </ul>
            <h3 className="News-title-h mb-5 mt-3">
              {data!=0?data.title:""}
            </h3>
          </div>
          <div>
          <iframe width="1280" height="720" style={{borderRadius:"15px"}} src={`https://www.youtube.com/embed/${'jm-7mOwVOVM'}`} title="QABUL BOSHLANDI | 2023-2024 | NAVOIY INNOVATSIYALAR UNIVERSITETI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          </div>
          </section>
          </>
  )
}
export default index;