import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import PagosList from "./components/PagosList";
import AddPago from "./components/AddPago";
import AddPersona from "./components/AddPersona";
import BalanceList from "./components/BalanceList";

const App: React.FC = () => {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/pagos" className="navbar-brand">
          Grupo pagos
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/pagos"} className="nav-link">
              Pagos
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/balance"} className="nav-link">
              Balance
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/addPago"} className="nav-link">
              Añadir Pago
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/addPersona"} className="nav-link">
              Añadir Amigo
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<PagosList/>} />
          <Route path="/pagos" element={<PagosList/>} />
          <Route path="/balance" element={<BalanceList/>} />
          <Route path="/addPago" element={<AddPago/>} />
          <Route path="/addPersona" element={<AddPersona/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
