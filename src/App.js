import { Button } from "./components/button/Button";
import  Select  from "./components/Select/Select"
import {Subtitle} from "./components/subtitle/Subtitle"
import {Footer} from "./components/footer/Footer"
import  Input  from "./components/Input/Input";
import Header from "./components/Header/Header";
import { ImgTien } from "./components/ImgTien/ImgTien";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>hi</h1>
      <Subtitle></Subtitle>
      <Button></Button>
      <Select></Select>
      <Footer/>
      <Input/>
      <ImgTien/>
    </div>
  );
}

export default App;