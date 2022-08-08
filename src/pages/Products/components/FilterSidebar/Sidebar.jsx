import React, { useState } from 'react';
import { SideBarStyled } from './SidebarStyled';
import { AnimatePresence } from 'framer-motion';
import { DropDownOptions } from './DropDownOptions/DropDownOptions';
import { Search } from '../Search/Search';
export const Sidebar = ({ setOpen }) => {
  return (

      <SideBarStyled
        initial={{ opacity: 0,left:'-100%' }}
        animate={{ opacity: 1 ,left:0}}
        exit={{ opacity: 0,left:'-100%' }}
        transition={{ duration:.2 }}
      >
        <p>sidebar</p>
        <DropDownOptions/>
        <Search/>
        <div>
          <button onClick={() => setOpen(false)} type='button'>

            cerrar
          </button>
        </div>
      </SideBarStyled>
  
  );
};
