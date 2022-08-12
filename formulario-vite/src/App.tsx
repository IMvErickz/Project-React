import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  function aler() {
    let person = {
      Name: document.getElementById('first_name').value,
      Sobrenome: document.getElementById('last_name').value,
      Senha: document.getElementById('password').value,
      Email: document.getElementById('email').value,
    }
    
    if (person.Senha == "") {
      swal("A senha não está preenchida", "Por favor digite novamente", "warning")
        .then(() => {
        let remove = localStorage.removeItem("Pessoa")
      })

    } else {
      swal("Enviado", "Obrigado!", "success")
        .then(() => {
        localStorage.setItem("Pessoa", JSON.stringify(person))
      })
}
}
  

  return (
     <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <input id="first_name" type="text" className="validate"/>
          <label htmlFor="first_name">Nome</label>
        </div>
        <div className="input-field col s6">
          <input id="last_name" type="text" className="validate"/>
          <label htmlFor="last_name">Sobrenome</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="password" type="password" className="validate"/>
          <label htmlFor="password">Senha</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" className="validate"/>
          <label htmlFor="email">Email</label>
        </div>
        </div>
        <div>
          <a className="waves-effect waves-light btn" id='button' onClick={aler}>Enviar</a>
        </div>
    </form>
  </div>
  )
}

export default App
