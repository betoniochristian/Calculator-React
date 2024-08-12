import React from 'react';
import './App.css';

class Button extends React.Component {
  handleClick(value) {
    this.props.onButtonClick(value);
  }

  render() {
    return (
      <div className="btn-container">
        <button className="btn newcolor" onClick={() => this.handleClick('C')}>C</button>
        <button className="btn newcolor" onClick={() => this.handleClick('DEL')}>DEL</button>
        <button className="btn newcolor" onClick={() => this.handleClick('%')}>%</button>
        <button className="btn newcolor1" onClick={() => this.handleClick('/')}>/</button>
        <button className="btn" onClick={() => this.handleClick(7)}>7</button>
        <button className="btn" onClick={() => this.handleClick(8)}>8</button>
        <button className="btn" onClick={() => this.handleClick(9)}>9</button>
        <button className="btn newcolor1" onClick={() => this.handleClick('*')}>*</button>
        <button className="btn" onClick={() => this.handleClick(4)}>4</button>
        <button className="btn" onClick={() => this.handleClick(5)}>5</button>
        <button className="btn" onClick={() => this.handleClick(6)}>6</button>
        <button className="btn newcolor1" onClick={() => this.handleClick('-')}>-</button>
        <button className="btn" onClick={() => this.handleClick(1)}>1</button>
        <button className="btn" onClick={() => this.handleClick(2)}>2</button>
        <button className="btn" onClick={() => this.handleClick(3)}>3</button>
        <button className="btn newcolor1" onClick={() => this.handleClick('+')}>+</button>
        <button className="btn-long" onClick={() => this.handleClick(0)}>0</button>
        <button className="btn" onClick={() => this.handleClick('.')}>.</button>
        <button className="btn newcolor1" onClick={() => this.handleClick('=')}>=</button>
      </div>
    );
  }
}

export default Button;
