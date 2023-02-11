export default function About() {
  const styles = {
    header: {
      marginLeft:"1vh",
      marginTop:"1vh"
    },
  }
  return (
    <>
      <h2>How To Play</h2> 
      <p>
        First, select your gamemode.(Easy,Normal,Hard I suggest Normal) <br/>
        Next, select your grid size.(4x4,5x5,6x6 I suggest 6x6) <br />
        For this next step, you will see 2 2s.  You will either hit the down, left or right arrow key.(depending on where the 2s are.) <br/>
        When 2s combine they make a 4.  When 4s combine they make an 8.  This keeps repeating until 2048, that is when you win.
      </p>
    </>
  )
}