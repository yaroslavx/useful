import * as React from "react";
import { EditorApi, useEditor } from "./useEditor";

const TextEditorContext = React.createContext<EditorApi | undefined>(undefined);

type TextEditorProviderProps = {
    children: React.ReactNode
}

export const TextEditorProvider: React.FC<TextEditorProviderProps> = ({ children }) => {
    const editorApi = useEditor();

    return (
        <TextEditorContext.Provider value={editorApi}>
            {children}
        </TextEditorContext.Provider>
    );
};

export const useEditorApi = () => {
    const context = React.useContext(TextEditorContext);
    if (context === undefined) {
        throw new Error("useEditorApi must be used within TextEditorProvider");
    }

    return context;
};
