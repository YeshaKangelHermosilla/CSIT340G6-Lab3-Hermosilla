const Header = (props) => <h1>{props.course}</h1>

const Part = (props) => <p>{props.part.name} {props.part.units}</p>

const Content = (props) => (
  <div>
    <Part part={props.parts[0]} />
    <Part part={props.parts[1]} />
    <Part part={props.parts[2]} />
  </div>
)

const Total = (props) => (
  <p>
    Number of units {props.parts[0].units + props.parts[1].units + props.parts[2].units}
  </p>
)

const Footer = (props) => (
  <footer>{props.fullName} - {props.courseCode} - {props.section}</footer>
)

const App = () => {
  const course = 'Industry Electives 1'
  const parts = [
    { name: 'Information Management 2', units: 3 },
    { name: 'Networking 2', units: 3 },
    { name: 'Data Analytics 1', units: 3 },
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      <Footer fullName="Yesha Kangel O. Hermosilla" courseCode="CSIT340" section="G6" />
    </div>
  )
}

export default App