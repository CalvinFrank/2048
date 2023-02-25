import { useRouter } from "next/router"
import styles from "./gridChoice.module.css"

function GridChoice() {
  const router = useRouter()
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
      <button className={dry} onClick={() => butto("4")}>4x4</button>
      <button className={dry} onClick={() => butto("5")}>5x5</button>
      <button className={dry} onClick={() => butto("6")}>6x6</button>
    </div>
  )
}
export default GridChoice