import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({text}) =>  <h2>{text}</h2>

const Anecdote = ({text, voteCount}) => {
  return (
    <div>
      <h5>{text}</h5>
      <p>this anecdote has {voteCount} votes </p>
    </div>
  )
}

const Button = ({text, onClick}) => {
    return (
            <button onClick = {onClick}>
                {text}
            </button>
    )
}

const Winner = ({points, anecdotes}) => {
  const winner = anecdotes[(points.indexOf(Math.max(...points)))];
  console.log(winner)
  if(Math.max(...points) === 0){
    return (
      <p>not votes yet</p>
    )
  }
  return (
    <div>
      <p>{winner}</p>
    </div>
  )

}

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const[points, setPoints] = useState(Array(anecdotes.length).fill(0))
    console.log(selected)

  const handleSelectClick = () => {
    let index = Math.floor(Math.random() * anecdotes.length)  
    setSelected(index)
  }

  const handleVoteClick = () => {
    // setPoints([...points, points[selected] +=1 ])
    const newVotes = [...points]
    newVotes[selected] +=1
    setPoints(newVotes)
    console.log(points)
  }

  return (
    <div>
        <Header text = "Anecdote of the day" />
        <Anecdote text = {anecdotes[selected]} voteCount={points[selected]}/>
        <Button text='vote' onClick ={handleVoteClick}/>
        <Button text='next anecdote' onClick ={handleSelectClick}/>
        <Header text = "Anecdote with more votes" />
        <Winner points = {points} anecdotes={anecdotes}/>
        {/* <p>{anecdotes[(points.indexOf(Math.max(...points)))]}</p> */}
        
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]



ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)