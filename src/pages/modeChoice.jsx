import { useRouter } from "next/router"
import styles from "./modeChoice.module.css"

export default function ModeChoice() {
  const router = useRouter()
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
      <button className={dry} onClick={() => butto("easy")}>Easy</button>
      <button className={dry} onClick={() => butto("normal")}>Normal</button>
      <button className={dry} onClick={() => butto("hard")}>Hard</button>
    </div>
  )
}