import { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./play.module.css";

export default function Play() {
  const router = useRouter();
  const size = router.query.size;
  const mode = router.query.mode
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
  }, [size]);

  const randomCell = Math.round(Math.random() * size * size) -1
  const cells = []
  for(let i = 0; i < size * size; i++) {
    if (i === randomCell) {
      
      cells.push(<div className={styles.rCell} style={cellsStyles} key={randomCell}><p className={styles.text}>2</p></div>)
    } else {
      cells.push(<div className={styles.cells} style={cellsStyles} key={i}><p className={styles.text}>2</p></div>)
    }
  }
  return (
    <div className={styles.center}>
      <div className={styles.board}>
        {...cells}
      </div>
    </div>
  )
}

//this fuction keeps the useEffect() from redirecting the page when reloaded
export async function getServerSideProps(context) {
  return {
    props: {}, 
  }
}