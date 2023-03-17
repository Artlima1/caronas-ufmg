import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import BuscarCarona from "./Pages/BuscarCarona/BuscarCarona";
import CaronasAtivas from "./Pages/CaronasAtivas/CaronasAtivas";
import CaronasDisponiveis from "./Pages/CaronasDisponiveis/CaronasDisponiveis";
import Historico from "./Pages/Historico/Historico";
import OferecerCarona from "./Pages/OferecerCarona/OferecerCarona";


render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="buscar" element={<BuscarCarona />} />
        <Route path="ativas" element={<CaronasAtivas />} />
        <Route path="disponiveis" element={<CaronasDisponiveis />} />
        <Route path="historico" element={<Historico />} />
        <Route path="oferecer" element={<OferecerCarona />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
