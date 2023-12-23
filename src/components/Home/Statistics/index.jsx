import './style.css'
import img from '../../../assets/announsement.svg'
import time from '../../../assets/time.svg'
import eye from '../../../assets/eyes.svg'

function index() {
  return (
    <>
      <section className="index-statistika">
        <div className="container">
          <div className="title" data-aos="fade-up">
            <div>Statistika</div>
          </div>
          <div className="row justify-content-center gy-4">
            <div className="col-12 col-md-6 col-lg-3 tilt">
              <div className="item" data-aos="fade-up">
                <h6 className="">450</h6>
                <p className="">Professor o'qituvchilar</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 tilt">
              <div className="item" data-aos="fade-up">
                <h6 className="">13000</h6>
                <p>Kunduzgi va 
kechki talabalar</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 tilt">
              <div className="item" data-aos="fade-up">
                <h6 className="">270000</h6>
                <p className="">ARM fondi</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 tilt">
              <div className="item" data-aos="fade-up">
                <h6 className="">13</h6>
                <p>Bakalavr 
yo'nalishlari</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default index
