import React, { useEffect, useState } from 'react'

type Props = {}

const UseEffectComponent = () => {
    const [value, setValue] = useState(1)
    useEffect(() => {
        const intervalId = window.setInterval(() => setValue(prev => prev + 1), 1000)
        return () => window.clearInterval(intervalId)
    }, [])

    return (
        <>
            <div>{value}</div>
        </>
    )
}

export default UseEffectComponent