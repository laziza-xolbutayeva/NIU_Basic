import { useSelector } from "react-redux";
import img from "../../../assets/photoGallery.svg";
import { NavLink } from "react-router-dom";
import { baseURL } from "../../../API/API/index";

function index() {
  //GETDATA
  const data=useSelector((state)=>state.galleryData);
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
                <NavLink to="/Gallery">Fotogalareya</NavLink>
              </li>
              <li>
                <NavLink to="/Gallery/Details" className="News-title-now">
                  Batafsil
                </NavLink>
              </li>
            </ul>
            <h3 className="News-title-h mb-5 mt-3">{(data!=0?data.title:`Universitetda O'zbekiston Respulikasi Konstitutsiyada
              iste'molchilar huquqlarini himoya qilish bo'yicha davra suhbati
              bo'lib o'tdi.`)}
            </h3>
          </div>
          <div className="row d-flex ">
            {data!=0?data.image.map((obj) => {
              console.log(obj);
              return (
                <>
                <div className="col-6 mb-4">
                    <img src={baseURL+obj.image} alt="" style={{width:"600px"}} className="" />
                </div>
                </>)
            }):''}
          </div>
        </div>
      </section>
    </>
  );
}
export default index;
