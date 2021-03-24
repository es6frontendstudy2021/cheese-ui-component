import React from 'react';
import styled from '@emotion/styled';
import SimpleModalDemo from './SimpleModal/demo/index';
import TransitionModalDemo from './TransitionsModal/demo/index';

import Modal from './index';

/** style */
const ModalCollectionSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 15px;
  background-color: #333;
  color: #fff;
`;

const Title = styled.h1`
  font-size: 30px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.235;
  letter-spacing: 0.00735em;
`;

const SubTitle = styled.h2`
  font-size: 30px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.235;
  letter-spacing: 0.00735em;
`;

export default function ModalCollection() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ModalCollectionSection>
      {/* Modal Test */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      ></Modal>

      <Title>Modal</Title>
      <SubTitle>Simple Modal</SubTitle>
      <SimpleModalDemo></SimpleModalDemo>
      <SubTitle>Transitions Modal</SubTitle>
      <TransitionModalDemo></TransitionModalDemo>
    </ModalCollectionSection>
  );
}
