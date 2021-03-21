import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
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

const ModalOptions = styled.section`
  display: flex;
  flex-direction: column;
`;

const ModalOptionLabel = styled.label`
  margin: 5px 0px;
`;

const ShowUIButton = styled.button`
  margin-top: 20px;
  padding: 5px 15px;
  border: 1px solid rgba(144, 202, 249, 0.5);
  color: #90caf9;
  background-color: transparent;
`;

export default function ModalCollection(props) {
  const [visible, setVisible] = useState(false);
  const [maskClosable, setMaskClosable] = useState(true);

  const openModal = useCallback(() => {
    setVisible(true);
  }, []);

  const closeModal = useCallback(() => {
    setVisible(false);
  }, []);

  const toggleMaskClosable = useCallback(() => {
    setMaskClosable(!maskClosable);
  }, [maskClosable]);

  return (
    <ModalCollectionSection>
      <Title>Modal</Title>
      <ModalOptions>
        <ModalOptionLabel htmlFor="maskClosable">
          mask closable
          <input
            id="maskClosable"
            type="checkbox"
            onChange={toggleMaskClosable}
            checked={maskClosable}
          />
        </ModalOptionLabel>
      </ModalOptions>
      <ShowUIButton onClick={openModal}>open modal</ShowUIButton>
      <Modal visible={visible} onClose={closeModal} maskClosable={maskClosable}>
        <h1>MODAL TITLE</h1>
        <p>MODAL CONTENT</p>
      </Modal>
    </ModalCollectionSection>
  );
}
