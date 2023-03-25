import "./index.css"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import { Provider} from "react-redux";
import { HomePage } from "./components/homePages/HomePage";
import { Header } from "./components/header/Header";
import { store } from "./Redux/cart/store";
import { OpenFullPage } from "./components/OpenFull/OpenFullPage";

import { ErrorPage } from "./components/ErrorPage/ErrorPage";


 

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
   
      <Header/>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/app/" element={<OpenFullPage/>}/>
      <Route path="*" element={<ErrorPage/>}/>
      </Routes>

    </div>
    </Router>
   
    </Provider>
  );
}

export default App;

