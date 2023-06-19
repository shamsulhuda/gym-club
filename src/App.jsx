import "./App.css";
import Header from "./components/Header/Header";
import Items from "./components/Items/Items";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div>
      <div className="main">
        <div className="row g-0 main-div-start">
          <div className="col-md-9 lef-side">
            <div className="container">
              <Header></Header>
              <Items></Items>
            </div>
          </div>
          <div className="col-md-3 right-side">
            <Sidebar></Sidebar>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
