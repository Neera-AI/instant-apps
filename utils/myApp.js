import { useState } from "react";


function Square(props) {
  const squareStyles =     {background: "#fff",
  border: "1px solid #999",
  float: "left",
  "font-size": "24px",
  "font-weight": "bold",
  "line-height": "34px",
  "height": "34px",
  "margin-right": "-1px",
  "margin-top": "-1px",
  "padding": 0,
  "text-align": "center",
  "width": "34px"}
  return (
    <button className="square" onClick={props.onClick} style={squareStyles}>
      {props.value}
    </button>
  );
}

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  function renderSquare(i) {
    return (
      <Square
        value={squares[i]}
        onClick={() => handleClick(i)}
      />
    );
  }
  const handleClick = (i) => {
    if(calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    setXIsNext(!xIsNext);
    setSquares(squares => {
      squares[i] = xIsNext ? 'X' : 'O';
      return squares
  })
  }
  const winner = calculateWinner(squares)
  let status;
  if(winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

    return (
      <div>
        <div>{status}</div>
        <div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
   
      </div>
       );
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

const MyAppComponent = (props) => {
    return <Board />
}

const shouldRunMyApp = async ({query}) => {
    const triggerQueries = ["my app", "tic tac toe"];
    for (const triggerQuery of triggerQueries) {
      if (query.toLowerCase() === triggerQuery) {
        return {query};
      }
    }
    return;
}

const MyApp = {
  name: "MyApp",
  description: "I am a template app, please change this description",
  // queryToData takes in the query and returns data which
  // the Component displays on the website.
  // If queryToData returns no data, we do not display the app.
  queryToData: shouldRunMyApp,
  Component: MyAppComponent,
};

export default MyApp;
