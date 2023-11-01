export type CustomButtonProps = {
    title: string,
    btnType: "button" | "submit" | "reset" | undefined;
    clickEvent?: () => void,
    btnStyling?: string,
    popOver?: boolean,
    popOverTitle?: string,
    popOverStyling?: string,
}