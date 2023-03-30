import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import FindRide from "./Pages/FindRide/FindRide";
import OfferRide from "./Pages/OfferRide/OfferRide";
import RideInfo from "./Pages/RideInfo/RideInfo";

import "./index.css"

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="buscar" element={<FindRide />} />
        <Route path="oferecer" element={<OfferRide />} />
        <Route path="informacoes" element={<RideInfo />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
