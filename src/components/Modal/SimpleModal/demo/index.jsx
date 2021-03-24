import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import SimpleModal from '../index';

const ShowUIButton = styled.button`
  margin-top: 20px;
  padding: 5px 15px;
  border: 1px solid rgba(144, 202, 249, 0.5);
  color: #90caf9;
  background-color: transparent;
`;

const ModalOptions = styled.section`
  display: flex;
  flex-direction: column;
`;

const ModalOptionLabel = styled.label`
  margin: 5px 0px;
`;

export default function SimpleModalDemo() {
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
    <>
      <ShowUIButton onClick={openModal}>open modal</ShowUIButton>
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
      <SimpleModal
        visible={visible}
        onClose={closeModal}
        maskClosable={maskClosable}
      >
        <h1>MODAL TITLE</h1>
        <p>MODAL CONTENT</p>
      </SimpleModal>
    </>
  );
}
