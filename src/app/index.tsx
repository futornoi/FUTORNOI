import clsx from "clsx"
import { useState } from "react"
import classes from "./app.module.scss"

function App() {
  const [active, setActive] = useState(0)

  return (
    <div
      onClick={() => setActive(prev => prev + 1)}
      className={clsx(classes.app, {
        [classes.active]: active % 2 === 0,
      })}
    >
      Hello
    </div>
  )
}

export default App
