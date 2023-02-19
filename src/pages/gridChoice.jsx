import { useRouter } from "next/router"
function GridChoice() {
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
  function butto(size) {
    router.push({
      pathname: `/play/`,
      query: {...router.query, size}
    })
    return size
  }
  const dry =(styles.button)
  return (
    <div>
      <button style={dry} onClick={() => butto("4")}>4x4</button>
      <button style={dry} onClick={() => butto("5")}>5x5</button>
      <button style={dry} onClick={() => butto("6")}>6x6</button>
    </div>
  )
}
export default GridChoice