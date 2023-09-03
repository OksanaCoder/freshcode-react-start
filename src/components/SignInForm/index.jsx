import React, { Component } from "react";
import cx from "classnames";
import styles from "./SignInForm.module.css";
const initialValues = {
  email: "",
  password: "",
  login: "",
  emailValid: true,
  passwordValid: true,
  loginValid: true,
  check: false,
  selectedOption: "option 1"
};

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialValues };
  }

  handleForm = (event) => {
    event.preventDefault();
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    //event.target.reset();
    this.setState({ ...initialValues });
  };

  handleInput = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
      [`${name}Valid`]: value.includes(" ") === false
    });
  };

  handleCheckbox = ({ target: { name, checked } }) => {
    this.setState({ [name]: checked });
  };
  handleOptionChange = (event) => {
    // When a radio option is selected, update the state
    this.setState({
      selectedOption: event.target.value
    });
  };

  render() {
    const {
      check,
      email,
      password,
      emailValid,
      passwordValid,
      login,
      loginValid,
      selectedOption
    } = this.state;

    const classesEmail = cx(styles.input, { [styles.invalid]: !emailValid });
    const classesPassword = cx(styles.input, {
      [styles.invalid]: !passwordValid
    });
    const classesLogin = cx(styles.input, { [styles.invalid]: !loginValid });
    return (
      <form className={styles.form} onSubmit={this.handleForm}>
        <div>
          <label>
            <input
              className={classesLogin}
              value={login}
              onChange={this.handleInput}
              type="login"
              name="login"
              placeholder="your login"
            />
          </label>

          <label>
            <input
              type="radio"
              name="radioGroup" // Group name for radio buttons
              value="option1"
              checked={selectedOption === "option1"} // Controlled by the component's state
              onChange={this.handleOptionChange} // Handle radio option changes
            />
            Option 1
          </label>
        </div>
        <label>
          <input
            onChange={this.handleCheckbox}
            checked={check}
            type="checkbox"
            name="check"
            placeholder="your email"
          />
          check me
        </label>
        <input
          className={classesEmail}
          value={email}
          onChange={this.handleInput}
          type="email"
          name="email"
          placeholder="your email"
        />
        <input
          className={classesPassword}
          value={password}
          onChange={this.handleInput}
          type="password"
          name="password"
          placeholder="your password"
        />
        <button type="submit">send</button>
      </form>
    );
  }
}

export default SignInForm;
