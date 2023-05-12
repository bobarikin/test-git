import { Button } from "./components/button/Button";
import { Button } from "./components/button/Button"
import {Subtitle} from "./components/subtitle/Subtitle"
import {Footer} from "./components/button/Footer"
import { Input } from "./components/button/Input/Input";
import { Header } from "./components/header/Header";
import {TaskSevka} from "./components/taskSevka/TaskSevka"
import { ImgTien } from "./components/ImgTien/ImgTien";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>hi</h1>
      <Subtitle></Subtitle>
      <Header />
      <Button></Button>
      <Select></Select>
      <Footer/>
      <Input/>
      <ImgTien/>
      <TaskSevka/>
    </div>
  );
}

export default App;