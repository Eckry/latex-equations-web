import "./styles/Button.css"

interface Props {
  Icon: React.ComponentType
  text: string
}

export default function Button({ Icon, text }: Props) {
  return <li>
    <div className="icon">
      <Icon />
    </div>
    <span>{text}</span>
  </li>
}
