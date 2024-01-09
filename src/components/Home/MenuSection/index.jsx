import "./style.css";
import document from "../../../assets/file-sharing 1.svg";
import library from "../../../assets/online-library 1.svg";
import student from "../../../assets/student 2.svg";
import school from "../../../assets/school 1.svg";
import "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"
import "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"
import { useRef } from "react";


// console.log(document.getElementsByClassName("inteactive-slider"));
function index() {
  // document.querySelector(".inteactive-slider").slick({
  //     // dots: true,
  //     infinite: true,
  //     speed: 300,
  //     autoplay: true,
  //     slidesToScroll: 4,
  //     slidesToShow: 4,
  //     arrows: false,
  //     dots: true,
  //     // centerMode: true,
  //     // variableWidth: true
  //     responsive: [
  //       {
  //         breakpoint: 1024,
  //         settings: {
  //           slidesToShow: 3,
  //           slidesToScroll: 3,
  //           infinite: true,
  //           dots: true,
  //         },
  //       },
  //       {
  //         breakpoint: 768,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 2,
  //         },
  //       },
  //       {
  //         breakpoint: 576,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //         },
  //       },
  //     ],
  //   });

/* full page carousel */
// $(document).ready(function () {
//   $('.carousel').carousel({
//     pause: "false"
//   });
//   $('.carousel').css({ 'margin': 0, 'width': $(window).outerWidth(), 'height': $(window).outerHeight() });
//   //$('.carousel-inner').css({'z-index': 0});
//   $('.carousel .item').css({ 'position': 'fixed', 'width': '100%', 'height': '100%' });
//   $('.carousel-inner div.itemimg').each(function () {
//     varimgSrc = $(this).attr('src');
//     $(this).parent().css({ 'background': 'url(' + imgSrc + ') center center no-repeat', '-webkit-background-size': '100% ', '-moz-background-size': '100%', '-o-background-size': '100%', 'background-size': '100%', '-webkit-background-size': 'cover', '-moz-background-size': 'cover', '-o-background-size': 'cover', 'background-size': 'cover' });
//     $(this).remove();
//   });
//   $(window).on('resize', function () {
//     $('.carousel').css({ 'width': $(window).outerWidth(), 'height': $(window).outerHeight() });
//   });
//   });

const indicators=useRef(0);
const item=useRef(0);
function Carousel(e) {
  console.log(indicators.current.children);
  
  console.log(e.target.id);
  console.log(e.target.className);
  if(e.target.className!='active'){
    console.log(e);
    e.target.classList.add("active");
    // document.getElem(`li#${e.target.id}`).classList.remove("active");
    // document.querySelector(`li#${e.target.id}`).classList.remove("active");
    // document.querySelector(".item.active").classList.remove("active");
    // document.querySelector(`.item#${e.target.id}`).classList.add("active");
  }
  
}
  return (
    <>
      <section className="index-interactive">
        <div className="container">
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators" ref={indicators}>
              <li
                
                data-slide-to="0"
                id="carousel1"
                className="active"
                onClick={(e)=>{Carousel(e)}}
              ></li>
              <li id="carousel2" data-slide-to="1" onClick={(e)=>{Carousel(e)}}></li>
            </ol>
            <div className="carousel-inner" ref={item}>
              <div className="item active" id="carousel1">
                <div className="rows d-flex justify-content-between inteactive-slider">
                <div className="" data-aos="fade-up" data-aos-delay="50">
                  <a href="#">
                    <div className="items bg-1">
                      <div className="inteactive-box-img">
                        <img src={document} alt="img"></img>
                      </div>
                      <p>Ichki hujjat almashinuv tizimi</p>
                    </div>
                  </a>
                </div>
                <div className="" data-aos="fade-up" data-aos-delay="100">
                  <a href="#">
                    <div className="items bg-1">
                      <div className="inteactive-box-img">
                        <img src={library} alt="img"></img>
                      </div>
                      <p>Elektron kutubxona</p>
                    </div>
                  </a>
                </div>
                <div className="" data-aos="fade-up" data-aos-delay="100">
                  <a href="#">
                    <div className="items bg-1">
                      <div className="inteactive-box-img">
                        <img src={student} alt="img"></img>
                      </div>
                      <p>Hemis talaba</p>
                    </div>
                  </a>
                </div>
                <div className="" data-aos="fade-up" data-aos-delay="250">
                  <a href="#">
                    <div className="items bg-1">
                      <div className="inteactive-box-img">
                        <img src={school} alt="img"></img>
                      </div>
                      <p>Hemis universitet</p>
                    </div>
                  </a>
                </div>
                </div>
                
              </div>
              <div className="item" id="carousel2">
                <div className="rows d-flex justify-content-between inteactive-slider">
                <div className="" data-aos="fade-up" data-aos-delay="100">
                  <a href="#">
                    <div className="items bg-1">
                      <div className="inteactive-box-img">
                        <img src={library} alt="img"></img>
                      </div>
                      <p>Elektron kutubxona</p>
                    </div>
                  </a>
                </div>
                
              <div className="" data-aos="fade-up" data-aos-delay="100">
                  <a href="#">
                    <div className="items bg-1">
                      <div className="inteactive-box-img">
                        <img src={student} alt="img"></img>
                      </div>
                      <p>Hemis talaba</p>
                    </div>
                  </a>
                </div>
                <div className="" data-aos="fade-up" data-aos-delay="250">
                  <a href="#">
                    <div className="items bg-1">
                      <div className="inteactive-box-img">
                        <img src={school} alt="img"></img>
                      </div>
                      <p>Hemis universitet</p>
                    </div>
                  </a>
                </div>
                </div>
                
              </div>
              
            </div>
            
            
                {/* <div className="" data-aos="fade-up" data-aos-delay="50">
              <a href="#">
                <div className="items bg-1">
                  <div className="inteactive-box-img">
                    <img src={document} alt="img"></img>
                  </div>
                  <p>Ichki hujjat almashinuv tizimi</p>
                </div>
              </a>
            </div>
            <div className="" data-aos="fade-up" data-aos-delay="100">
              <a href="https://e-library.samdu.uz/">
                <div className="items bg-1">
                  <div className="inteactive-box-img">
                    <img src={library} alt="img"></img>
                  </div>
                  <p>Elektron kutubxona</p>
                </div>
              </a>
            </div>
            <div className="" data-aos="fade-up" data-aos-delay="100">
              <a href="https://www.samdu.uz/cy/pages/ERASMUS_ICM_KA171-2">
                <div className="items bg-1">
                  <div className="inteactive-box-img">
                    <img src={student} alt="img"></img>
                  </div>
                  <p>Hemis talaba</p>
                </div>
              </a>
            </div>

            <div className="" data-aos="fade-up" data-aos-delay="250">
              <a href="https://hemis.samdu.uz/dashboard/login">
                <div className="items bg-1">
                  <div className="inteactive-box-img">
                    <img src={school} alt="img"></img>
                  </div>
                  <p>Hemis universitet</p>
                </div>
              </a>
            </div> */}
                {/* <div className="" data-aos="fade-up" data-aos-delay="300">
                <a href="https://student.samdu.uz/dashboard/login">
                    <div className="items bg-1">
                        <img src={student} alt="img"></img>
                        <p>Hemis talaba</p>
                    </div>
                </a>
            </div>
            <div className="" data-aos="fade-up">
                <a href="https://hemis.uz/">
                    <div className="item">
                        <img src={school} alt="img"></img>
                        <p>Hemis uz</p>
                    </div>
                </a>
            </div>
            <div className="" data-aos="fade-up">
                <a href="https://unilibrary.uz/">
                    <div className="item">
                        <img src={library} alt="img"></img>
                        <p>Unilibrary</p>
                    </div>
                </a>
            </div>
            <div className="" data-aos="fade-up">
                <a href="https://interactive.samdu.uz/">
                    <div className="item">
                        <img src={document} alt="img"></img>
                        <p>Interaktiv xizmatlar</p>
                    </div>
                </a>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
export default index;
