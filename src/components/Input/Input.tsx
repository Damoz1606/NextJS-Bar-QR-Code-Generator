import React, { ChangeEvent, useEffect, useState } from 'react'
import styles from '@/styles/Input.module.css'

type Input = {
    name?: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Input> = ({ value, onChange, placeholder }) => {

    const [currentValue, setCurrentValue] = useState<string>("");

    useEffect(() => {
        if (value) {
            setCurrentValue(value);
        }
        return () => { }
    }, [value]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCurrentValue(event.target.value);
        onChange?.(event);
    }

    return (
        <div className={styles.form_group}>
            <input
                onChange={handleChange}
                className={styles.text}
                type="text"
                placeholder={placeholder}
                value={currentValue} />
            <span className={styles.line}></span>
        </div>

    )
}

export default Input