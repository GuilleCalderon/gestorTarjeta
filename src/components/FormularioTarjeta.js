import React, { useState } from "react";

const initialForm = {
  cardType: "credito",
  number: "",
  name: "",
  exp: "",
  segurity: "",
};

const validateForm = (form) => {
  let errors = {};

  if (!form.name?.trim()) {
    errors.name = "El NOMBRE que figura en la tarjeta es requerido";
  }

  if (!form.number?.trim()) {
    errors.number = "El NUMERO de la tarjeta es requerido";
  }

  if (!form.exp?.trim()) {
    errors.exp = "La fecha de EXPIRACION de la tarjeta es requerida";
  }

  if (!form.segurity?.trim()) {
    errors.segurity = "El CODIGO de seguridad de la tarjeta es requerido";
  }

  return errors;
};

const FormularioTarjeta = ({ addToCardList, closeModal }) => {
  const [form, setForm] = useState(initialForm);

  const [errors, setErrors] = useState({});

  const handleRatio = (e) => {
    setForm({
      ...form,
      cardType: e.target.id,
    });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);

    setErrors(validateForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addToCardList(form);

    closeModal();

    setForm(initialForm);
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <p className="titulo-form">Datos de su nueva tarjeta a cargar:</p>
      <input
        onClick={handleRatio}
        type="radio"
        name="elegi"
        id="credito"
        defaultChecked={true}
      />
      Credito
      <input onClick={handleRatio} type="radio" name="elegi" id="debito" />
      Debito
      <br />
      <br />
      <input
        onBlur={handleBlur}
        type="text"
        placeholder="Nombre que figura en la tarjeta"
        name="name"
        value={form.name}
        onChange={handleChange}
        required
      />
      {errors.name && <p className="validation">{errors.name}</p>}
      <input
        onBlur={handleBlur}
        type="number"
        placeholder="Numero de la tarjeta"
        name="number"
        value={form.number}
        onChange={handleChange}
        required
      />
      {errors.number && <p className="validation">{errors.number}</p>}
      <input
        onBlur={handleBlur}
        type="text"
        placeholder="Fecha de expiracion"
        name="exp"
        value={form.exp}
        onChange={handleChange}
        required
      />
      {errors.exp && <p className="validation">{errors.exp}</p>}
      <input
        onBlur={handleBlur}
        type="number"
        placeholder="Codigo de seguridad"
        name="segurity"
        value={form.segurity}
        onChange={handleChange}
        required
      />
      {errors.segurity && <p className="validation">{errors.segurity}</p>}
      <br />
      <br />
      <button className="btn-submit" type="submit">
        Agregar Tarjeta
      </button>
    </form>
  );
};

export default FormularioTarjeta;
