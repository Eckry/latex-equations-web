import "./styles/Color.css"

interface Props {
  color: string
  number: number
}

export default function Color({ color, number }: Props) {
  return <div className="color-container">
    <input className="input-color" type="color" value={color} />
    <p>{number + 1}</p>
  </div>
}
