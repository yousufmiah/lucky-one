import "./App.css";
import Vegetables from "./components/Vegetables/Vegetables";
import "./App.css";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <h1 className=" main text-center text-white bg-primary py-3">
        Vegetables Shop
      </h1>
      <Vegetables></Vegetables>
    </div>
  );
}

export default App;
