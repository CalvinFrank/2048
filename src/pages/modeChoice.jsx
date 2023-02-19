import { useRouter } from "next/router"
export default function ModeChoice() {
  const router = useRouter()
  const styles = {
    button: {
      backgroundColor:"rgb(255, 217, 0)",
      color:"white",
      fontSize:"55px",
      width:"70vw",
      height:"23vh",
      alignSelf:"center",
      marginLeft:"15vw",
      marginTop:"4vh",
      marginBottom:"5vh",
      boxShadow:"5px 5px 10px 2px rgba(0,0,0,.8)"
    } 
  }
  function butto(mode) {
    router.push({
      pathname:"/gridChoice",
      query: {mode}
    })
    return mode
  }
  const dry =(styles.button)
  return (
    <div>
      <title>2048</title>
      <button style={dry} onClick={() => butto("easy")}>Easy</button>
      <button style={dry} onClick={() => butto("normal")}>Normal</button>
      <button style={dry} onClick={() => butto("hard")}>Hard</button>
    </div>
  )
}