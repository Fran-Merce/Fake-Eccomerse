import { useState } from 'react';
import { DropDownWrapper } from './DropDownStyled';

import { DropDownOptions } from '../DropDownOptions/DropDownOptions';
import { AnimatePresence } from 'framer-motion';
export const DropDown = () => {
  const [open, setOpen] = useState(false);

  return (
    <AnimatePresence>
      <DropDownWrapper>
        <p onClick={() => setOpen(!open)}>Categorias</p>
        {open }
      </DropDownWrapper>
    </AnimatePresence>
  );
};
