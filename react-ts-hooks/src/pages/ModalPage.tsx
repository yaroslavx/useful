import React, { CSSProperties, useState } from 'react'
import Modal from '../components/Modal'

const BUTTON = {
    position: 'relative',
    zIndex: 1
}

const OTHER = {
    position: 'relative',
    zIndex: 2,
    backgroundColor: 'lightcoral',
    padding: '10px'
}

const ModalPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const close = () => {
        setIsOpen(false)
    }

    return (
        <>
            <div style={BUTTON as CSSProperties}>
                <button onClick={() => setIsOpen(prev => !prev)}>Open Modal</button>
                <Modal open={isOpen} onClose={close}>
                    Some fancy modal
                </Modal>
            </div>
            <div style={OTHER as CSSProperties}>
                Other Content
            </div>
        </>
    )
}

export default ModalPage