import { config } from './config'
import useWindowSize from './hooks/useWindowSize'
//parser function

const helper = (key, obj, value) => {
    // switch (key) {
    //     case 'bg':
    //         obj.backgroundColor = value
    //         break
    //     case 'p':
    //         obj.padding = value
    //         break
    //     case 'rounded':
    //         obj.borderRadius = value
    //         break
    //     case 'm':
    //         obj.margin = value
    //         break
    //     case 'text':
    //         obj.fontSize = value
    // }
    const map = {
        bg: "backgroundColor",
        p: "padding",
        rounded: "borderRadius",
        m: "margin",
        text: "fontSize"
    }
    obj[map[key]] = value
}
export const tw = classString => {
    const baseStyle = {}
    const hoverStyle = {}
    const focusStyle = {}
    const activeStyle = {}
    const classes = classString.split(" ")

    const {height, width} = useWindowSize()  

    //let say i need p-[24px] or p-purple, how can i handle that
    // for custom values, checking bracket is the way to go
    classes.forEach(cls => {
        if (cls.includes('[')) {
            const [key, value] = cls.split('-')
            const changedValue = value.replace('[', '').replace(']', '')
            helper(key, baseStyle, changedValue)
            console.log(changedValue)
        } else if (cls.startsWith("sm:") || cls.startsWith("md:") || cls.startsWith("lg:")) {
            const screenSize = cls.slice(0,2)
            const [key, prop] = cls.slice(3).split('-')
            if(screenSize === "sm" && width < 600) helper(key, baseStyle, config[key][prop])
            if(screenSize === "md" && width >= 768) helper(key, baseStyle, config[key][prop])
            if(screenSize === "lg" && width >= 1200) helper(key, baseStyle, config[key][prop])
            console.log("test", key, prop, screenSize, width)
        } else if (cls.startsWith('focus:')) {
            const [key, prop] = cls.slice(6).split('-')
            // console.log(key, prop)
            helper(key, focusStyle, config[key][prop])
        } else if (cls.startsWith('active:')) {
            const [key, prop] = cls.slice(7).split("-")
            helper(key, activeStyle, config[key][prop])
            // console.log("active", activeStyle)
        } else if (cls.startsWith('hover:')) {
            const main = cls.slice(6)
            const [key, prop] = main.split('-')
            helper(key, hoverStyle, config[key][prop])
            // console.log("main", main, hoverStyle)
        } else {
            let [actual, target] = cls.split("-")
            helper(actual, baseStyle, config[actual][target])
        }

    })
    return {
        baseStyle,
        hoverStyle,
        activeStyle,
        focusStyle
    }
}