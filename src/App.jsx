const Header = (props) => <h1>{props.course}</h1>

const Content = (props) => (
  <div>
    <p>{props.part1} {props.units1}</p>
    <p>{props.part2} {props.units2}</p>
    <p>{props.part3} {props.units3}</p>
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