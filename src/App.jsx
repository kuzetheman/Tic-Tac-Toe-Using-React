/* eslint-disable react/prop-types */
import { useState } from 'react'
import Square from './compnents/square'
import WinnerModal from './compnents/winner'
import './App.css'

function App() {
  
  const [board,setboard] = useState(Array(9).fill(null))
  const [winner, setwinner] = useState(null);
  const TURNS = {
    X: 'X',
    O: 'O'
  }
  const [turn, setTurn] = useState(TURNS.X)

  const winConditions = [
    
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
  ]

  const resetGame =()=> {
    setwinner(null)
    setboard(Array(9).fill(null))
    setTurn(TURNS.X)
  }

  const checkWinner = (board) =>{
    for(const com of winConditions){
      const [a,b,c] = com
      if(board[a] && board[a] === board[b] && board[a] === board[c]){
        return board[a]
      }
    }
    return null
  }
  const updateBoard = (index) =>{
    setTurn(turn === TURNS.X ? TURNS.O : TURNS.X)

    if( board[index] ){
      setTurn(turn)
      return
    }
    
    const newBoard = [...board]
    newBoard[index] = turn
  
    setboard(newBoard)

    const newWinner = checkWinner(newBoard)
    setwinner(newWinner)

  }
  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square index={index} key={index} updateBoard={updateBoard}>{board[index]}</Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
        
      </section>
      <WinnerModal resetgame={resetGame} winner={winner}/>
    </main>
  )

}

export default App
