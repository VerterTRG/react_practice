const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Content = (props) => {

    return props.container.map((pos, i) =>
        <p key={i}>{Object.values(pos).join(' ')}</p>)
    // const data = props.container;
    // return (
    //   <div>
    //     <p>
    //       {data.part1} {data.exercaises1}
    //     </p>
    //     <p>
    //       {data.part2} {data.exercaises2}
    //     </p>
    //     <p>
    //       {data.part3} {data.exercaises3}
    //     </p>
    //   </div>
    // )

}

const Total = (props) => {
    return (
        <p>Number of exercaises {props.total}</p>
    )
}

const App = () => {

    const course = 'Half Stack application development';
    const part1 = 'Fundamentals of React'
    const exercaises1 = 10;
    const part2 = 'Using props to pass data'
    const exercaises2 = 7;
    const part3 = 'State of a component'
    const exercaises3 = 14;

    let container = [];
    container.push({ part1, exercaises1 });
    container.push({ part2, exercaises2 });
    container.push({ part3, exercaises3 });

    return (
        <div>
            <Header course={course} />
            <Content container={container} />
            {/* <Content container={{ part1, part2, part3, exercaises1, exercaises2, exercaises3 }} /> */}
            <Total total={exercaises1 + exercaises2 + exercaises3} />
        </div>
    )
}

export default App;


import React from "react";


const Hello = (props) => {
  console.log(props)

  const now = new Date();

  let res = []
  res.push()

  for (let i = 0; i < 5; i++) {
    res.push(
      <div key={i}>
        <p>Hello world! <b>{props.name[i]}</b> It's {now.toString()}</p>
      </div>
    )
  }

  return res
}

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  
   return props.container.map((pos, i) =>
    <p key={i}>{Object.values(pos).join(' ')}</p>)
  // return (
  //   <div>
  //     <p>
  //       {data.part1} {data.exercaises1}
  //     </p>
  //     <p>
  //       {data.part2} {data.exercaises2}
  //     </p>
  //     <p>
  //       {data.part3} {data.exercaises3}
  //     </p>
  //   </div>
  // )
}

const Total = (props) => {
  return (
    <p>Number of exercaises {props.total}</p>
  )
}

const App = () => {

  // console.log('Hello React');

  // const arr = ['Alex', 'Peter', 'John', 'Mike', 'Nikola']
  // return (
  //   <div>
  //     <h1>Greeatings!</h1>
  //     <Hello name={arr} />
  //   </div>
  // );
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React'
  const exercaises1 = 10;
  const part2 = 'Using props to pass data'
  const exercaises2 = 7;
  const part3 = 'State of a component'
  const exercaises3 = 14;

  let container = [];
  container.push({part1, exercaises1});
  container.push({part2, exercaises2});
  container.push({part3, exercaises3});

  return (
    <div>
      <Header course={course} />
      <Content container={container} />
      {/* <Content container={{ part1, part2, part3, exercaises1, exercaises2, exercaises3 }} /> */}
      <Total total={exercaises1 + exercaises2 + exercaises3} />
    </div>
  )
}

export default App;
