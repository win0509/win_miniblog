import {Route, Routes} from "react-router-dom";
import './App.css';
import Home from "./routes/Home";

import Header from './component/Header';
import Profile from './component/Profile';
import Newpost from "./routes/Newpost";
import Footer from "./component/Footer";



function App() {
  return (
    <div className="App">
      <Header />

      <section>
        <Profile />
        <Routes>
          <Route path="/Home" element={<Home />}/>
          <Route path="/Newpost" element={<Newpost />}/>
        </Routes>
      </section>

      <Footer/>
    </div>
  );
}

export default App;
