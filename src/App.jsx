// import {useTw} from './test'
// import { tw } from './tail'
import { useTail } from "./useTail"

const App = () => {
  const {style, eventHandlers} = useTail("bg-gray p-1 rounded-sm hover:bg-blue hover:p-1 hover:rounded-half")
  // const {style, eventHandlers} = useTw("bg-red hover:bg-blue")
  console.log(style)
  return (
    <div style={style} {...eventHandlers}>
      Brother, hover me
    </div>
  )
}

export default App