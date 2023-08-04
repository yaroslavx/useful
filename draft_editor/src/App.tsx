import TextEditor from "./TextEditor";
import { TextEditorProvider } from "./TextEditor/context";
import ToolPanel from "./ToolPanel";

function App() {
    return (
        <TextEditorProvider>
            <ToolPanel />
            <TextEditor />
        </TextEditorProvider>
    )
}

export default App