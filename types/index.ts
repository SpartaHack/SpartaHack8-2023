import React from "react";

export type CustomButtonProps = {
    title: string,
    btnType: "button" | "submit" | "reset" | undefined;
    clickEvent?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    btnStyling?: string,
    popOver?: boolean,
    popOverTitle?: string,
    popOverStyling?: string,
}

export type AccountProps = {
    name: string,
    description: string,
    picture?: string
} 

export type CustomDropdownProps = {
    title: JSX.Element,
    sections: {
        label: string,
        items: {
        label: string
        clickEvent: () => void;
        dropStyling?: string,
        }[]
    }[]
}