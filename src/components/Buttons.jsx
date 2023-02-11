import { useRouter } from "next/router"
function Buttons() {
  const router = useRouter()
  const styles = {
    button: {
      backgroundColor:"rgb(255, 217, 0)",
      color:"white",
      fontSize:"55px",
      width:"70vw",
      height:"20vh",
      alignSelf:"center",
      marginLeft:"15vw",
      marginTop:"4vh",
      marginBottom:"5vh",
      boxShadow:"5px 5px 10px 2px rgba(0,0,0,.8)"
    }
  } 
  function butto(mode) {
    //const router = useRouter()
    router.push("/grid")
    let gamemode = mode
    return gamemode
  }
  const dry =(styles.button)
  return (
    <div>
      <button style={dry} onClick={() => butto("easy")}>Easy</button>
      <button style={dry} onClick={() => butto("normal")}>Normal</button>
      <button style={dry} onClick={() => butto("hard")}>Hard</button>
    </div>
  )
}
export default Buttons