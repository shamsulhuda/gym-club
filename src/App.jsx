import { ToastProvider } from "react-toast-notifications";
import "./App.css";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <ToastProvider>
      <div>
        <div className="main">
          <Shop></Shop>
        </div>
      </div>
    </ToastProvider>
  );
}

export default App;
