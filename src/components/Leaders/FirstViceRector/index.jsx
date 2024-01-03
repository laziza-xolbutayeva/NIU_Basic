import { NavLink } from 'react-router-dom'
import img from '../../../assets/leaders_img.svg'
import "./style.css"

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
                <NavLink to="/">Tuzilma</NavLink>
              </li>
              <li>
                <NavLink to="/">Rahbarlar</NavLink>
              </li>
              <li>
                <NavLink to="/Documents/Contracts" className="News-title-now">
                  O'quv ishlari bo'yicha birinchi prorektor
                </NavLink>
              </li>
            </ul>
            <h3 className="News-title-h">
              O'quv ishlari bo'yicha birinchi prorektor
            </h3>
          </div>
          <div className="leaders-wrapper">
            <div className="leaders_name d-flex">
              <img src={img} alt="" />
              <div className="leaders_name_box">
                <h3 className="leaders_name_box_title">
                  Ism Famliya Otasing ismi
                </h3>
                <p className="leaders_name_box_text">
                  Navoiy innovatsiyalar universiteti O'quv ishlari bo'yicha birinchi prorektor
                </p>
                <div className="d-flex justify-content-between">
                  <div>
                    <div className="leaders_name_box_contact">
                      <p className="leaders_name_box_contact_title">Qabul:</p>
                      <p className="leaders_name_box_contact_text">
                        Chorshanba, 16.00-18.00
                      </p>
                    </div>
                    <div className="leaders_name_box_contact">
                      <p className="leaders_name_box_contact_title">E-mail:</p>
                      <p className="leaders_name_box_contact_text">
                        rektor@niu.uz
                      </p>
                    </div>
                  </div>
                  <div className="leaders_name_box_contact">
                    <p className="leaders_name_box_contact_title">Telefon:</p>
                    <p className="leaders_name_box_contact_text">
                      +998 71 000-00-00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="leaders_biography">
                <h2 className="text-center leaders_biography_title">Biografiya</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sunt sint exercitationem autem aut ipsam quibusdam perspiciatis commodi illo itaque asperiores iure laudantium nisi impedit quod mollitia ex voluptates officia eum pariatur, error excepturi ipsum? Corporis fugit, harum iusto nesciunt excepturi placeat explicabo aliquam consequuntur id tempora vel dicta quo, dolores, eveniet sunt incidunt dolore facere doloribus. Adipisci error vitae eveniet enim possimus nesciunt fugiat. A ipsa, amet architecto fugit velit modi vitae, ullam non eligendi adipisci sed. Eum ea itaque accusantium quidem atque debitis provident aut labore, quos, fuga eligendi doloremque! Placeat a, aut quod consectetur repudiandae dignissimos eum doloribus ipsa vitae fugiat distinctio odit officia velit labore. Atque consequuntur iusto reprehenderit fuga nostrum aspernatur quam consectetur dolore magni? Laboriosam tenetur illum rem iste sequi, alias quidem aperiam deserunt doloribus! Nemo aliquid unde voluptate mollitia perspiciatis necessitatibus rerum sequi commodi pariatur veritatis eius fugit repellat est, sunt magnam, aliquam vel asperiores quia ex reprehenderit laboriosam expedita non. Natus quidem commodi magnam eum mollitia deleniti delectus tenetur assumenda error nobis voluptatibus esse praesentium fugiat, magni itaque at quis aperiam animi eos quia nihil. Nisi aut fuga architecto sint molestiae possimus inventore expedita labore officiis, corrupti dicta, itaque laborum aspernatur quod placeat voluptate cupiditate temporibus, voluptas dolorum saepe ipsum neque sapiente illo. Quisquam est cumque dolore iste repellendus ipsum quibusdam impedit ratione assumenda quam, quo ab expedita ut, veritatis obcaecati porro fugit culpa perspiciatis odit vitae possimus dignissimos quis! Porro tempore iusto ad. Necessitatibus, odit optio voluptatum facilis at voluptatibus inventore aut aspernatur laborum nostrum quibusdam recusandae alias molestias excepturi ab quia expedita maxime omnis vero voluptas explicabo in rem. Sed corporis, rerum ipsum error consequuntur doloribus sequi quae earum ratione animi, minus esse necessitatibus aperiam placeat, alias tempore delectus voluptatum cum itaque. Ad ea quisquam perferendis, dolor molestiae quos perspiciatis.</p>
            </div>
            <div className="leaders_biography">
                <h2 className="text-center leaders_biography_title">Vazifalar</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sunt sint exercitationem autem aut ipsam quibusdam perspiciatis commodi illo itaque asperiores iure laudantium nisi impedit quod mollitia ex voluptates officia eum pariatur, error excepturi ipsum? Corporis fugit, harum iusto nesciunt excepturi placeat explicabo aliquam consequuntur id tempora vel dicta quo, dolores, eveniet sunt incidunt dolore facere doloribus. Adipisci error vitae eveniet enim possimus nesciunt fugiat. A ipsa, amet architecto fugit velit modi vitae, ullam non eligendi adipisci sed. Eum ea itaque accusantium quidem atque debitis provident aut labore, quos, fuga eligendi doloremque! Placeat a, aut quod consectetur repudiandae dignissimos eum doloribus ipsa vitae fugiat distinctio odit officia velit labore. Atque consequuntur iusto reprehenderit fuga nostrum aspernatur quam consectetur dolore magni? Laboriosam tenetur illum rem iste sequi, alias quidem aperiam deserunt doloribus! Nemo aliquid unde voluptate mollitia perspiciatis necessitatibus rerum sequi commodi pariatur veritatis eius fugit repellat est, sunt magnam, aliquam vel asperiores quia ex reprehenderit laboriosam expedita non. Natus quidem commodi magnam eum mollitia deleniti delectus tenetur assumenda error nobis voluptatibus esse praesentium fugiat, magni itaque at quis aperiam animi eos quia nihil. Nisi aut fuga architecto sint molestiae possimus inventore expedita labore officiis, corrupti dicta, itaque laborum aspernatur quod placeat voluptate cupiditate temporibus, voluptas dolorum saepe ipsum neque sapiente illo. Quisquam est cumque dolore iste repellendus ipsum quibusdam impedit ratione assumenda quam, quo ab expedita ut, veritatis obcaecati porro fugit culpa perspiciatis odit vitae possimus dignissimos quis! Porro tempore iusto ad. Necessitatibus, odit optio voluptatum facilis at voluptatibus inventore aut aspernatur laborum nostrum quibusdam recusandae alias molestias excepturi ab quia expedita maxime omnis vero voluptas explicabo in rem. Sed corporis, rerum ipsum error consequuntur doloribus sequi quae earum ratione animi, minus esse necessitatibus aperiam placeat, alias tempore delectus voluptatum cum itaque. Ad ea quisquam perferendis, dolor molestiae quos perspiciatis.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default index
