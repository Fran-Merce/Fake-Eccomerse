import { SideBarStyled } from './SidebarStyled';
import { DropDownOptions } from './DropDownOptions/DropDownOptions';
import { Search } from '../Search/Search';

import { CloseBtnStyled } from './SidebarStyled';
export const Sidebar = ({ setOpen }) => {
  return (
    <SideBarStyled
      initial={{ opacity: 0, left: '-100%' }}
      animate={{ opacity: 1, left: 0 }}
      exit={{ opacity: 0, left: '-100%' }}
      transition={{ duration: 0.2 }}
    >
      <Search />
      <div>
        <p>Categorias</p>
        <DropDownOptions />
      </div>
      <CloseBtnStyled onClick={() => setOpen(false)} type='button'>
        cerrar
      </CloseBtnStyled>
    </SideBarStyled>
  );
};
