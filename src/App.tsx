import './App.css'
import { buttons } from "./consts"
import Button from './components/Button'

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
        <div>
          <div>
            <span></span>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    </div>
  )
}

export default App
