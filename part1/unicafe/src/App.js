import React, {useState} from 'react'

//component for feedback
const Button = (props) =>{
  return <button onClick={props.onClick}>{props.text}</button>
  }

// component for displaying counts of feedback
const StatisticLine = (props) =>{
  return(
    <div>
      <table >
        <tbody>
          <tr >
            <td width='70'> {props.text}</td>
            <td  >{props.value}</td>
          </tr>
        </tbody>
          
        
        
      </table>
      
    </div>
  )
}

const Statistics = (props) =>{
  const{good,bad,neutral} = props
  const total = good+bad+neutral
  const score = (good*1) + (bad * -1) + (neutral * 0) //score formula

  if(good === 0 && bad ===0 && neutral === 0) {
    return(
      <div>
        <p> No feedback given</p>
      </div>
    )
  }
  return(
    <div>
      <h1>Statistics</h1>
      <StatisticLine text="good" value = {good} />
      <StatisticLine text="neutral" value = {neutral} />
      <StatisticLine text="bad" value = {bad} />
      <StatisticLine text="All" value = {total} />
      <StatisticLine text="Average" value = {score / total} />
      <StatisticLine text="Positive" value = {(good / total) * 100 + '%'} />
    </div>
  )
}

const App = () =>{
  //save clicks of buttons to their own states

  const[good, setGood] = useState(0)
  const[neutral, setNeutral] = useState(0)
  const[bad, setBad] = useState(0)
   
  //click handler
  const goodHandler = () =>{
    return setGood(good + 1)
    
  }
  const neutralHandler = () =>{
    return setNeutral(neutral + 1)
  }
  const badHandler = () =>{
    return setBad(bad + 1)
  }
  //count handler
  return(
    <div>
      <h1>Give Feedback</h1>
      <Button onClick = {goodHandler} text = "Good" name = {good}  />
      <Button onClick = {neutralHandler} text = "Neutral" name = {neutral} />
      <Button onClick = {badHandler} text = "Bad" name ={bad} />
      <Statistics good = {good} bad = {bad} neutral = {neutral} />
    </div>
  )
  
}
export default App