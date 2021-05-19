
import './App.css';
//Components
import Mynavbar from "./Components/my-navbar/mynavbar.component";
import Mycarousal from "./Components/my-carousal/my-carousal.component";
import TitleMassage from "./Components/title-massage/title-massage.component"

const App =() => {
  return (
    <div >
     <Mynavbar />
     <Mycarousal />
     <TitleMassage />
    </div>
  );
}

export default App;
