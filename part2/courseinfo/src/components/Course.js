const Header = (props) => {
    return (
        <div>
            <h1>{props.head}</h1>
            <h2>{props.name}</h2>
        </div>
        
    )
  }
  
  const Total = (props) => {
      
      const sum = props.exercises.reduce((x,y) => x+y)

    return(
      <p>Number of exercises {sum}  </p>
    ) 
  }
  
  const Part = (props) => {
      
    return (
        <p>
           {props.name} {props.exercises}
        </p> 
    )
  }
  
  const Content = ({course,num}) => {
      
    return (
      <div>
          {course[num].parts.map((x)=> <Part key={x.id} name={x.name} exercises={x.exercises} />
          )}
      </div>
    )
  }
  
  const Course = ({course}) =>{
      
        return(
            <div>
                <Header name={course[0].name} head = {'Web Development Curriculum'} />
                <Content course = {course} num={0} />
                <Total exercises ={course[0].parts.map(x=> x['exercises'])} />
                <Header name = {'Nodejs'} />
                <Content course = {course} num = {1} />
                <Total exercises ={course[1].parts.map(x=> x['exercises'])} />
            </div>
        )
  }
  export default Course