
import ProblemV0 from "./Problem"
import EditorV0 from "./EditorV0"

export default function Probem_Editor() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[minmax(300px,_1fr)_minmax(400px,_1fr)] h-screen w-full">
    <ProblemV0/>
    <EditorV0 />
    </div>
  )
}
