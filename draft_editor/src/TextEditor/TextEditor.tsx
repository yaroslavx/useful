import * as React from 'react';
import { Editor } from 'draft-js';
import { useEditorApi } from './context';
import './TextEditor.scss';
import { BLOCK_RENDER_MAP, CUSTOM_STYLE_MAP } from './config';

export type TextEditorProps = {
  className?: string;
};

const TextEditor: React.FC<TextEditorProps> = ({ className }) => {
  const { state, onChange } = useEditorApi();

  return (
    <div className={`text-editor ${className}`}>
      <Editor placeholder='Введите запрос'
        editorState={state}
        onChange={onChange}
        blockRenderMap={BLOCK_RENDER_MAP}
        customStyleMap={CUSTOM_STYLE_MAP}
      />
    </div>
  );
};

export default TextEditor
