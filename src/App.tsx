import './App.css'
import { IconClose, IconCopyText, IconEraseText, IconScreenshot, IconTransparency } from './icons'

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
          <li>
            <div className="icon">
              <IconClose />
            </div>
            <span>Closes the window.</span>
          </li>
          <li>
            <div className="icon">
              <IconEraseText />
            </div>
            <span>Erases the text of the input at the top.</span>
          </li>
          <li>
            <div className="icon">
              <IconCopyText />
            </div>
            <span>Copies the text of the input at the top.</span>
          </li>
          <li>
            <div className="icon">
              <IconScreenshot />
            </div>
            <span>Takes a screenshot of the equation to the clipboard.</span>
          </li>
          <li>
            <div className="icon">
              <IconTransparency />
            </div>
            <span>Toggles the window's transparency.</span>
          </li>
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
