import React, { useState, useEffect } from "react";
import PagoDataService from "../services/PagoService";
import BalanceDTO from '../types/Balance';

const BalanceList: React.FC = () => {
  const [balance, setBalance] = useState<Array<BalanceDTO>>([]);

  useEffect(() => {
    retrievePagos();
  }, []);


  const retrievePagos = () => {
    PagoDataService.getBalance()
      .then((response: any) => {
        setBalance(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const setColor = (importe: number) => {
    if (importe<0) return "red"
    return "green"
  }


  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>Balance Pagos</h4>

        <ul className="list-group">
          {balance &&
            balance.map((pago, index) => (
              <li color={setColor(pago.importe)}>
                {pago.name} {pago.importe} €
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default BalanceList;
