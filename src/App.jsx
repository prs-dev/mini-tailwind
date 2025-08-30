import useWindowSize from "./hooks/useWindowSize"
import { useTail } from "./useTail"

const App = () => {
  const divStyle = useTail("bg-gray hover:bg-red active:bg-green focus:bg-blue text-lg m-4 p-4 rounded-sm")
  const inputStyle = useTail("bg-red p-[24px] rounded-[20px] bg-[#12345f] focus:bg-blue")
  const testStyle = useTail('sm:bg-red md:bg-blue lg:bg-gray')

  // const {height, width} = useWindowSize()

  return (
    <div>
      <div style={divStyle.style} {...divStyle.eventHandlers}>
      Brother, hover me
    </div>
      <input style={inputStyle.style} {...inputStyle.eventHandlers} />
      {/* <div>
        <p>Window width: {width}</p>
        <p>Window height: {height}</p>
      </div> */}
      <div style={testStyle.style} {...testStyle.eventHandlers}>test me</div>
    </div>
  )
}

export default App