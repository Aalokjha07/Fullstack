const Header = (props) => {
  console.log(props);
  return (
    <>
      <h1>{props.coursename}</h1>
    </>
  );
};

const Content = (props) => {
  console.log(props);
  return (
    <>
      <p>
        part : {props.parts} no.ofexcersise : {props.exercises}
      </p>
    </>
  );
};

const Total = (props) => {
  console.log(props);
  return (
    <>
      <p>
        Number of exercises{" "}
        {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </>
  );
};
const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <>
      <Header coursename="Full Stack web development" />
      <Content parts={part1} excersises={exercises1} />
      <Content parts={part2} excersises={exercises2} />
      <Content parts={part3} excersises={exercises3} />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </>
  );
};

export default App;
