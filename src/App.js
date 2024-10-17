import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/Store";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="Container">
      <Provider store={store}>
        <h1 className="MainTitle">Каталог продуктов</h1>
        <AddProduct />
        <ProductList />
      </Provider>
    </div>
  );
}

export default App;
