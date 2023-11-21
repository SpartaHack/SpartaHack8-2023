"use client"
import React from 'react'
import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";
import { CustomButtonProps } from '../../types';

export const CustomButton = ({title, size, btnStyling, popOver, popOverTitle, popOverClickEvent, popOverStyling, clickEvent, btnType}: CustomButtonProps) => {
    return (
        popOver ? (
            <Popover placement='bottom'>
                <PopoverTrigger>
                    <Button fullWidth disableRipple size={size} type={btnType} className={`${btnStyling}`}>
                        {title}
                    </Button>
                </PopoverTrigger>
                <PopoverContent>
                    <div className={`${popOverStyling}`} onClick={popOverClickEvent}>
                        <div className='p-2'>{popOverTitle}</div>
                    </div>
                </PopoverContent>
            </Popover>
        ) : (
            <Button fullWidth disableRipple type={btnType} size={size} className={`${btnStyling}`} onClick={clickEvent}>
                {title}
            </Button>
        )
    )
}