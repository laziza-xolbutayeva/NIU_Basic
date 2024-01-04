import "./style.css";
import img from "../../../assets/carousel img.svg";

function index() {
  return (
    <>
      <section className="index-swiper">
        <div className="d-flex justify-content-center pt-5">
          <div style={{height:"700px"}}
            id="carouselExampleDark"
            className="carousel carousel-dark slide"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
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
                        <p>Navoiy innovatsiyalar universitetiga xush kelibsiz</p>
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
                        <p>Navoiy innovatsiyalar universitetiga xush kelibsiz</p>
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
                        <p>Navoiy innovatsiyalar universitetiga xush kelibsiz</p>
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
      </section>
    </>
  );
}
export default index;
