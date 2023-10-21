import { Accordion, AccordionItem } from '@nextui-org/react';
import React from 'react'

const AccordionSection = () => {
  return (
    <div>
      <Accordion>
        <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default AccordionSection