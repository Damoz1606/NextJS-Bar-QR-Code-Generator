import React from 'react'
import styles from '@/styles/Tabs.module.css'

export type TabLinkProps = {
    label: string;
    target: string;
    selected?: boolean;
    rootTarget?: string;
    onClick?: (value: string) => void;
}


const TabLink: React.FC<TabLinkProps> = ({ label, target, selected, rootTarget = "tab-", onClick }) => {

    return (
        <>
            <button onClick={() => onClick?.(`${rootTarget}${target}`)} className={`${styles.tab_link} ${selected ? styles.active : ""}`}>
                {label}
            </button>
        </>
    )
}

export { TabLink }