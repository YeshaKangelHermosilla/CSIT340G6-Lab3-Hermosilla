const Header = (props) => <h1>{props.course}</h1>

const Part = (props) => <p>{props.part} {props.units}</p>

const Content = (props) => (
  <div>
    <Part part={props.part1.name} units={props.part1.units} />
    <Part part={props.part2.name} units={props.part2.units} />
    <Part part={props.part3.name} units={props.part3.units} />
  </div>
)

const Total = (props) => (
  <p>Number of units {props.part1.units + props.part2.units + props.part3.units}</p>
)

const Footer = (props) => (
  <footer>{props.fullName} - {props.courseCode} - {props.section}</footer>
)

const App = () => {
  const course = 'Industry Electives 1'
  const part1 = { name: 'Information Management 2', units: 3 }
  const part2 = { name: 'Networking 2', units: 3 }
  const part3 = { name: 'Data Analytics 1', units: 3 }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
      <Footer fullName="Yesha Kangel O. Hermosilla" courseCode="CSIT340" section="G6" />
    </div>
  )
}

export default App