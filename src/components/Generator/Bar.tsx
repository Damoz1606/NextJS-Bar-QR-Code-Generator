import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import { Card, CardBody, CardHeader } from '../Card'
import Input from '../Input/Input'
import styles from '@/styles/Generator.module.css';
import Barcode from 'react-barcode';

const Bar: React.FC = () => {

    const [barCodeValue, setBarCodeValue] = useState("");
    const [value, setValue] = useState("");

    const boxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setBarCodeValue("");
        if (boxRef.current)
            boxRef.current.classList.remove(styles.active);
        return () => { }
    }, [])

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setBarCodeValue(value);
        if (boxRef.current)
            boxRef.current.classList.add(styles.active);
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }


    return (
        <Card>
            <CardHeader>Bar Code</CardHeader>
            <CardBody>
                <form onSubmit={handleSubmit}>
                    <Input placeholder="Enter text or URL" onChange={handleChange} />
                    <div>
                        <button type='submit'>Generar</button>
                    </div>
                </form>

                <div ref={boxRef} className={`${styles.code_box}`}>
                    <Barcode value={barCodeValue} />
                </div>
            </CardBody>
        </Card>
    )
}

export { Bar }