import * as React from 'react'
// import './ToolPanel.scss'
import { InlineStyle } from '../TextEditor/config'
import { useEditorApi } from '../TextEditor/context'

const INLINE_STYLES_CODES = Object.values(InlineStyle)

interface ToolPanelProps {
    className?: string
}

const ToolPanel: React.FC<ToolPanelProps> = ({ className }) => {
    const { toggleInlineStyle, hasInlineStyle } = useEditorApi()

    return (
        <div className={`tool-panel ${className}`}>
            {INLINE_STYLES_CODES.map((code) => {
                const onMouseDown = (e: any) => {
                    e.preventDefault()
                    toggleInlineStyle(code)
                }

                return (
                    <button key={code}
                        className={`tool-panel__item ${hasInlineStyle(code) && 'tool-panel__item_active'}`}
                        onMouseDown={onMouseDown}
                    >
                        {code}
                    </button>
                )
            })}
        </div>
    )
}

export default ToolPanel