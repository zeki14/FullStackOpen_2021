import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({onClick, buttonText}) =>{
  return (
          <button onClick ={onClick}>
            {buttonText}
          </button>
    ) 
}

const Display = ({displayText, displayValue}) =>{
  return (
    <p>{displayText} {displayValue}</p>) 
}

const Title = ({text}) => <h1>{text}</h1>

const Statistics = ({good, neutral, bad}) => {
  
  if(good ===0 && neutral===0 && bad=== 0){
    return (
      <div> 
        No feedback given
      </div>
      )
    }
    return (
      <div>
        <Title text ='statistics'/>
        <Display displayText= 'good'  displayValue ={good}/>
        <Display displayText= 'neutral'  displayValue ={neutral}/>
        <Display displayText= 'bad' displayValue={bad}/>
        <Display displayText= 'all' displayValue={good + neutral + bad}/>
        <Display displayText= 'average' displayValue={(good - bad)/(good + neutral + bad)}/>
        <Display displayText= 'positive' displayValue={good/(good + neutral + bad)*100 + '%'}/>
      </div>


  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good +1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral +1)
  }
  const handleBadClick = () => {
    setBad(bad +1)
  }

  return (
    <div>
      <Title text= 'give feedback'/>
      <Button  onClick={handleGoodClick} buttonText='good'/>
      <Button  onClick={handleNeutralClick} buttonText='neutral'/> 
      <Button  onClick={handleBadClick} buttonText='bad'/> 
      <Statistics good={good} neutral={neutral} bad={bad}/>

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)