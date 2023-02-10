import Link from "next/link";
import { useRouter } from "next/router";
import Buttons from "./components/Buttons";

export default function Home() {
  const router = useRouter()
  const styles = {
    header: {
      marginLeft:"1vh",
    },
    Link: {
      color:"darkgrey",
      fontSize:"14px",
      marginRight:"1vh",
      textDecoration:"none"
    }
  }
  return (
    <div>
      <title>2048</title>
      <header style={styles.header}>
        {/* <h4 onClick={() => {}}>Home</h4> */}
        <Link href="/" style={styles.Link}>Home</Link>
        <Link href="/test" style={styles.Link}>Test</Link>
      </header>
      <Buttons/>
    </div>
  )
}