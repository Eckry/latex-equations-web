import './App.css'
import { buttons, colors } from "./consts"
import Button from './components/Button'
import Color from './components/Color'

function App() {
  return (
    <div className="main-container">
      <header>
        <h1>Important!</h1>
        <p className="important-text">Please read this instructions to properly use the extension.</p>
      </header>
      <h2>How to use</h2>
      <section>
        <h3>Buttons</h3>
        <p>Here's a list about what every button at the bottom of the window's extension does:</p>
        <ul>
          {buttons.map(({ text, Icon }) => {
            return <Button key={text} text={text} Icon={Icon} />
          })}
        </ul>
      </section>
      <section>
        <h3>Colors</h3>
        <p>When you open the window's extension, you'll see at the bottom four different colors, like this:</p>
        <div className="buttons-container">
          {colors.map((color, idx) => {
            return <Color color={color} number={idx} />
          })}
        </div>
      </section>
    </div>
  )
}

export default App
