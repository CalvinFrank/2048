import Link from "next/link"
export default function Home() {
  return (
    <div>
      <h1>Welcome to 2048!</h1>
      <p>To get set up to play click this:</p>
      <Link href="/modeChoice">setup</Link>
    </div>
  )
}