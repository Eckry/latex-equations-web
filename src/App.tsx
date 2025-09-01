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
          <li>
            <div className="fontsize-container">
              <button className="fontsize-up">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l14 0" />
                </svg>
              </button>
              <input value={120} className="fontsize-icon" />
              <button className="fontsize-down">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 5l0 14" />
                  <path d="M5 12l14 0" />
                </svg>
              </button>
            </div>
            <p>Changes the font-size of the equation rendered.</p>
          </li>
        </ul>
      </section>
      <section>
        <h3>Left and Right click</h3>
        <p>You can click on the equation rendered to highlight a specific part of the equation, there are two different colors you can use, and you can customize them, the first color works with the left click and the second color with the right click. In the following example the user clicked the x with the left click and the y with right click.</p>
        <figure className="equation-img-container">
          <img className="equation-img" src="equation.webp" />
        </figure>
        <p><span className="note">Important</span>: This function is experimental and it might behave weirdly.</p>
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
      <section>
        <h3>Grabbing and Resizing modes</h3>
        <p>
          You can switch between modes using the keyboard:
          <ul>
            <li><b>Ctrl</b> → Toggle <i>Grabbing Mode</i></li>
            <li><b>Shift</b> → Toggle <i>Resizing Mode</i></li>
          </ul>
          Pressing the same key again will return you to Normal Mode.
        </p>
        <h4>Resizing Mode</h4>
        <p>
          Click and hold the window, then move the mouse to resize it. The window grows or shrinks
          towards the bottom-right corner.
        </p>

        <h4>Grabbing Mode</h4>
        <p>
          Click and drag the window to move it around the screen. The window will stay within
          the boundaries of the main window.
        </p>
        <p><span className="note">Important</span>: You can’t jump directly from <i>Grabbing</i> to <i>Resizing</i> mode (or the other way around). First go back to <i>Normal</i> mode, then switch to the mode you want.</p>
      </section>
    </div>
  )
}

export default App
