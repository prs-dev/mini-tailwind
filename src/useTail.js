import { useState } from "react"
import { tw } from "./tail"

export const useTail = (classString) => {
    const {baseStyle, hoverStyle} = tw(classString)
    const [isHover, setIsHover] = useState(false)
    let style = baseStyle
    if(hoverStyle && isHover) {
        style = {...baseStyle, ...hoverStyle}
    }
    console.log("style", style)
    return {style: style, eventHandlers: {
        onMouseEnter: () => setIsHover(true),
        onMouseLeave: () => setIsHover(false)
    }}
}