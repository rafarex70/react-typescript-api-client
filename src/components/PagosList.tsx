import React, { useState, useEffect } from "react";
import PagoDataService from "../services/PagoService";
import PagoDTO from '../types/Pago';

const PagosList: React.FC = () => {
  const [pagos, setPagos] = useState<Array<PagoDTO>>([]);
  const [currentPago, setCurrentPago] = useState<PagoDTO | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  useEffect(() => {
    retrievePagos();
  }, []);


  const retrievePagos = () => {
    PagoDataService.getAll()
      .then((response: any) => {
        setPagos(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };


  const setActivePago = (pago: PagoDTO, index: number) => {
    setCurrentPago(pago);
    setCurrentIndex(index);
  };


  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>Lista Pagos</h4>

        <ul className="list-group">
          {pagos &&
            pagos.map((pago, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActivePago(pago, index)}
                key={index}
              >
                {pago.concepto} - {pago.importe} €
              </li>
            ))}
        </ul>

      </div>
      <div className="col-md-6">
        {currentPago ? (
          <div>
            <h4>Pago</h4>
            <div>
              <label>
                <strong>Concepto:</strong>
              </label>{" "}
              {currentPago.concepto}
            </div>
            <div>
              <label>
                <strong>Importe:</strong>
              </label>{" "}
              {currentPago.importe} €
            </div>
            <div>
              <label>
                <strong>Fecha:</strong>
              </label>{" "}
              {currentPago.fecha}
            </div>
            <div>
              <label>
                <strong>Quien:</strong>
              </label>{" "}
              {currentPago.persona}
            </div>
          </div>
        ) : (
          <div>
            <br />
            <p>Seleccione un Pago...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PagosList;
