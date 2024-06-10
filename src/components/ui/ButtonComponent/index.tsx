import { Button } from "antd"
import { SizeType } from "antd/es/config-provider/SizeContext"

interface ButtonProps {
  title: string
  onClick: () => void
  icon: string
  className: string
  size: SizeType
}

const ButtonComponent = ({ title, onClick, icon, className, size }: ButtonProps) => {
  return (
    <Button
      onClick={onClick}
      icon={icon}
      size={size}
      className={`border border-green-600 text-green-600 ${className} `}
    >
      {title}
    </Button>
  )
}

export default ButtonComponent
