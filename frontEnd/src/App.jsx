import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Favorites from "./components/Favorites";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fav" element={<Favorites />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;