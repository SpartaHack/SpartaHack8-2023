import React, { ChangeEvent, MouseEventHandler } from "react";

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

export type CustomModalProps = {
    title: JSX.Element, 
    contentTitle: string, 
    contentMain: JSX.Element, 
    actionTitle: string
    actionEvent: MouseEventHandler;
}

export type CustomTextInputProps = {
    value: string | (readonly string[]) | undefined,
    type: string,
    label: string,
    isInvalid?: boolean,
    eventChange?: (e: ChangeEvent<HTMLInputElement>) => void,
    styling?: string | undefined,
}

export type ContentProps = {
    type: "youtube" | "pdf",
}

export interface ChatSubmitProps {
    onMessageSubmit: (message: string) => void;
    isLoading: boolean;
}

export type ContentCardProps = {
    type: string,
    contentID: string,
    title: string,
    thumbnail_url: string
}

export type PriceCardProps = {
    price: JSX.Element | string;
    subTitle: string;
    planBenefits: string[];
    buttonText: string,
    route: string
}