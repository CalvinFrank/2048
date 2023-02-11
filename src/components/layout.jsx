import Link from "next/link"

export default function Layout({ children }) {
  const styles = {
    Link: {
      color:"darkgrey",
      fontSize:"14px",
      marginRight:"1vh",
      textDecoration:"none",
    },
    header: {
      marginLeft:"1vh",
      marginTop:"1vh"
    },
  }
  return (
    <>
      <header style={styles.header}>
        <Link href="/" style={styles.Link}>Home</Link>
        <Link href="/about" style={styles.Link}>About</Link>
      </header>
      {children}
    </>
  )
}