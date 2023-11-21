import React, { ChangeEvent, MouseEventHandler, ReactNode } from "react";
import { YouTubeProps } from "react-youtube";

export type CustomButtonProps = {
    title: string | JSX.Element,
    size?: "sm" | "md" | "lg" | undefined,
    btnType: "button" | "submit" | "reset" | undefined,
    clickEvent?: () => void,
    btnStyling?: string,
    popOver?: boolean,
    popOverClickEvent?: () => void,
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
        label: string | JSX.Element,
        clickEvent?: () => void;
        dropStyling?: string,
        }[]
    }[],
    placement?: 'top' | 'bottom' | 'left' | 'right',
    offset?: number,
    closeOnSelect?: boolean,
}

export type CustomModalProps = {
    title: JSX.Element, 
    contentTitle?: string, 
    contentMain: JSX.Element, 
    actionTitle?: string
    actionEvent?: MouseEventHandler;
    placement?: "center" | "auto" | "top" | "top-center" | "bottom" | "bottom-center" | undefined,
    footer: boolean
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

export type Features = {
    icon: JSX.Element,
    label: string,
}

export type PriceCardProps = {
    plan: string;
    price: JSX.Element | string;
    subTitle: string;
    planBenefits: Features[];
    buttonStyle?: string,
    buttonText: string | JSX.Element,
    handleClick?: () => void;
}

export type DashboardProps = {
    userId: string,
    spaceIds: string[],
    tier: string,
}

export type useContainerHeightProps = {
    type: 'pdf' | 'youtube'
}

export type MessageType = {
    sources?: string[] | undefined;
    type: string;
    response: string;
};

export type MessageProps = {
    message: MessageType;
    index: number;
    copiedState: Record<number, boolean>;
    copyToClipboard: (response: string, index: number) => void;
};

export type SummaryProps  = {
    summary: string
}

export type CustomAutocompleteProps = {
    style?: string,
    datas: {value: string} [],
    isInvalid: boolean,
    label: string,
    onValueChange: (value: string) => void,
    size: "sm" | "md" | "lg" | undefined,
}

export type ResponseProps = {
    message: string,
    source?: undefined | string[]
}

export type TooltipContentProps = {
    source: ResponseProps['source'];
    children?: ReactNode;
}

export type PlayerProps = YouTubeProps & {
    seekTo: (seconds: number) => void;
}

export type YoutubeVideoProps = {
    source: number
}

export type PDFProps = {
    sourcePage: number,
}

export type YouLearnLogoProps = {
    size: 'sm' | 'lg',
    tier?: string,
    height?: number,
    width?: number
}

export type ImageUploadProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    src: string,
}

export type EditAccordionProps = {
    indicator?: JSX.Element,
    title: JSX.Element | string,
    style?: string,
}

export type CustomAccordionProps = {
    accordionData: {
        title: JSX.Element | string,
        content: JSX.Element | string,
        subtitle: JSX.Element | string,
    }[];
}

export type SignUpFormProps = {
    name: string,
    educationLevel: string
}