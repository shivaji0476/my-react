import "./App.css";
import Imgslide from "./Imgslide/Imgslide";
import Button from "./Button/Button";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Content1 from "./Components/Content1/Content1";
import Content2 from "./Components/Content2/Content2";
import Content3 from "./Components/Content3/Content3";
import Content4 from "./Components/Content4/Content4";

function App() {
  let card1 = { name: "fa fa-pie-chart text-white" };
  let card2 = { name: "fa fa-area-chart fs-1 text-white " };
  let card3 = { name: "fa fa-bar-chart text-white" };
  let card4 = { name: "fa fa-line-chart text-white" };
  return (
    <>
      <Header />
      <Content2 />
      <Content1 />

      <h1 className="text-center p-5">Our Services</h1>

      <div className="flex justify-between p-5  row">
        <div className="col-md my-3">
          <Imgslide value={card1} />
        </div>
        <div className="col-md my-3">
          <Imgslide value={card2} />
        </div>
        <div className="col-md my-3">
          <Imgslide value={card3} />
        </div>
        <div className="col-md my-3">
          <Imgslide value={card4} />
        </div>
      </div>
      <div className=" row p-5   ">
        <div className="col-md p-3  ">
          <Content4 />
        </div>
        <div className="col-md p-3 ">
          <Content4 />
        </div>
        <div className="col-md p-3 ">
          <Content4 />
        </div>
      </div>
      <div className="row p-5 ">
        <div className="col-md p-3">
          <Content4 />
        </div>
        <div className="col-md p-3">
          <Content4 />
        </div>
        <div className="col-md p-3">
          <Content4 />
        </div>
      </div>
      <div className="row p-5">
        <div className="col-md p-3">
          <Content4 />
        </div>
        <div className="col-md p-3">
          <Content4 />
        </div>
        <div className="col-md p-3">
          <Content4 />
        </div>
      </div>

      <div className="row bg-primary p-5">
        <h1 className="text-white">
          We are professional
          <span className="text-warning">Packers and Movers</span>
        </h1>
        <div className="col-md-3">
          <Content3 />
        </div>
        <div className="col-md-3">
          <Content3 />
        </div>
        <div className="col-md-3">
          <Content3 />
        </div>
        <div className="col-md-3">
          <Content3 />
        </div>
      </div>

      <Footer />
      <Button />
      
    </>
  );
}

export default App;
