import { TextEditorProvider } from "./context";

function App() {
    return <TextEditorProvider>
        <ToolPanel />
        <TextEditor />
    </TextEditorProvider>
}