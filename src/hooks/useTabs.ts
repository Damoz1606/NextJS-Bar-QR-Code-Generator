import { Tab } from "@/types";
import { ReactNode, useState } from "react";

type useTabsProps = {
    tabs: Tab[];
    initial?: string;
    onClick?: (value: string) => void;
}

export const useTabs = ({ tabs, initial, onClick }: useTabsProps): {
    pane: ReactNode,
    props: {
        tabs: Tab[];
        index: number;
        setIndex: (value: number) => void;
        onClick?: (value: string) => void;
    }
} => {
    const [index, setIndex] = useState<number>(() => {
        let index = 0;
        if (initial) {
            const initialTab = tabs.findIndex(e => e.target === initial);
            index = initialTab === -1 ? 0 : initialTab;
        }
        return index;
    });

    return {
        pane: tabs[index].child,
        props: {
            tabs,
            index,
            setIndex,
            onClick
        }
    }
}