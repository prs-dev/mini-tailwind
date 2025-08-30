// import {useTw} from './test'
// import { tw } from './tail'
import { useTail } from "./useTail"

const App = () => {
  const divStyle = useTail("bg-gray hover:bg-red active:bg-green focus:bg-blue p-4 rounded-sm")
  const inputStyle = useTail("bg-red p-[24px] rounded-[20px] bg-[#12345f] focus:bg-blue")
  // const {style, eventHandlers} = useTw("bg-red hover:bg-blue")
  // console.log(style)
  return (
    <div>
      <div style={divStyle.style} {...divStyle.eventHandlers}>
      Brother, hover me
    </div>
      <input style={inputStyle.style} {...inputStyle.eventHandlers} />
    </div>
  )
}

export default App