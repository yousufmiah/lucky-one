import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Vegetables from "./components/Vegetables/Vegetables";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Vegetables></Vegetables>
    </div>
  );
}

export default App;
