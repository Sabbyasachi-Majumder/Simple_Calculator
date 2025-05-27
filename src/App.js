// Input/Output interface for Simple Calculator

import './App.css';
import { useState, useEffect } from 'react'  //Required for using hooks and its commmands like useState

const App = () => {
  const [input, setIn] = useState('')
  const [output, setOut] = useState('0')
  const [num, setNum] = useState('')
  const [op, setOp] = useState('+')

  const checkOperator = (props) => {
    return (props.target.value === '+' || props.target.value === '-' || props.target.value === 'x' || props.target.value === '÷' || props.target.value === '%' || props.target.value === '=')
  }

  useEffect(() => {                       //React works asynchronously ie it clubs all the value setters in one run in
    setNum(num)                        //one render . Thus value of a variable only changes on the next render . 
    console.log("empty")                  //useEffect makes the value changing immediately 
  }, [num,]);

  const setInputNumOp = (props) => {
    if (checkOperator(props)) {                      //The props is an operator
      if (num === '') {                              //The operator is the first character 
        setIn(input + props.target.value)
        setOut("Enter a number before an operator . Click on clear and retry.")
        console.log("giving operator only error")
      }
      else if (props.target.value === '=') {
        setOutput()
        console.log("Clicked = thus sending to output")
      }
      else {
        setIn(input + " " + props.target.value + " ")
        setOutput()
        setOp(props.target.value)
        console.log("sending to output")
      }
    } else {
      setIn(input + props.target.value)
      setNum(num + props.target.value)
      console.log("adding to num")
    }
    console.log("Num : " + num)
    console.log("Input : " + input)
  }

  const setOutput = () => {
    console.log("operator : " + op)
    switch (op) {
      case '+': setOut((parseFloat(output.substring(), 10) + parseFloat(num.substring(), 10)).toFixed(2))
        break;
      case '-': setOut((parseFloat(output.substring(), 10) - parseFloat(num.substring(), 10)).toFixed(2))
        break;
      case 'x': setOut((parseFloat(output.substring(), 10) * parseFloat(num.substring(), 10)).toFixed(2))
        break;
      case '÷':
        if (output !== '0' && num !== '0')
          setOut((parseFloat(output.substring(), 10) / parseFloat(num.substring(), 10)).toFixed(2))
        else
          setOut('One or both of the inputs are 0 thus undivisable. Please try again with non zero inputs')
        break;
      case '%':
        if (output !== '0' && num !== '0')
          setOut((parseFloat(output.substring(), 10) % parseFloat(num.substring(), 10)).toFixed(2))
        else
          setOut('One or both of the inputs are 0 thus undividable. Please try again with non zero inputs')
        break;
      default: ;
    }
    setNum('')
  }

  const clear = () => {
    setIn('')
    setOut('0')
    setNum('')
    setOp('+')
    console.clear()
  }

  return (
    <div className="App">
      <header className="App-header">
        Simple Calculator using React
      </header>

      <div className="App-body">
        <div className="Output-Box">
          <div className="Output">{output}</div>
        </div>
        <div className="Input-Box">
          <div className="Input">{input}</div>
        </div>
        <div className="Buttons-Area">
          <button className="opButton" onClick={clear}>Clear</button>
          <button className="opButton" value={'b'} onClick={setInputNumOp} disabled>()</button>
          <button className="opButton" value={'%'} onClick={setInputNumOp}>%</button>
          <button className="opButton" value={'÷'} onClick={setInputNumOp}>÷</button>
          <button className="numButton" value={'7'} onClick={setInputNumOp}>7</button>
          <button className="numButton" value={'8'} onClick={setInputNumOp}>8</button>
          <button className="numButton" value={'9'} onClick={setInputNumOp}>9</button>
          <button className="opButton" value={'x'} onClick={setInputNumOp}>x</button>
          <button className="numButton" value={'6'} onClick={setInputNumOp}>6</button>
          <button className="numButton" value={'5'} onClick={setInputNumOp}>5</button>
          <button className="numButton" value={'4'} onClick={setInputNumOp}>4</button>
          <button className="opButton" value={'-'} onClick={setInputNumOp}>-</button>
          <button className="numButton" value={'1'} onClick={setInputNumOp}>1</button>
          <button className="numButton" value={'2'} onClick={setInputNumOp}>2</button>
          <button className="numButton" value={'3'} onClick={setInputNumOp}>3</button>
          <button className="opButton" value={'+'} onClick={setInputNumOp}>+</button>
          <button className="opButton" value={'pos/neg'} onClick={setInputNumOp} disabled>+/-</button>
          <button className="numButton" value={'0'} onClick={setInputNumOp}>0</button>
          <button className="opButton" value={'.'} onClick={setInputNumOp} disabled>.</button>
          <button className="opButton" value={'='} onClick={setInputNumOp} >=</button>
        </div>
      </div>
    </div>
  );
}

export default App;