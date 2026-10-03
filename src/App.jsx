const Header = (props) => <h1>{props.course}</h1>

const Part = (props) => <p>{props.part} {props.units}</p>

const Content = (props) => (
  <div>
    <Part part={props.part1} units={props.units1} />
    <Part part={props.part2} units={props.units2} />
    <Part part={props.part3} units={props.units3} />
  </div>
)

const Total = (props) => (
  <p>Number of units {props.units1 + props.units2 + props.units3}</p>
)

const Footer = (props) => (
  <footer>{props.fullName} - {props.courseCode} - {props.section}</footer>
)

const App = () => {
  const course = 'Industry Electives 1'
  const part1 = 'Information Management 2'
  const units1 = 3
  const part2 = 'Networking 2'
  const units2 = 3
  const part3 = 'Data Analytics 1'
  const units3 = 3

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1} units1={units1}
        part2={part2} units2={units2}
        part3={part3} units3={units3}
      />
      <Total units1={units1} units2={units2} units3={units3} />
      <Footer fullName="Yesha Kangel O. Hermosilla" courseCode="CSIT340" section="G6" />
    </div>
  )
}

export default App