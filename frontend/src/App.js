import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProductCards from "./Components/ProductCards";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductCards />
    </div>
  );
}

export default App;
