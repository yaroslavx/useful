import { FC, InputHTMLAttributes, ReactNode, useLayoutEffect, useRef, useState } from "react";
import styles from './suffixInput.module.scss'
import clsx from "clsx";

export type InputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>, 'style'> & {
        suffix?: ReactNode
    }

const inputPadding = 20 as const
const suffixGap = 10 as const

export const SuffixInput: FC<InputProps> = ({
    value, placeholder, className, suffix, ...props
}) => {
    const suffixRef = useRef<HTMLSpanElement>(null)

    const [inputRightPadding, setInputRightPadding] = useState<number>(0)

    useLayoutEffect(() => {
        const suffixWidth = suffixRef.current?.offsetWidth
        setInputRightPadding(
            suffix && suffixWidth
                ? suffixWidth + (inputPadding + suffixGap)
                : inputPadding,
        )
    }, [suffix])

    return <div className={styles.inputWrapper}>
        <input
            className={clsx(styles.input, className)}
            value={value}
            placeholder={placeholder}
            style={{
                padding: inputPadding,
                paddingRight: inputRightPadding,
            }}
            {...props}
        />
        <div className={styles.inputFakeValueWrapper} style={{ gap: suffixGap, padding: inputPadding }}>
            <span className={styles.inputFakeValue}>{value || placeholder}</span>
            <span ref={suffixRef} className={styles.suffix}>{suffix}</span>
        </div>
    </div>
}

