import './App.css'
import { IconClose, IconCopyText, IconEraseText, IconScreenshot, IconTransparency } from './icons'

function App() {
  return (
    <div className="tooltipLATEX">
      <h1>How to use</h1>
      <ul>
        <li>
          <div>
            <IconClose />
          </div>
          <span>Closes the window.</span>
        </li>
        <li>
          <div>
            <IconEraseText />
          </div>
          <span>Erases the text of the input at the top.</span>
        </li>
        <li>
          <div>
            <IconCopyText />
          </div>
          <span>Copies the text of the input at the top.</span>
        </li>
        <li>
          <div>
            <IconScreenshot />
          </div>
          <span>Takes a screenshot of the equation to the clipboard.</span>
        </li>
        <li>
          <div>
            <IconTransparency />
          </div>
          <span>Toggles the window's transparency.</span>
        </li>
      </ul>
    </div>
  )
}

export default App
