import './style.css'
import { NavLink } from 'react-router-dom'

function index() {
    // const file = document.querySelector('.inputFile');
    
    // const name = document.querySelector('.js-value');
    // console.log(file)
    // // file.addEventListener('change',changeFile());
    // function changeFile(){
    //     name.innerHTML=`${file.value}`;
    //   };
  return (
    <>
      <div className="regPrevEdu-wrapper">
        <div className="container">
          <div className="regPrevEdu">
            <div className="regPrevEdu_box">
              <h3>Oldingi ta’lim muassasasi</h3>
              <p>Ro’yhatdan o’tish uchun ushbu ma’lumotlarni to’ldiring!</p>
              <form action="regPrevEdu" autoComplete="off">
                <div className="regPrevEdu-form mb-4">
                  <label htmlFor="regPrevEdu">Oxirgi ta’lim muassasasi</label>
                  <select name="" id="" placeholder="Tanlang">
                    <option value="" selected disabled hidden>
                      Tanlang
                    </option>
                    <option value="TATU">TATU</option>
                    <option value="TDTU">TDTU</option>
                    <option value="TAO'zMUTU">O'zMU</option>
                  </select>
                </div>
                <div className="regPrevEdu-form mb-4 d-flex">
                  <div>
                    <input type="radio" name="" id="" />
                    <label htmlFor="" className="ms-2">
                      Diplom yoki shahodatnoma bor!
                    </label>
                  </div>
                  <div className="ms-5">
                    <input type="radio" name="" id="" />
                    <label htmlFor="" className="ms-2">
                      Diplom yoki shahodatnoma hali olinmadi!
                    </label>
                  </div>
                </div>
                <div className="regPrevEdu-form mb-4">
                  <label htmlFor="regPrevEdu">
                    Attestat yoki diplomning elektron nusxasi
                  </label>
                  <label for="custom-file-upload" class="filupp">
                      <span className="js-value"> </span>
                    <input
                    className="inputFile"
                      type="file"
                      name="attachment-file"
                      id="custom-file-upload"
                    />
                  </label>
                </div>
                <div className="regPrevEdu-form mb-4 d-flex">
                    <input type="checkbox" name="" id="" onClick={(e) => {
                      document.getElementById('sertificat').classList.remove('d-none')
                      document.getElementById('ielts').classList.remove('d-none')
                    }}/>
                  <label htmlFor="regPrevEdu" className="mt-2 ms-2">Chet tilidan sertifikat bormi?</label>
                </div>
                <div className="d-none regPrevEdu-form mb-4" id="sertificat">
                  <label htmlFor="regPrevEdu">Sertifikat</label>
                  <select name="" id="" placeholder="Tanlang">
                    <option value="" selected disabled hidden>
                      Tanlang
                    </option>
                    <option value="IELTS">IELTS</option>
                    <option value="Milliy">Mlilliy</option>
                  </select>
                </div>
                <div className="d-none regPrevEdu-form mb-4" id="ielts">
                  <label htmlFor="regPrevEdu">
                  IELTS sertifikatining elektron nusxasi (agar mavjud bo’lsa)
                  </label>
                  <label for="custom-file-upload" class="filupp">
                      <span className="js-value">Yuklang</span>
                    <input
                    className="inputFile"
                      type="file"
                      name="attachment-file"
                      id="custom-file-upload"
                    />
                  </label>
                </div>
                <div
                  className="d-none regPrevEdu-form mb-4"
                  id="AdditionalPhone"
                >
                  <label htmlFor="regPrevEdu">Qo'shimcha telefon raqami</label>
                  <input type="text" placeholder="+998" />
                </div>
                <NavLink
                  to="/Registration/Direction"
                  className="d-flex justify-content-end text-decoration-none"
                >
                  <button className="regPrevEdu_continue" type="button">
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
