import { ReactNode } from "react";

export type Tab = {
    label: string;
    target: string;
    child: ReactNode;
    onClick?: (value: string) => void;
}