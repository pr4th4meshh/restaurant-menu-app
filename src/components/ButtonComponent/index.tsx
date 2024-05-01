import { Button } from "antd"
import React from "react"

const ButtonComponent = ({ title, onClick, icon, className, size }: any) => {
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
