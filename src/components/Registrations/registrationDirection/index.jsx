import './style.css'
import { NavLink } from 'react-router-dom'

function index() {
  return (
    <>
      <div className="regDirection-wrapper">
        <div className="container">
          <div className="regDirection">
            <div className="regDirection_box">
              <h3>Yo’nalish va ta’lim shakli</h3>
              <p>Ro’yhatdan o’tish uchun ushbu ma’lumotlarni to’ldiring!</p>
              <form action="regDirection" autoComplete="off">
                <div className="regDirection-form mb-4">
                  <label htmlFor="regDirection">Ta’lim tili</label>
                  <select name="" id="" placeholder="Tanlang">
                    <option value="" selected disabled hidden>
                      Tanlash
                    </option>
                    <option>o'zbek</option>
                  </select>
                </div>
                <div className="regDirection-form mb-4">
                  <label htmlFor="regDirection">Ta’lim shakli</label>
                  <select name="" id="" placeholder="Tanlang">
                    <option value="" selected disabled hidden>
                      Tanlash
                    </option>
                    <option>Kunduzgi</option>
                    <option>Kechki</option>
                  </select>
                </div>
                <div className="regDirection-form mb-4">
                  <label htmlFor="regDirection">Ta’lim yo'nalishi</label>
                  <select name="" id="" placeholder="Tanlang">
                    <option value="" selected disabled hidden>
                      Tanlash
                    </option>
                    <option>Biologiya</option>
                  </select>
                </div>
                <NavLink
                  to="/Registration/ExamDate"
                  className="d-flex justify-content-end text-decoration-none"
                >
                  <button className="regDirection_continue" type="button">
                    Davom etish
                  </button>
                </NavLink>
                </form>
            </div>
            <p className="registration_contact">Savollar bo’lsa bog’lanishingiz mumkin +998 55 500 00 43</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default index
