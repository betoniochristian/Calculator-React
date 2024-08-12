import React from 'react';
import Calculator from './Calculator';
import Button from './Button';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      result: ''
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(value) {
    this.setState(prevState => {
      let newInput = prevState.input;
      let newResult = prevState.result;

      if (value === 'C') {
        newInput = '';
        newResult = '';
      } else if (value === 'DEL') {
        newInput = newInput.slice(0, -1);
      } else if (value === '=') {
        try {
          newResult = eval(newInput).toString();
        } catch {
          newResult = 'Error';
        }
      } else {
        newInput += value;
        newResult = '';
      }

      return { input: newInput, result: newResult };
    });
  }

  render() {
    return (
      <div className="main-container">
        <div className="calculator-container">
          <Calculator input={this.state.input} result={this.state.result} />
          <Button onButtonClick={this.handleButtonClick} />
        </div>
      </div>
    );
  }
}

export default App;
