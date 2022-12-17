import React, { ReactElement, ReactNode, useState } from "react"

// Convetional Props
export function Heading({ title }: { title: string }) {
    return <h1>{title}</h1>
}

export function HeadingWithChildren({ children }: { children: ReactNode }): ReactElement | null {
    return <h1>{children}</h1>
}

// Default Props
const defaultContainerProps = {
    heading: <strong>Containen Heading</strong>
}

type ContainerProps = {
    children: ReactNode
} & typeof defaultContainerProps

export function Container({ heading, children }: ContainerProps): ReactElement | null {
    return <div>
        <h1>{heading}</h1>
        {children}
    </div>
}

Container.defaultProps = defaultContainerProps

// Function props 
export function TextWithNumber({ children, header }: {
    children: (num: number) => ReactNode
    header?: (str: string) => ReactNode
}) {
    const [state, setState] = useState(1)
    const [str, setStr] = useState('')
    return (
        <div>
            {header?.(str)}
            <div>
                <input type="text" value={str} onChange={e => setStr(e.target.value)} />
            </div>
            {children(state)}
            <div>
                <button onClick={() => setState(prev => prev + 1)}>Add item</button>
            </div>
        </div>
    )
}

// List 
export function List<ListItem>({
    items,
    renderer
}: {
    items: ListItem[]
    renderer: (item: ListItem) => ReactNode
}) {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    {renderer(item)}
                </li>
            ))}
        </ul>
    )
}

// Class component
export class ClassHeading extends React.Component<{
    heading: ReactNode
}> {
    render() {
        return (
            <h1>{this.props.heading}</h1>
        )
    }
}