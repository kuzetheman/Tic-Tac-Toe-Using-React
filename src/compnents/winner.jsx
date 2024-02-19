import Square from './square'


const WinnerModal = ({winner,resetgame})=>{
    if(winner === null) return null

    return(
        <section className='winner'>
        <div className='text'>
          <h2>The winner is {winner}</h2>
  
          <header className='win'>
            {winner && <Square>{winner}</Square>}
          </header>
  
          <footer>
            <button onClick={resetgame}>Start Again</button>
          </footer>
        </div>
      </section>
    )

}

export default WinnerModal