import React from "react";
import medi1 from "../../images/med1.png";
import medi2 from "../../images/med2.png";
import Menu from "./Menus";
import Header from "./Header";
import { Container } from "reactstrap";


const Home = () => {
  return (
    <Container>
      {/* <Header /> */}
      <div className="grid gap-12 grid-col-12">
        <div className="col-start-1 col-end-5">
          <Menu />
        </div>
        <div className="col-start-7 col-end-13">
          <h1 className="mt-4 mb-8 text-4xl font-bold"></h1>
          <div className="grid grid-cols-2 gap-14">
            <div className="flex flex-col p-3 bg-gray-200 rounded-lg">
              <img src={medi1} alt="imager" className="aspect-w-16 aspect-h-9" />
              <div className="mt-3 text-lg font-medium">Crocin</div>
            </div>

            <div className="flex flex-col p-3 bg-gray-200 rounded-lg">
              <img src={medi2} alt="imager" className="aspect-w-16 aspect-h-9" />
              <div className="mt-3 text-lg font-medium">Pan-40</div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
