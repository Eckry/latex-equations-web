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
        <p>I gave them a number starting from one from left to right, in that order, the functionality of the colors is the following:</p>
        <ol>
          <li><span className="number-highlighted">1</span>Changes the color of the equation rendered.</li>
          <li><span className="number-highlighted">2</span>Changes the background color of the window.</li>
          <li><span className="number-highlighted">3</span>Changes the color of the first highlight color.</li>
          <li><span className="number-highlighted">4</span>Changes the color of the second highlight color.</li>
        </ol>
      </section>
    </div>
  )
}

export default App
