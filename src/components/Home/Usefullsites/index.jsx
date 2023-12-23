import * as React from "react";
import "./style.css";
import img from "../../../assets/usefull.svg";
function index() {
  return (
    <>
    <section className="index-usefullinks">
    <div className="container">
        <div className="title" data-aos="fade-up">
            <div>Foydali saytlar</div>
        </div>
        <div className="row justify-content-between gy-4">
            
                <div className="col-12 col-md-6 col-lg-3 tilt">
                    <div className="item useful-card" data-aos="fade-up">
                        <div className="useful-card-image-blog">
                            <a href="https://constitution.uz/oz">
                                <img src={img} alt="logo" className="useful-card-image"></img>
                            </a>
                        </div>
                        <a href="#">
                            <div className="post-useful">
                                <p>O'zbekiston Respublikasi Konstitutsiyasi</p>
                            </div>
                        </a>
                    </div>
                </div>
            
                <div className="col-12 col-md-6 col-lg-3 tilt">
                    <div className="item useful-card" data-aos="fade-up">
                        <div className="useful-card-image-blog">
                            <a href="https://edu.uz/uz">
                                <img src={img} alt="logo" className="useful-card-image"></img>
                            </a>
                        </div>
                        <a href="#">
                            <div className="post-useful">
                                <p>Oliy ta’lim, fan va innovatsiyalar vazirligi</p>
                            </div>
                        </a>
                    </div>
                </div>
            
                <div className="col-12 col-md-6 col-lg-3 tilt">
                    <div className="item useful-card" data-aos="fade-up">
                        <div className="useful-card-image-blog">
                            <a href="https://www.gov.uz/uz">
                                <img src={img} alt="logo" className="useful-card-image"></img>
                            </a>
                        </div>
                        <a href="#">
                            <div className="post-useful">
                                <p>O'zbekiston Respublikasi hukumat portali</p>
                            </div>
                        </a>
                    </div>
                </div>
            
                <div className="col-12 col-md-6 col-lg-3 tilt">
                    <div className="item useful-card" data-aos="fade-up">
                        <div className="useful-card-image-blog">
                            <a href="https://uza.uz/oz">
                                <img src={img} alt="logo" className="useful-card-image"></img>
                            </a>
                        </div>
                        <a href="#">
                            <div className="post-useful">
                                <p>O'zbekiston Milliy axborot agentligi</p>
                            </div>
                        </a>
                    </div>
                </div>
                    </div>
    </div>
</section>  
    </>
  )
}
export default index;