import "./style.css";
import img from "../../../assets/carousel_img.svg";
import {menuReq, baseURL} from "../../../API/MenuAPI/index";
import { useEffect, useState } from "react";


function index() {

  const [banner, setBanner] = useState([0]);
  const fetchData = async () => {
    try {
      const result = await menuReq.getBanner();
      setBanner(result.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>
      <section className="index-swiper">
        <div className="swiper-container">
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              {banner.length>=1?banner.map((img,i)=>{
              console.log(img);
              if(i==0){
                return(<>
                <li
                data-target="#myCarousel"
                data-slide-to={`${i}`}
                className="active"
              ></li></>)}
              else{
              <li data-target="#myCarousel" data-slide-to={`${i}`}></li>
              }}):''}
            </ol>
            

            <div className="carousel-inner">
            {banner.length>=1?banner.map((img,i)=>{
              console.log(img);
              if(i==0){
                return(<>
                <div className="item active">
                  <img src={baseURL+img.image} alt="Los Angeles" style={{ width: "100%" }} />
                  <div className="carousel-inner_text_wrapper">
                    <div className="carousel-inner_text">
                      <div className="carousel-inner_text_box">
                        <p>{img.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
                </>)}
                else{
              return(<>
              <div className="item">
                <img src={`${baseURL}img`} alt="Los Angeles" style={{ width: "100%" }} />
                <div className="carousel-inner_text_wrapper">
                  <div className="carousel-inner_text">
                    <div className="carousel-inner_text_box">
                      <p>{img.text}</p>
                    </div>
                  </div>
                </div>
              </div>
              </>)}
            }):''}
              {/* <div className="item active">
                <img src={img} alt="Los Angeles" style={{ width: "100%" }} />
                <div className="carousel-inner_text_wrapper">
                  <div className="carousel-inner_text">
                    <div className="carousel-inner_text_box">
                      <p>Navoiy innovatsiyalar universitetiga xush kelibsiz</p>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* <div className="item">
                <img src={img} alt="Chicago" style={{ width: "100%" }} />
                <div className="carousel-inner_text_wrapper">
                  <div className="carousel-inner_text">
                    <div className="carousel-inner_text_box">
                      <p>Navoiy innovatsiyalar universitetiga xush kelibsiz</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="item">
                <img src={img} alt="New york" style={{ width: "100%" }} />
                <div className="carousel-inner_text_wrapper">
                  <div className="carousel-inner_text">
                    <div className="carousel-inner_text_box">
                      <p>Navoiy innovatsiyalar universitetiga xush kelibsiz</p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>

            <a
              className="left carousel-control"
              href="#myCarousel"
              data-slide="prev"
            >
              <span className="glyphicon glyphicon-chevron-left"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="right carousel-control"
              href="#myCarousel"
              data-slide="next"
            >
              <span className="glyphicon glyphicon-chevron-right"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
      {/* <section className="index-swiper">
        <div className="d-flex justify-content-center pt-5">
          <div
            style={{ height: "700px",width:"1320px" }}
            id="carouselExampleDark"
            className="carousel carousel-dark slide"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img src={img} className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block w-100 p-0 m-0">
                  <div className="slider">
                    <div className="slide-track">
                      <div className="slide">
                        <p>
                          Navoiy innovatsiyalar universitetiga xush kelibsiz
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src={img} className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                  <div className="slider">
                    <div className="slide-track">
                      <div className="slide">
                        <p>
                          Navoiy innovatsiyalar universitetiga xush kelibsiz
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img src={img} className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                  <div className="slider">
                    <div className="slide-track">
                      <div className="slide">
                        <p>
                          Navoiy innovatsiyalar universitetiga xush kelibsiz
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section> */}
    </>
  );
}
export default index;
