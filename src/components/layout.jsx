import Link from "next/link"
import styles from "./layout.module.css"

export default function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.Link}>Home</Link>
        <Link href="/about" className={styles.Link}>About</Link>
      </header>
      {children}
    </>
  )
}