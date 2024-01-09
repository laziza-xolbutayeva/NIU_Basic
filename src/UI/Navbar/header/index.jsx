import "./style.css";
import logo from "../../../assets/Link → niu_logotype_white_2.png.svg"
import flag from "../../../assets/uzb-flag.svg";
import russian from "../../../assets/russia-flag-circular-17765.svg";
import english from "../../../assets/united_kingdom.svg";
import { NavLink} from "react-router-dom";
import { useTranslation } from "react-i18next";
import {menuReq, baseURL} from "../../../API/MenuAPI/index";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";


function index() {
  const [t, i18n]=useTranslation("global");
  const [data, setData] = useState([0]);
  
  const fetchData = async () => {
    try {
      const result = await menuReq.getStructureLeadership();
      setData(result.data);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  
  // SEND DATA
const dispatch=useDispatch();
const menuDataSend=(data)=>{
  dispatch({type:'menuDataSend',newData:data})
}
    
  
  return (
    <>
      <div className="header-sticky">
        <nav>
          <div className="container  w-100">
            <div className="row align-items-center position-relative">
              <div className="col-12 col-xl-3 d-flex align-items-center justify-content-between">
                <NavLink to="/">
                  <div className="logo">
                    <img
                      src={logo}
                      alt="logo" className="me-2"
                    ></img>
                    <p>
                    Navoiy innovatsiyalar universiteti
                    </p>
                  </div>
                </NavLink>
                <a href="#" className="menu-btn" id="menu-btn">
                  <i className="bi bi-list"></i>
                </a>
              </div>
              <ul
                className="col-12 col-xl-7 d-lg-flex d-block justify-content-between align-items-center  nav-list pe-4"
                id="nav-list"
              >
                <li className="list-inline-item nav-submenu menu-type-1">
                  <a data-turbo="true">{t("basic.menu.university.university")}</a>
                  <ul>
                    <li className="nav-submenu menu-type-2">
                      <a href="#" data-turbo="true">
                      {t("basic.menu.university.university news.university news")}
                      </a>
                      <ul>
                        <li className="menu-type-2">
                          <NavLink to="/News" data-turbo="true">
                          {t("basic.menu.university.university news.news")}
                          </NavLink>
                        </li>
                        <li className="menu-type-2">
                          <NavLink to="/Announcements" data-turbo="true">
                          {t("basic.menu.university.university news.announcements")}
                          </NavLink>
                        </li>
                        <li className="menu-type-2">
                          <NavLink to="/Grand" data-turbo="true">
                          {t("basic.menu.university.university news.grands")}
                          </NavLink>
                        </li>
                        <li className="menu-type-2">
                          <NavLink to="/Gallery" data-turbo="true">
                          {t("basic.menu.university.university news.photo")}
                          </NavLink>
                        </li>
                        <li className="menu-type-2">
                          <NavLink to="/VideoGallery" data-turbo="true">
                          {t("basic.menu.university.university news.video")}
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-submenu menu-type-2">
                      <a href="#" data-turbo="true">
                        Universitet haqida
                      </a>
                      <ul>
                        <li className="menu-type-2">
                          <NavLink to="/UniversityAbout/University" data-turbo="true">
                            Universitet
                          </NavLink>
                        </li>
                        <li className="menu-type-2">
                          <NavLink
                          to="/UniversityAbout/History" 
                          >
                            Universitet tarixi
                          </NavLink>
                        </li>
                        <li className="menu-type-2">
                          <NavLink to="/UniversityAbout/Laws" data-turbo="true">
                            Universitet nizomi
                          </NavLink>
                        </li>
                        <li className="menu-type-2">
                          <NavLink
                            to="/UniversityAbout/Structure"
                            data-turbo="true"
                          >
                            Universitet tuzilmasi
                          </NavLink>
                        </li>
                        <li className="menu-type-2">
                          <NavLink
                            to="/UniversityAbout/Requisites"
                            data-turbo="true"
                          >
                            Rekvizitlar
                          </NavLink>
                        </li>
                        <li className="menu-type-2">
                          <NavLink
                            to="/UniversityAbout/Contact"
                            data-turbo="true"
                          >
                            Bog'lanish
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-submenu menu-type-2">
                      <a href="#" data-turbo="true">
                        Hujjatlar
                      </a>
                      <ul>
                        <li className="menu-type-2">
                          <NavLink to="/Documents/WorkPlan" data-turbo="true">
                            Ish reja
                          </NavLink>
                        </li>
                        <li className="menu-type-2">
                          <NavLink to="/Documents/Laws" data-turbo="true">
                            Qonunlar
                          </NavLink>
                        </li>
                        <li className="menu-type-2">
                          <NavLink
                            to="/Documents/Regulations"
                            data-turbo="true"
                          >
                            Nizomlar va qoidalar
                          </NavLink>
                        </li>
                        <li className="menu-type-2">
                          <NavLink
                            to="/Documents/Reports"
                            data-turbo="true"
                          >
                            Hisobotlar
                          </NavLink>
                        </li>
                        <li className="menu-type-2">
                          <NavLink
                            to="/Documents/Qualification"
                            data-turbo="true"
                          >
                            Malaka talablari
                          </NavLink>
                        </li>
                        <li className="menu-type-2">
                          <NavLink
                            to="/Documents/Contracts"
                            data-turbo="true"
                          >
                            Shartnomalar
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="list-inline-item nav-submenu menu-type-1">
                  <a data-turbo="true">Tuzilma</a>
                  <ul>
                    <li className="nav-submenu menu-type-2">
                      <a href="#" data-turbo="true" onClick={()=>{getStrucLeader()}}>
                        Rahbariyat
                      </a>
                      <ul>
                        {(data.length>=1)?data.map((obj)=>{
                          console.log(obj);
                          return (<>
                          <li className="menu-type-2">
                            <NavLink to={`/Leaders`} data-turbo="true" onClick={()=>menuDataSend(obj)}>
                            {obj.name}
                          </NavLink>
                        </li></>);
                        }):''}
                      </ul>
                    </li>
                    
                    
                    <li className="nav-submenu menu-type-2">
                      <a href="#" data-turbo="true">
                        Kafedralar
                      </a>
                      <ul>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/matematika-kafedralari"
                            data-turbo="true"
                          >
                            Matematika fakulteti kafedralari
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/Geografiya-va-ekologiya-kafedralari"
                            data-turbo="true"
                          >
                            Geografiya va ekologiya fakulteti kafedralari
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/Tarix-kafedralari"
                            data-turbo="true"
                          >
                            Tarix fakulteti kafedralari
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/Psixologiya-kafedralari"
                            data-turbo="true"
                          >
                            Psixologiya va ijtimoiy munosabatlar fakulteti
                            kafedralari
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/Raqamli-texnologiyalar-kafedralari"
                            data-turbo="true"
                          >
                            Intellektual tizimlar va kompyuter texnologiyalari
                            fakulteti
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/Yuridik-kafedralari"
                            data-turbo="true"
                          >
                            Yuridik fakulteti kafedralari
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/Filologiya-kafedralari"
                            data-turbo="true"
                          >
                            Filologiya fakulteti kafedralari
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/Pedagogika-talimi-kafedralari"
                            data-turbo="true"
                          >
                            Pedagogika ta’limi fakulteti kafedralari
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-submenu menu-type-2">
                      <a href="#" data-turbo="true">
                        Boshqarma va bo'limlar
                      </a>
                      <ul>
                        <li className="menu-type-2">
                          <a href="/uz/pages/axborot_xizmati" data-turbo="true">
                            Axborot xizmati
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/oquv_uslubiy_boshqarma"
                            data-turbo="true"
                          >
                            Birinchi o'quv-uslubiy boshqarma
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/2_oquv_uslubiy_boshqarma"
                            data-turbo="true"
                          >
                            
                            Ikkinchi o'quv-uslubiy boshqarma
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/chief_accountant"
                            data-turbo="true"
                          >
                            Buxgalteriya
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/DEPARTMENT_OF_INTERNATIONAL_COOPERATION"
                            data-turbo="true"
                          >
                            Xalqaro hamkorlik boshqarmasi
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/xalqaro_hamkorlik_bolimi"
                            data-turbo="true"
                          >
                            Xalqaro aloqalar va strategik rivojlanish bo'limi
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/talim_sifatini_nazorat_qilish_bolimi"
                            data-turbo="true"
                          >
                            Ta’lim sifatini nazorat qilish bo’limi
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/DEPARTMENT_OF_ATTRACTING_INTERNATIONAL_SPECIALISTS_AND_STUDENTS"
                            data-turbo="true"
                          >
                            Xalqaro mutaxassislar va talabalarni jalb etish
                            bo'limi
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a href="/uz/pages/kadrlar_bolimi" data-turbo="true">
                            Kadrlar bo'limi
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/yoshlar_bilan_ishlash_manaviyat_va_marifat_bolimi"
                            data-turbo="true"
                          >
                            
                            Yoshlar bilan ishlash, ma’naviyat va ma’rifat
                            boshqarmasi
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/scientific-researches-department"
                            data-turbo="true"
                          >
                            Ilmiy tadqiqotlar boshqarmasi
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a href="/uz/pages/trade_union" data-turbo="true">
                            
                            SamDU boshlang'ich Kasaba uyushmasi qo'mitasi
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/yuridik_xizmat_bolimi"
                            data-turbo="true"
                          >
                            Yuridik xizmat bo'limi
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/nashr_matbaa_markazi_va_tahrir_nashriyot_bolimi"
                            data-turbo="true"
                          >
                            Nashr-matbaa markazi va tahrir nashriyot bo’limi
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/reja_moliya_bolimi"
                            data-turbo="true"
                          >
                            Reja-moliya bo’limi
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a href="/uz/pages/anti-korrupsiya" data-turbo="true">
                            Korrupsiyaga qarshi kurashish bo'limi
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a href="/uz/pages/women" data-turbo="true">
                            
                            Xotin-qizlar va gender tenglik masalalari bo‘yicha
                            maslaxatchi
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/marketing_and_student_practice"
                            data-turbo="true"
                          >
                            
                            Marketing va talabalar bilan ishlash bo'limi
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/devonxona_va_arxiv_bolimi"
                            data-turbo="true"
                          >
                            Devonxona va arxiv bo‘limi
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/Department_of_Innovation_Development_of_Samarkand_State_University"
                            data-turbo="true"
                          >
                            Samarqand davlat universiteti Innovatsion
                            rivojlantirish boshqarmasi
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/Department_of_scientific_project_management_and_commercialization_of_innovative_developments"
                            data-turbo="true"
                          >
                            Ilmiy loyihalarni boshqarish va innovatsion
                            ishlanmalarni tijoratlashtirish bo‘limi
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-submenu menu-type-2">
                      <a href="#" data-turbo="true">
                        Markazlar
                      </a>
                      <ul>
                        <li className="menu-type-2">
                          <a
                            href="https://irinafilipova7.wixsite.com/center/o-zbek"
                            data-turbo="true"
                          >
                            Sun'iy intellektni tartibga solishni rivojlantirish
                            bo'yicha Markaziy Osiyo tadqiqot markazi
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a href="https://uzindia.samdu.uz/" data-turbo="true">
                            O'zbekiston-Hindiston sun'iy intellekt va mashinali
                            o'qitish qo'shma markazi
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/pedagog_kadrlarni_qt"
                            data-turbo="true"
                          >
                            Pedagog kadrlarni qayta tayyorlash va ularning
                            malakasini oshirish mintaqaviy markazi
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/axborot_texnologiyalari_markazi"
                            data-turbo="true"
                          >
                            Raqamli ta'lim texnologiyalari markazi
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/axborot_resurs_markazi"
                            data-turbo="true"
                          >
                            Axborot-resurs markazi
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/xalqaro_talim_dasturlari_markazi"
                            data-turbo="true"
                          >
                            
                            Xalqaro ta’lim dasturlari markazi
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/tayyorlov_markazi"
                            data-turbo="true"
                          >
                            Tayyorlov markazi
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/magistratura_markazi"
                            data-turbo="true"
                          >
                            Magistratura markazi​
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-submenu menu-type-2">
                      <a href="#" data-turbo="true">
                        Kengashlar
                      </a>
                      <ul>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/jamoatchilik_boshqaruvi_va_nazorati_kengashi"
                            data-turbo="true"
                          >
                            Jamoatchilik boshqaruvi va nazorati kengashi
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="list-inline-item nav-submenu menu-type-1">
                  <a data-turbo="true">Faoliyat</a>
                  <ul>
                    <li className="nav-submenu menu-type-2">
                      <a href="#" data-turbo="true">
                        Ilmiy faoliyat
                      </a>
                      <ul>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/ixtisoslashtirilgan-kengashlar"
                            data-turbo="true"
                          >
                            Uslubiy kengash
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a href="/uz/pages/ABSTRACTS" data-turbo="true">
                            Avtoreferatlar
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/talaba_iqditorli_talabalar"
                            data-turbo="true"
                          >
                            Iqtidorli talabalar
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a href="/uz/pages/Doktorantura" data-turbo="true">
                            
                            Doktorantura
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/Scientific_laboratories"
                            data-turbo="true"
                          >
                            Ilmiy laboratoriyalar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-submenu menu-type-2">
                      <a href="#" data-turbo="true">
                        Ma'naviy-ma'rifiy faoliyat
                      </a>
                      <ul>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/talabalar_hayoti"
                            data-turbo="true"
                          >
                            Talabalar hayoti
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a href="https://samdu.uz/tutors" data-turbo="true">
                            Tyutorlik faoliyati
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/University_Psychologist"
                            data-turbo="true"
                          >
                            Universitet psixologi
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-submenu menu-type-2">
                      <a href="#" data-turbo="true">
                        Moliyaviy faoliyat
                      </a>
                      <ul>
                        <li className="menu-type-2">
                          <a href="/uz/pages/accounting" data-turbo="true">
                            Buxgalteriya
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/shartnomalar_namunasi"
                            data-turbo="true"
                          >
                            Shartnomalar namunasi
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/bitiruvchi_monitoringi"
                            data-turbo="true"
                          >
                            Bitiruvchi monitoringi
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/tuzilganshartnomalar"
                            data-turbo="true"
                          >
                            Tuzilgan shartnomalar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-submenu menu-type-2">
                      <a href="#" data-turbo="true">
                        Xalqaro aloqalar
                      </a>
                      <ul>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/international-cooperation-organizations"
                            data-turbo="true"
                          >
                            Xalqaro hamkor tashkilotlar
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/international-teachers"
                            data-turbo="true"
                          >
                            Xalqaro o'qituvchilar
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/xorijmalakaoshirish"
                            data-turbo="true"
                          >
                            Xorijda malaka oshirish va ta'lim
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a href="/uz/pages/IT_market" data-turbo="true">
                            Xalqaro IT mutaxassislarini jalb qilish
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/amaldagiloyihalar"
                            data-turbo="true"
                          >
                            Amaldagi loyihalar
                          </a>
                        </li>
                      </ul>
                    </li>
                    
                  </ul>
                </li>
                <li className="list-inline-item nav-submenu menu-type-1">
                  <a data-turbo="true">Qabul 2023</a>
                  <ul>
                    <li className="nav-submenu menu-type-2">
                      <a href="#" data-turbo="true">
                        Bakalavriat
                      </a>
                      <ul>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/abiturent_eslatma"
                            data-turbo="true"
                          >
                            Eslatma
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/abiturent_qabul_nizomi"
                            data-turbo="true"
                          >
                            Qabul nizomi
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/abiturent_qabul_kvotasi"
                            data-turbo="true"
                          >
                            Qabul kvotasi
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/abiturent_hujjatlar"
                            data-turbo="true"
                          >
                            Hujjatlar to'plami
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/test_topshiradigan_fanlar"
                            data-turbo="true"
                          >
                            Imtihon fanlari ro'yhati
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/For_visually_impaired_applicants"
                            data-turbo="true"
                          >
                            Ko'zi ojiz abituriyentlar uchun
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/abiturent_qabul_komissiyasi"
                            data-turbo="true"
                          >
                            Qabul komissiyasi joylashuv o`rni
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="https://fiep.admission.samdu.uz/uz/"
                            data-turbo="true"
                          >
                            Samarqand davlat universiteti xalqaro ta'lim
                            dasturlari markazi
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/abiturent_talim_yunalishlari"
                            data-turbo="true"
                          >
                            Ta'lim yo'nalishlari
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a href="/uz/pages/Exam_programs" data-turbo="true">
                            Imtihon dasturlari
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/abiturent_2016_2017"
                            data-turbo="true"
                          >
                            O`tish ballari
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/foreign-students"
                            data-turbo="true"
                          >
                            Xorijlik talabalar uchun qabul
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-submenu menu-type-2">
                      <a href="#" data-turbo="true">
                        Magistratura
                      </a>
                      <ul>
                        <li className="menu-type-2">
                          <a
                            href="https://fiep.admission.samdu.uz/uz/"
                            data-turbo="true"
                          >
                            Samarqand davlat universiteti xalqaro ta'lim
                            dasturlari markazi
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/mabiturent_eslatma"
                            data-turbo="true"
                          >
                            Eslatma
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/mabiturent_qabul_nizomi"
                            data-turbo="true"
                          >
                            Qabul nizomi
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/mabiturent_qabul_kvotasi"
                            data-turbo="true"
                          >
                            Qabul kvotasi
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/mabiturent_hujjatlar"
                            data-turbo="true"
                          >
                            Hujjatlar to'plami
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/mqabul_monitoringi"
                            data-turbo="true"
                          >
                            Qabul monitoringi
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/mabiturent_qabul_komissiyasi"
                            data-turbo="true"
                          >
                            Qabul komissiyasi joylashuv o'rni
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/mabiturent_talim_yunalishlari"
                            data-turbo="true"
                          >
                            Mutaxassisliklar
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="list-inline-item nav-submenu menu-type-1">
                  <a data-turbo="true">Talabalar</a>
                  <ul>
                    <li className="nav-submenu menu-type-2">
                      <a href="#" data-turbo="true">
                        Bakalavriat
                      </a>
                      <ul>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/talaba_yuriqnoma"
                            data-turbo="true"
                          >
                            Yo'riqnoma
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/bacherlor_contingent"
                            data-turbo="true"
                          >
                            Kontingent
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/talaba_stipendiyalar"
                            data-turbo="true"
                          >
                            Stipendiyalar
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a href="/uz/talaba-turar-joylari" data-turbo="true">
                            Talabalar turar joylari
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/talaba_davlat_imtihonlari"
                            data-turbo="true"
                          >
                            Davlat imtihonlari
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/information-package"
                            data-turbo="true"
                          >
                            Talabaning axborot paketi
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-submenu menu-type-2">
                      <a href="#" data-turbo="true">
                        Magistratura
                      </a>
                      <ul>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/magistr_yuriqnoma"
                            data-turbo="true"
                          >
                            Yo'riqnoma
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/master_contingent"
                            data-turbo="true"
                          >
                            Kontingent
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/magistr-uzlashtirish"
                            data-turbo="true"
                          >
                            O'zlashtirish
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/magistr-stipendiyalar"
                            data-turbo="true"
                          >
                            Stipendiyalar
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/magistr_turar_joylari"
                            data-turbo="true"
                          >
                            Talabalar turar joylari
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/magistr_davlat_imtihonlari"
                            data-turbo="true"
                          >
                            Davlat imtihonlari
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/magistr_disser_elonlar"
                            data-turbo="true"
                          >
                            Magistrlik dissertasiyasi mavzulari to'g'risida
                            e'lonlar
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/magistr_disser_himoya"
                            data-turbo="true"
                          >
                            Magistrlik dissertasiyasi himoyasi
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-submenu menu-type-2">
                      <a href="#" data-turbo="true">
                        Xorijiy talabalar
                      </a>
                      <ul>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/talaba_xorijiy_malumot"
                            data-turbo="true"
                          >
                            Xorijiy talabalar to'g'risida ma'lumotlar
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/talaba_xorijiy_kontrakt"
                            data-turbo="true"
                          >
                            Xorijiy talabalar uchun to'lov-kontrakt miqdori
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/talaba_xorijiy_xafvsizligi"
                            data-turbo="true"
                          >
                            Xorijiy talabalarning xafvsizligi
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/talaba_xorijiy_turarjoy"
                            data-turbo="true"
                          >
                            Xorijiy talabalar turar joylari
                          </a>
                        </li>
                        <li className="menu-type-2">
                          <a
                            href="/uz/pages/talaba_xorijiy_broshyuralar"
                            data-turbo="true"
                          >
                            Broshyuralar
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                {/* <li className="list-inline-item nav-submenu menu-type-1"> */}

                <li className="d-lg-none d-block list-inline-item nav-submenu menu-type-1">
                  <form className="" action="/uz/search">
                    <input
                      placeholder="Qidirish..."
                      className="search-text"
                      type="search"
                    ></input>
                    <button className="search-button" type="submit">
                      <i className="bi bi-search"></i>
                    </button>
                  </form>
                </li>
                <li className="list-inline-item nav-submenu menu-type-1">
                  <a data-turbo="true" href="#">
                    <img
                      src={flag}
                      alt="O'zbek"
                      className="mobile-lang-photo"
                      width="20"
                      height="20"
                    ></img>
                    O'zbek
                  </a>
                  <ul className="min-width-160">
                    <li className="menu-type-2">
                      <a data-turbo="true" href="/ru" className="lang-menu">
                        <img
                          src={russian}
                          alt="O'zbek - O'zbek"
                          className="mobile-lang-photo me-2"
                          width="20"
                          height="20"
                        ></img>
                        Русский
                      </a>
                    </li>

                    <li className="menu-type-2">
                      <a data-turbo="true" href="/en" className="lang-menu">
                        <img
                          src={english}
                          alt="O'zbek - O'zbek"
                          className="mobile-lang-photo me-2"
                          width="20"
                          height="20"
                        ></img>
                        English
                      </a>
                    </li>

                    <li className="menu-type-2">
                      <a data-turbo="true" href="/cy" className="lang-menu">
                        <img
                          src={flag}
                          alt="O'zbek - O'zbek"
                          className="mobile-lang-photo me-2"
                          width="20"
                          height="20"
                        ></img>
                        Ўзбек
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <NavLink to="/Registration" className="col-12 col-xl-2">
                <button className="submission">Hujjat topshirish</button>
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export default index;
