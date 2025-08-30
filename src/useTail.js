import { useState } from "react"
import { tw } from "./tail"

export const useTail = (classString) => {
    const {baseStyle, hoverStyle, activeStyle, focusStyle} = tw(classString)
    const [isHover, setIsHover] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const [isFocused, setIsFocused] = useState(false)
    let style = baseStyle
    if(hoverStyle && isHover) {
        style = {...style, ...hoverStyle}
    }
    if(isFocused && focusStyle) {
        style = {...style , ...focusStyle}
    }
    if(isActive && activeStyle) {
        style = {...style , ...activeStyle}
    }
    // console.log("base", baseStyle)
    // console.log("hover", hoverStyle)
    console.log("focus", baseStyle)
    return {style: style, eventHandlers: {
        onMouseEnter: () => setIsHover(true),
        onMouseLeave: () => setIsHover(false),
        onMouseDown: () => setIsActive(true),
        onMouseUp: () => setIsActive(false),
        onFocus: () => setIsFocused(true),
        onBlur: () => setIsFocused(false)
    }}
}