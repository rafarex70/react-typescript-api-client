import React, { useState, ChangeEvent } from "react";
import PersonaDataService from "../services/PersonaService";
import PersonaInDTO from '../types/PersonaIn';

const AddPersona: React.FC = () => {
  const initialPersonaState = {
    name: ""
  };
  const [persona, setPersona] = useState<PersonaInDTO>(initialPersonaState);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPersona({ ...persona, [name]: value });
  };

  const savePersona = () => {
    var data = {
      name: persona.name
    };

    PersonaDataService.create(data)
      .then((response: any) => {
        setPersona({
          name: response.data.name
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const newPersona = () => {
    setPersona(initialPersonaState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newPersona}>
            Add
          </button>
        </div>
      ) : (
        <div>

          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={persona.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>

          <button onClick={savePersona} className="btn btn-success">
            Enviar
          </button>
        </div>
      )}
    </div>
  );
};

export default AddPersona;
