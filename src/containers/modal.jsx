import styled from '@emotion/styled';
import React from 'react';
import SimpleModal from '../components/Modal/SimpleModal';
import TransitionsModal from '../components/Modal/TransitionsModal';

const ModalContainerWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

const ModalContainer = () => {
  return (
    <ModalContainerWrap>
      <SimpleModal></SimpleModal>
      <TransitionsModal></TransitionsModal>
    </ModalContainerWrap>
  );
};

export { ModalContainer };
export default ModalContainer;
