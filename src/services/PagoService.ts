import http from "../http-common";
import PagosDTO from "../types/Pago";
import PagosInDTO from "../types/PagoIn";
import BalanceDTO from "../types/Balance";

const getAll = () => {
  return http.get<Array<PagosDTO>>("/pagos");
};

const create = (data: PagosInDTO) => {
  return http.post<PagosInDTO>("/pagos", data);
};

const getBalance = () => {
  return http.get<Array<BalanceDTO>>("/pagos/balance");
};

const PagoService = {
  getAll,
  create,
  getBalance
};

export default PagoService;
