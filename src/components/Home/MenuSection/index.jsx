import "./style.css";
import document from "../../../assets/file-sharing 1.svg";
import library from "../../../assets/online-library 1.svg";
import student from "../../../assets/student 2.svg";
import school from "../../../assets/school 1.svg";

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
  return (
    <>
      <section className="index-interactive">
        <div className="container-xxl ">
          <div className="rows d-flex justify-content-between inteactive-slider">
            <div className="" data-aos="fade-up" data-aos-delay="50">
              <a href="#">
                <div className="item bg-1">
                  <div className="inteactive-box-img">
                    <img src={document} alt="img"></img>
                  </div>
                  <p>Ichki hujjat almashinuv tizimi</p>
                </div>
              </a>
            </div>
            <div className="" data-aos="fade-up" data-aos-delay="100">
              <a href="https://e-library.samdu.uz/">
                <div className="item bg-1">
                  <div className="inteactive-box-img">
                    <img src={library} alt="img"></img>
                  </div>
                  <p>Elektron kutubxona</p>
                </div>
              </a>
            </div>
            <div className="" data-aos="fade-up" data-aos-delay="100">
              <a href="https://www.samdu.uz/cy/pages/ERASMUS_ICM_KA171-2">
                <div className="item bg-1">
                  <div className="inteactive-box-img">
                    <img src={student} alt="img"></img>
                  </div>
                  <p>Hemis talaba</p>
                </div>
              </a>
            </div>

            <div className="" data-aos="fade-up" data-aos-delay="250">
              <a href="https://hemis.samdu.uz/dashboard/login">
                <div className="item bg-1">
                  <div className="inteactive-box-img">
                    <img src={school} alt="img"></img>
                  </div>
                  <p>Hemis universitet</p>
                </div>
              </a>
            </div>
            {/* <div className="" data-aos="fade-up" data-aos-delay="300">
                <a href="https://student.samdu.uz/dashboard/login">
                    <div className="item bg-1">
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
