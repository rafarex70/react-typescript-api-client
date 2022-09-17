import http from "../http-common";
import PersonaInDTO from "../types/PersonaIn";



const create = (data: PersonaInDTO) => {
  return http.post<PersonaInDTO>("/personas", data);
};


const PagoService = {
  create
};

export default PagoService;
