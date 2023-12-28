import "./style.css";
import Navbar from "../../UI/Registration-Navbar/index";
import { NavLink } from "react-router-dom";
import document from "../../assets/document-download.svg";

function index() {
  return (
    <>
      <Navbar />
      <div className="Download-wrapper">
        <div className="container">
          <div className="Download">
            <div className="Download_box">
              <h3>Shartnomani yuklab olish</h3>
              <p>Shartnomani yuklab olishingiz mumkin!</p>

              <div className="mb-4">
                <label htmlFor="Download">Yuklab olish</label>
                <div className="download mt-2 d-flex justify-content-between">
                  <a
                    href="path/to/file.ext"
                    download
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Shartnoma.png
                  </a>
                  <img src={document} alt="" />
                </div>
              </div>
            </div>
            <p className="registration_contact">Savollar bo’lsa bog’lanishingiz mumkin +998 55 500 00 43</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default index;
