import React from 'react'
import {
    Accordion,
} from 'react-accessible-accordion';
import AccordianComponentItem from './AccordianComponentItem';

function AccordianComponent(props) {

    return (
        <Accordion className='px-2 flex flex-col w-full '
            allowZeroExpanded>
            {props.data.map((question) => {
                return (
                    <AccordianComponentItem
                        headingText={question.question}
                        bodyText={question.answer}
                    />)
            })}

        </Accordion>
    )
}

export default AccordianComponent