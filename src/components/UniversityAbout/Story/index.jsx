
import { NavLink } from "react-router-dom";
import img from "../../../assets/aboutuniver.svg";

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
                <NavLink to="/UniversityAbout/History" className="News-title-now">
                  Navoiy innovatsiyalar universiteti tarixi
                </NavLink>
              </li>
            </ul>
            <h3 className="News-title-h">Navoiy innovatsiyalar universiteti tarixi</h3>
          </div>
          <div className="NewsDetail_Card d-flex">
            <img src={img} alt="" className="NewsDetail_Card_img"/>
            <div className="NewsDetail_Card_box">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error dignissimos ducimus in ullam non reprehenderit reiciendis? Nihil vel minima nam suscipit sint rerum delectus in molestias neque? Dolorem, provident, vel, repudiandae dignissimos nulla earum culpa dicta dolores saepe cupiditate sint asperiores? Nostrum, ipsam! Velit repudiandae non odio necessitatibus laboriosam maiores dolorum hic corrupti reprehenderit ullam? Quasi, veniam. Minus est ea dolore quas corrupti in, provident, sit, laudantium laboriosam nisi porro unde! Numquam veniam officiis officia sunt corporis, aut libero id alias non dignissimos sapiente nulla atque rerum harum molestiae dolores soluta odit modi quis. Reiciendis odit eaque perspiciatis? Voluptate unde atque molestiae! Veniam doloremque, eius iusto tempore iure voluptate impedit et. Dicta commodi perferendis quas earum et officia mollitia laborum tenetur vel illo minima eveniet quibusdam veritatis sit saepe quasi odio numquam, autem id. Aperiam necessitatibus nesciunt veritatis esse sequi inventore, quasi dolorem doloremque culpa in quisquam ducimus nam repudiandae dolor similique eos error voluptate. Rerum ea nisi hic accusantium omnis recusandae sunt sequi cumque aperiam eligendi doloremque pariatur aliquid, dicta quia saepe unde iste soluta esse maiores, harum quaerat nam! Nulla a inventore, aspernatur aliquid asperiores maiores deleniti aliquam minus, ea dolore numquam minima veniam omnis incidunt doloremque obcaecati.</p>
            </div>
          </div>
          </div>
          </section>
          </>
  )
}
export default index;