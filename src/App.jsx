import './styles.scss'
import { useState } from 'react';
import Board from './components/Board'
import { calculateWinner } from './winner';

function App() {
    const [squares, setSquare] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(false);

    const winner = calculateWinner(squares);
    const message = isXNext ? 'Next player is X' : 'Next player is O';
    const handleSquareClick = position => {
        if (squares[position] || winner) {
            return;
        }

        setSquare(prev => {
            return prev.map((square, pos) => {
                if (pos === position) {
                    return isXNext ? 'X': 'O';
                }
                return square;
            });
        });

        setIsXNext(prev => !prev);
    };
  return (
    <div className='app'> 
      <h1>Tic Tac Toe</h1>
      {/* <h2>Next player is somebody</h2> */}
      {/* <h2>{message}</h2> */}
      {/* write next player name if not winner else winner : name */}
      <h2>{winner ? `Winner is ${winner}` : message}</h2>

      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App
