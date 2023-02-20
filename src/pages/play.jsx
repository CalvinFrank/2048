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
    console.log("In the useEffect(): size: " + size);
    if(size != 4 && size !=5 && size !=6) {
      router.push({pathname:"/modeChoice"})
    }
    if (mode != "easy" && mode != "normal" && mode != "hard") {
      router.push({pathname:"/modeChoice"})
    }
  }, [size]);

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

//this fuction keeps the useEffect() from redirecting the page when reloaded
export async function getServerSideProps(context) {
  return {
    props: {}, 
  }
}