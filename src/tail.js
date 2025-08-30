import { config } from './config'
//parser function

const helper = (key, obj, value) => {
    switch (key) {
        case 'bg':
            obj.backgroundColor = value
            break
        case 'p':
            obj.padding = value
            break
        case 'rounded':
            obj.borderRadius = value
            break
    }
}
export const tw = classString => {
    const baseStyle = {}
    const hoverStyle = {}
    const focusStyle = {}
    const activeStyle = {}
    const classes = classString.split(" ")

    //let say i need p-[24px] or p-purple, how can i handle that
    // for custom values, checking bracket is the way to go
    classes.forEach(cls => {
        if (cls.includes('[')) {
            const [key, value] = cls.split('-')
            const changedValue = value.replace('[', '').replace(']', '')
            helper(key, baseStyle, changedValue)
            console.log(changedValue)
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