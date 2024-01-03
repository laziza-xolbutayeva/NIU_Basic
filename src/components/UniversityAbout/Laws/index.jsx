import './style.css'
import { NavLink } from 'react-router-dom'
import img from '../../../assets/aboutuniver.svg'

function index() {
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
                <NavLink to="/">Universitet haqida</NavLink>
              </li>
              <li>
                <NavLink
                  to="/UniversityAbout/Laws"
                  className="News-title-now"
                >
                  Navoiy innovatsiyalar universiteti nizomi
                </NavLink>
              </li>
            </ul>
            <h3 className="News-title-h">
              Navoiy innovatsiyalar universiteti nizomi
            </h3>
          </div>
          <div className="univerLaws">
            <div className="univerLaws_box d-flex justify-content-between">
              <div className="d-flex">
                <i className="me-1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.8001 2.21048C15.3901 1.80048 14.6801 2.08048 14.6801 2.65048V6.14048C14.6801 7.60048 15.9201 8.81048 17.4301 8.81048C18.3801 8.82048 19.7001 8.82048 20.8301 8.82048C21.4001 8.82048 21.7001 8.15048 21.3001 7.75048C19.8601 6.30048 17.2801 3.69048 15.8001 2.21048Z"
                      fill="#454545"
                    />
                    <path
                      d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19ZM11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75ZM13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z"
                      fill="#454545"
                    />
                  </svg>
                </i>
                <p>Navoiy innovatsiyalar universitetining ustavi</p>
              </div>
              <a href="#" download className="univerLaws_btn">
                Yuklab olish
              </a>
            </div>
            <div className="univerLaws_box d-flex justify-content-between">
              <div className="d-flex">
                <i className="me-1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.8001 2.21048C15.3901 1.80048 14.6801 2.08048 14.6801 2.65048V6.14048C14.6801 7.60048 15.9201 8.81048 17.4301 8.81048C18.3801 8.82048 19.7001 8.82048 20.8301 8.82048C21.4001 8.82048 21.7001 8.15048 21.3001 7.75048C19.8601 6.30048 17.2801 3.69048 15.8001 2.21048Z"
                      fill="#454545"
                    />
                    <path
                      d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19ZM11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75ZM13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z"
                      fill="#454545"
                    />
                  </svg>
                </i>
                <p>Navoiy innovatsiyalar universitetining pasporti</p>
              </div>
              <a href="#" download className="univerLaws_btn">
                Yuklab olish
              </a>
            </div>
            <div className="univerLaws_box d-flex justify-content-between">
              <div className="d-flex">
                <i className="me-1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.8001 2.21048C15.3901 1.80048 14.6801 2.08048 14.6801 2.65048V6.14048C14.6801 7.60048 15.9201 8.81048 17.4301 8.81048C18.3801 8.82048 19.7001 8.82048 20.8301 8.82048C21.4001 8.82048 21.7001 8.15048 21.3001 7.75048C19.8601 6.30048 17.2801 3.69048 15.8001 2.21048Z"
                      fill="#454545"
                    />
                    <path
                      d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19ZM11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75ZM13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z"
                      fill="#454545"
                    />
                  </svg>
                </i>
                <p>Davlat akkreditasiyasi haqida sertifikati (1)</p>
              </div>
              <a href="#" download className="univerLaws_btn">
                Yuklab olish
              </a>
            </div>
            <div className="univerLaws_box d-flex justify-content-between">
              <div className="d-flex">
                <i className="me-1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.8001 2.21048C15.3901 1.80048 14.6801 2.08048 14.6801 2.65048V6.14048C14.6801 7.60048 15.9201 8.81048 17.4301 8.81048C18.3801 8.82048 19.7001 8.82048 20.8301 8.82048C21.4001 8.82048 21.7001 8.15048 21.3001 7.75048C19.8601 6.30048 17.2801 3.69048 15.8001 2.21048Z"
                      fill="#454545"
                    />
                    <path
                      d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19ZM11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75ZM13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z"
                      fill="#454545"
                    />
                  </svg>
                </i>
                <p>Davlat akkreditasiyasi haqida sertifikati (2)</p>
              </div>
              <a href="#" download className="univerLaws_btn">
                Yuklab olish
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default index
