import React, { CSSProperties } from 'react'
import ReactDOM from 'react-dom';

interface Props {
    children: string;
    open: boolean;
    onClose: () => void
}

const MODAL = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'royalblue',
    padding: '50px',
    zIndex: 3
}

const OVERLAY = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
    zIndex: 3
}

const Modal = ({ children, open, onClose }: Props) => {
    return ReactDOM.createPortal(
        <>
            {
                !open
                    ? <></>
                    : <>
                        <div style={OVERLAY as CSSProperties}></div>
                        <div style={MODAL as CSSProperties}>
                            <button onClick={onClose}>&#10005;</button>
                            {children}
                        </div>
                    </>
            }
        </>
        , document.getElementById('portal') as HTMLElement)
}

export default Modal