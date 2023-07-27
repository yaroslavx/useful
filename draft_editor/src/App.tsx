import { TextEditorProvider } from "./TextEditor/context";

function App() {
    return <TextEditorProvider>
        <ToolPanel />
        <TextEditor />
    </TextEditorProvider>
}

export default App