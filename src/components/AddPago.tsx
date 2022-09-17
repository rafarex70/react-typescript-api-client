import React, { useState, ChangeEvent } from "react";
import PagoDataService from "../services/PagoService";
import PagoInDTO from '../types/PagoIn';

const AddPago: React.FC = () => {
  const initialPagoState = {
    importe: 0,
    concepto: "",
    idPersona: 0
  };
  const [pago, setPago] = useState<PagoInDTO>(initialPagoState);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPago({ ...pago, [name]: value });
  };

  const savePago = () => {
    var data = {
      importe: pago.importe,
      concepto: pago.concepto,
      idPersona: pago.idPersona
    };

    PagoDataService.create(data)
      .then((response: any) => {
        setPago({
          importe: response.data.importe,
          concepto: response.data.concepto,
          idPersona: response.data.idPersona
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const newPago = () => {
    setPago(initialPagoState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newPago}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="importe">Importe</label>
            <input
              type="number"
              className="form-control"
              id="importe"
              required
              value={pago.importe}
              onChange={handleInputChange}
              name="importe"
            />
          </div>

          <div className="form-group">
            <label htmlFor="concepto">Concepto</label>
            <input
              type="text"
              className="form-control"
              id="concepto"
              required
              value={pago.concepto}
              onChange={handleInputChange}
              name="concepto"
            />
          </div>

          <div className="form-group">
            <label htmlFor="idPersona">ID Persona</label>
            <input
              type="number"
              className="form-control"
              id="idPersona"
              required
              value={pago.idPersona}
              onChange={handleInputChange}
              name="idPersona"
            />
          </div>

          <button onClick={savePago} className="btn btn-success">
            Enviar
          </button>
        </div>
      )}
    </div>
  );
};

export default AddPago;
