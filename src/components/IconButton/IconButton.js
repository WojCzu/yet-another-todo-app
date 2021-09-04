import { SrOnly } from 'components/SrOnly/SrOnly';
import React from 'react';
import { StyledButton } from './IconButton.styles';

const IconButton = ({ icon, srText }) => {
  return (
    <StyledButton icon={icon}>
      {srText && <SrOnly>{srText}</SrOnly>}
    </StyledButton>
  );
};

export default IconButton;
