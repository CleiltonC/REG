// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// import LoginButton from "../components/LoginButton";

// class LogIn extends Component {
//   constructor() {
//     super();

//     this.state = {
//       cpf: "",
//       senha: "",
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(e) {
//     let target = e.target;
//     let value = target.type === "checkbox" ? target.checked : target.value;
//     let name = target.name;

//     this.setState({
//       [name]: value,
//     });
//   }

//   handleSubmit(e) {
//     e.preventDefault();

//     console.log("The form was submitted with the following data:");
//     console.log(this.state);
//   }

//   render() {
//     return (
//       <div className="FormCenter">
//         <div className="FormTitle">
//           {/* <img src="/assets/REG_LOGO.png" /> */}
//           <h1>
//             <a href="#" className="FormTitle__Link--Active">
//               Registro Eletrônico de Ponto
//             </a>
//           </h1>
//         </div>

//         <form
//           onSubmit={this.handleSubmit}
//           className="FormFields"
//           onSubmit={this.handleSubmit}
//         >
//           <div className="FormField">
//             <label className="FormField__Label" htmlFor="cpf">
//               Cpf
//             </label>
//             <input
//               type="cpf"
//               maxLength="11"
//               id="cpf"
//               className="FormField__Input"
//               placeholder="Somente Números"
//               name="cpf"
//               value={this.state.cpf}
//               onChange={this.handleChange}
//             />
//           </div>

//           <div className="FormField">
//             <label className="FormField__Label" htmlFor="senha">
//               Senha
//             </label>
//             <input
//               type="senha"
//               maxLength="8"
//               id="senha"
//               className="FormField__Input"
//               placeholder="senha"
//               name="senha"
//               value={this.state.senha}
//               onChange={this.handleChange}
//             />
//           </div>

//           <div className="FormField">
//             {/* <button className="FormField__Button mr-20" >Entrar</button> */}
//             <LoginButton />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import StoreContext from "../components/Store/Context";

import LoginButton from "../components/LoginButton";

function initialState() {
  return { cpf: "", senha: "" };
}

function login({ cpf, senha }) {
  if (cpf === "admin" && senha === "admin") {
    return { token: "1234" };
  }
  return { error: "Usuário ou senha inválido" };
}

const LogIn = () => {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(null);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  function onSubmit(event) {
    event.preventDefault();

    const { token, error } = login(values);

    if (token) {
      setToken(token);
      return history.push("/");
    }

    setError(error);
    setValues(initialState);
  }

  return (
    <div className="cpf-login">
      <h1 className="cpf-login__title">Acessar o Sistema</h1>
      <form onSubmit={onSubmit}>
        <div className="FormField">
          <label className="FormField__Label" htmlFor="cpf">
            CPF
          </label>
          <input
            type="cpf"
            maxLength="11"
            id="cpf"
            className="FormField__Input"
            placeholder="Somente Números"
            name="cpf"
            onChange={onChange}
            value={values.cpf}
          />
        </div>
        <div className="FormField">
          <label className="FormField__Label" htmlFor="senha">
            Senha
          </label>
          <input
            type="senha"
            maxLength="8"
            id="senha"
            className="FormField__Input"
            placeholder="senha"
            name="senha"
            onChange={onChange}
            value={values.senha}
          />
        </div>
        {error && <div className="cpf-login__error">{error}</div>}
        <LoginButton />
      </form>
    </div>
  );
};

export default LogIn;
