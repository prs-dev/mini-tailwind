import { useState } from "react"
import { tw } from "./tail"

export const useTail = (classString) => {
    const {baseStyle, hoverStyle} = tw(classString)
    const [isHover, setIsHover] = useState(false)
    let style = {}
    if(hoverStyle && isHover) {
        // console.log("i am here", style)
        style = {...baseStyle, ...hoverStyle}
    }
    console.log("style", style)
    return {style: style, eventHandlers: {
        onMouseEnter: () => setIsHover(true),
        onMouseLeave: () => setIsHover(false)
    }}
}