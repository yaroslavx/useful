import * as React from 'react'
import './ToolPanel.scss'
import { InlineStyle } from '../TextEditor/config'
import { useEditorApi } from '../TextEditor/context'

const INLINE_STYLES_CODES = Object.values(InlineStyle)

interface ToolPanelProps {
    className: string
}

const ToolPanel: React.FC<ToolPanelProps> = ({ className }) => {
    const { toggleInlineStyle, hasInlineStyle } = useEditorApi()

    return (
        <div className={`tool-panel ${className}`}>
            {/*  */}
        </div>
    )
}

export default ToolPanel