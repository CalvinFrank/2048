function Buttons() {
  const styles = {
    button: {
      backgroundColor:"rgb(255, 217, 0)",
      color:"white",
      fontSize:"55px",
      width:"70vw",
      height:"20vh",
      alignSelf:"center",
      marginLeft:"15vw",
      marginTop:"2.5vh",
      marginBottom:"5vh",
      boxShadow:"5px 5px 10px 2px rgba(0,0,0,.8)"
    }
  } 

  const dry =(styles.button)
  return (
    <div>
      <button style={dry}>Easy</button>
      <button style={dry}>Normal</button>
      <button style={dry}>Hard</button>
    </div>
  )
}
export default Buttons