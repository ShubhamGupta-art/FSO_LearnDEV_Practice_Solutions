const Header =(props)=>{
  return(

    <h1>{props.course}</h1>
  )
  }
const Content =(props)=>{
  return(
    <div>
      <h2>{props.parts1} and total exercises : {props.exercise1}</h2>
      <h2>{props.parts2} and total exercises : {props.exercise2}</h2>
      <h2>{props.parts3} and total exercises : {props.exercise3}</h2>
    </div>
  )
}
const Total =(props)=>{
return(
<p> Number of exercises : {props.total}</p>
)
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


  return (
    <div>
      <Header course={course} />
      <Content  parts1 ={part1} exercise1 ={exercises1} parts2 ={part2} exercise2 ={exercises2} parts3 ={part3} exercise3 ={exercises3}/>
      <Total  total ={exercises1+exercises2+exercises3}/>
    </div>
  )
}

export default App