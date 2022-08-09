import { FaBars } from 'react-icons/fa';
import { FlexComponent } from '../../../UI/FlexComponent/FlexComponent';

export const NavMobileBtn = ({ setOpen, open }) => {
  return (
    <FlexComponent
      onClick={() => setOpen(!open)}
      margin='5px'
      align='center'
      justify='center'
    >
      <FaBars cursor='pointer'  size='1.5rem' color='white' />
    </FlexComponent>
  );
};
