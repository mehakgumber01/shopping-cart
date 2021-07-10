import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import Footer from '../footer/index';
import styles from '../../styles/LoginForm.module.css';

import Header from '../header/header'
import {ThemeContext} from '../products/index';


const validEmailRegex = RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
const validPasswordRegex = RegExp(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/);


const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      // email: '',
      // password: '',
      // formErrors: {email: '', password: ''},
      // emailValid: false,
      // passwordValid: false,
      // formValid: false
      email: "",
      password: "",
      windowWidth: '',
      errors: {
        email: "",
        password: ""
      }
    }
  }

  handleUserInput = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    // this.setState({[name]: value},
    //               () => { this.validateField(name, value) });
    e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.errors;

    switch (name) {
      case "email":
        errors.email = validEmailRegex.test(value)
          ? ""
          : "Email address is not valid!";
        break;
      case "password":
        errors.password =
          value.length < 6
            ? "Password must be 6 characters long!"
            : !validPasswordRegex.test(value)
            ? "Must have a number and alphabet"
            : "";
        break;

      default:
        break;
    }

    this.setState({ errors, [name]: value });
  }

 // validateField(fieldName, value) {
    // let fieldValidationErrors = this.state.formErrors;
    // let emailValid = this.state.emailValid;
    // let passwordValid = this.state.passwordValid;

    // switch(fieldName) {
    //   case 'email':
    //     emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    //     fieldValidationErrors.email = emailValid ? '' : ' is invalid';
    //     break;
    //   case 'password':
    //     passwordValid = value.length >= 6;
    //     fieldValidationErrors.password = passwordValid ? '': ' is too short';
    //     break;
    //   default:
    //     break;
    // }
    // this.setState({formErrors: fieldValidationErrors,
    //                 emailValid: emailValid,
    //                 passwordValid: passwordValid
    //               }, this.validateForm);
   
//}

//  validateForm (errors) {
//   let valid = true;
//   Object.values(errors).forEach(val => val.length > 0 && (valid = false));
//   return valid;
// };
  // validateForm() {
  //   this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  // }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  handleSubmit = event => {
    event.preventDefault();
    if (validateForm(this.state.errors)) {
      console.info("Valid Form");
    } else {
      console.error("Invalid Form");
    }
  };


  render () {
    const { errors } = this.state;

    return (
      //<form className={styles.demoForm}>
      <ThemeContext.Consumer>
      {
              (cartProducts) => (
                
     
      <div className={styles.container}>
      
        
            <Header cartProducts={cartProducts}/> 
         
        <main className={styles.mainSection} id="main">
          <div className={styles.loginSection}>
          
          <div className={styles.shoppingForm}>
              <h2 variant="h1">Login</h2>
              <p className="order-info">Get access to your orders wish list and recommendations </p>
            </div>
            

      <form action="#" onSubmit={this.handleSubmit} noValidate>

        <div className="panel panel-default">
          {/* <FormErrors formErrors={this.state.formErrors} /> */}
        </div>
        <div className={`form-group`}>
          <label htmlFor="email">Email address</label>
          <input   label="Email"
                    name="email"
                    type="text"
                    size={50}
                    className="input"
                    aria-required="true"
                    error={errors.email}
                    noValidate
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleUserInput}  />
                 { errors.email && <p className={errors.email ? 'error': ''}>{ errors.email }</p>}
        </div>
        <div className={`form-group `}>
          <label htmlFor="password">Password</label>
          <input type="password"  label="Password"
                    name="password"
                   
                    placeholder="Password"
                    size={50}
                    value={this.state.password}
                    className="input"
                    aria-required="true"
                    error={errors.password}
                    noValidate 
            onChange={this.handleUserInput}  />
                 { errors.password && <p className={errors.password ? 'error': ''}>{ errors.password }</p>}
        </div>
        <button type="submit" className="btn btn-primary" >Login</button>
        </form>
        </div>
        </main>
        <Footer />
        
      </div>
              )}
      
      </ThemeContext.Consumer> 

      

    )
  }
}

export default Form;