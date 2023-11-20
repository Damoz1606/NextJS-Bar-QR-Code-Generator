import React, { CSSProperties, ReactNode, useRef, useState } from 'react'
import styles from '@/styles/Tabs.module.css'
import { Tab } from '@/types';
import { TabLink } from '.';

type TabsProps = {
    tabs: Tab[];
    index: number;
    setIndex: (value: number) => void;
    rootTarget?: string;
    onClick?: (value: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, index, rootTarget, onClick, setIndex }) => {

    const [gliderStyle, setGliderStyle] = useState<CSSProperties>({});

    const handleLinkClick = (index: number) => {
        setIndex(index);
        onClick?.(tabs[index].target);

        setGliderStyle({
            transform: `translate(${100 * index}%, -50%)`
        })
    }

    return (
        <div className={styles.tabs}>
            {
                tabs.map((e, i) => (
                    <TabLink
                        key={`tab_${i}`}
                        onClick={() => handleLinkClick(i)}
                        selected={index === i}
                        {...e} />
                ))
            }
            <span
                style={gliderStyle}
                className={styles.glider}
            ></span>
        </div>
    )
}

export { Tabs }