import './styles.scss'
import { useState } from 'react';
import Board from './components/Board'
import StatusMessage from './components/StatusMessage';
import History from './components/History';
import { calculateWinner } from './winner';


const NEWGAME = [{ squares: Array(9).fill(null), isXNext: false }]
function App() {
  {/* how to make game restart*/ }
  
  const [history, setHistory] = useState(NEWGAME);
  const [currentMove, setCurrentMove] = useState(0);

  const gamingBoard = history[currentMove];
  const winner = calculateWinner(gamingBoard.squares);
    
  console.log({ history, currentMove });
    const handleSquareClick = position => {
        if (gamingBoard.squares[position] || winner) {
            return;
        }

      setHistory(prev => {
        const isTraversing = prev.length - 1 !== currentMove;

          const last = isTraversing ? prev[currentMove] :prev[prev.length - 1];
          const nextSquareState = last.squares.map(
            (square, pos) => {
                if (pos === position) {
                    return last.isXNext ? 'X': 'O';
                }
                return square;
            });
        
        const base = isTraversing ? prev.slice(0, currentMove + 1) : prev;
        
          return base.concat({
            squares: nextSquareState,
            isXNext: !last.isXNext
          });
        });

        setCurrentMove(prev => prev + 1);
  };
  
  const moveTo = (move) => {
    setCurrentMove(move);
  }

  const onNewGameStart = () => {
    setHistory(NEWGAME);
    setCurrentMove(0);
  }
  return (
    <div className='app'> 
      <h1>Tic Tac Toe</h1>
      
      {/* <h2>{winner ? `Winner is ${winner}` : message}</h2> */}
      <StatusMessage winner={winner} gamingBoard={gamingBoard} />
      <Board
        squares={gamingBoard.squares}
        handleSquareClick={handleSquareClick}
      />

      <button type="button" className={`btn-reset ${winner? 'active' :''}`} onClick={onNewGameStart}>start new game</button>
      <h2>current game history</h2>
      <History history={history} moveTo={moveTo } currentMove={currentMove} />
    </div>
  );
}

export default App;
