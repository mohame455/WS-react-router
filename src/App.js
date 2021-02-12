import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Products from "./Components/Products";
import AdminArea from "./Components/AdminArea";
import Login from "./Components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./Components/Product";

function App() {
  const products = [
    {
      imgSrc:
        "https://www.bulwark.com/dw/image/v2/BDCD_PRD/on/demandware.static/-/Sites-bulwark-master-catalog/default/dw81c40d8e/SEH4/PS_BW_SEH4CH_F.png?sw=800",
      name: "Sweatshirt",
      price: `49,99 $`,
    },
    {
      imgSrc:
        "https://5.imimg.com/data5/RG/TC/MY-26510561/guess-watch-for-men-500x500.jpg",
      name: "Watch",
      price: `333,64 $`,
    },
    {
      imgSrc:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i4jPhKEFw1NE/v0/-1x-1.jpg",
      name: "SHOES",
      price: `196 $`,
    },
  ];
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={NavBar} />
        <Switch>
          <Route path="/home" component={Home} />
          <Route
            exact
            path="/products"
            render={(props) => <Products products={products} {...props} />}
          />
          <Route
            path="/products/:name"
            render={(props) => <Product products={products} {...props} />}
          />
          <Route exact path="/admin" component={AdminArea} />
          <Route path="/admin/logged" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
