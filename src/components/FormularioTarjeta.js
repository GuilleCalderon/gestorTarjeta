import React, {useState} from 'react'

const initialForm = {
cardType: "credito",
number: "",
name:"",
exp:"",
segurity:""
}


const FormularioTarjeta = ({addToCardList,closeModal}) => {

  const [form, setForm] = useState(initialForm)

  const [errors, setErrors] = useState({})

  const handleRatio= (e)=>{
    setForm({
      ...form,
      cardType: e.target.id
      
    })
    
  }

  const handleChange = (e)=>{

    setForm({
      ...form,
      [e.target.name] : e.target.value,
      
    })
    
  }

  const handleBlur = (e)=>{}

  const handleSubmit = (e)=>{
    e.preventDefault()

    addToCardList(form)

    closeModal()

    setForm(initialForm)    

  }

  return (

    <form className='formulario' onSubmit={handleSubmit}>
      <p>Datos de su nueva tarjeta a cargar:</p>
      
      <input 
      onClick={handleRatio} 
      type="radio" 
      name="elegi" 
      id='credito' 
      defaultChecked={true}
      />Credito
      <input 
      onClick={handleRatio} 
      type="radio" 
      name="elegi" 
      id="debito" 
      />Debito<br /><br />

      <input 
      type="text" 
      placeholder='Nombre que figura en la tarjeta' 
      name='name' 
      value={form.name} 
      onChange={handleChange}
      /><br /><br />

      <input 
      type="number" 
      placeholder='Numero de la tarjeta' 
      name='number' 
      value={form.number} 
      onChange={handleChange}
      /><br /><br />

      <input 
      type="text" 
      placeholder='Fecha de expiracion' 
      name='exp' 
      value={form.exp} 
      onChange={handleChange}
      /><br /><br />
      
      <input 
      type="number" 
      placeholder='Codigo de seguridad' 
      name='segurity' 
      value={form.segurity} 
      onChange={handleChange}
      /><br /><br />

      <button type='submit'>Crear</button>


    </form>
    
  )
}

export default FormularioTarjeta