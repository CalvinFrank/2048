import Buttons from "../components/Buttons";
export default function Home() {
  const styles = {
    header: {
      marginLeft:"1vh",
      marginTop:"1vh"
    },
  }
  return (
    <div>
      <title>2048</title>
      <Buttons/>
    </div>
  )
}