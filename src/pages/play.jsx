import { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./play.module.css";

export default function Play() {
  const router = useRouter();
  const size = router.query.size;
  const mode = router.query.mode
  console.log(size)
  const cellsStyles = {
    width:`calc(100% * (1/${size}) - 20px)`,
    height:`calc(100% * (1/${size}) - 20px)`,
  }
  useEffect(() => {
    if(size != 4 && size !=5 && size !=6) {
      router.push({pathname:"/modeChoice"})
    }
    if (mode != "easy" && mode != "normal" && mode != "hard") {
      router.push({pathname:"/modeChoice"})
    }
  })
  const cells = []
  for(let i = 0; i<size*size; i++) {
    cells.push(<div className={styles.cells} style={cellsStyles} key={i}></div>)
  }
  return (
    <div>
      <div className={styles.board}>
        {...cells}
      </div>
    </div>
  )
}