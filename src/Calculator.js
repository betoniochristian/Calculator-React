import React from 'react';
import './App.css';

class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator-output">
        <h1>{this.props.input}</h1>
        <h1>{this.props.result}</h1>
      </div>
    );
  }
}

export default Calculator;
