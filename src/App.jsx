// import {useTw} from './test'
// import { tw } from './tail'
import { useTail } from "./useTail"

const App = () => {
  const {style, eventHandlers} = useTail("bg-gray p-sm rounded-md hover:bg-blue hover:padding-sm hover:rounded-half")
  // const {style, eventHandlers} = useTw("bg-red hover:bg-blue")
  console.log(style)
  return (
    <div style={style} {...eventHandlers}>
      Brother, hover me
    </div>
  )
}

export default App