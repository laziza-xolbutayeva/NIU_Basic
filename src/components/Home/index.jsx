import "./style.css";
import Carousel from "./Carousel/index";
import MenuSection from "./MenuSection/index";
import News from "./News/index";
import Directions from "./Directions/index";
import Announsements from "./Announsements/index";
import Statistics from "./Statistics/index";
import Usefull from "./Usefullsites/index"

function index() {
  return (<>
  <Carousel/>
  <MenuSection/>
  <News/>
  <Directions/>

  <Announsements/>
  <Statistics/>
  <Usefull/>
  </>
  )
}
export default index;