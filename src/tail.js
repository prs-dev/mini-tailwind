import {config} from './config'
//parser function
export const tw = classString => {
    const baseStyle = {}
    const hoverStyle = {}
    const classes = classString.split(" ")
    classes.forEach(cls => {
        let [actual, target] = cls.split("-")
        if(cls.startsWith('hover:')) {
            const main = cls.slice(6)
            const [key, prop] = main.split('-')
            if(key === 'bg') hoverStyle.backgroundColor = config[key][prop]
            if(key === 'p') hoverStyle.padding = config[key][prop]
            else hoverStyle[key] = config[key][prop]
            console.log("main", main, hoverStyle)
        }
        if(cls.startsWith('bg-')) {
            baseStyle.backgroundColor = config[actual][target]
        }
        if(cls.startsWith('p-')) {
            baseStyle.padding = config['p'][target]
        }
        if(cls.startsWith('rounded-')) {
            baseStyle.borderRadius = config['rounded'][target]
        }
    })
    return {
        baseStyle,
        hoverStyle
    }
}