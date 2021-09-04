import { SrOnly } from 'components/SrOnly/SrOnly';
import React from 'react';
import { StyledButton } from './IconButton.styles';

const IconButton = ({ srText, ...props }) => {
  return (
    <StyledButton {...props}>
      {srText && <SrOnly>{srText}</SrOnly>}
    </StyledButton>
  );
};

export default IconButton;
