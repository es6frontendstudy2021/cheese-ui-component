import React from 'react';
import styled from '@emotion/styled';

export default function Modal(props) {
  const { visible, onClose, maskClosable, children } = props;

  const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: ${props.visible ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
  `;

  const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
  `;

  const ModalContainer = styled.div`
    position: relative;
    padding: 20px 30px;
    width: 50vw;
    color: #fff;
    background-color: #424242;
    z-index: 9;
  `;

  const CloseButton = styled.button`
    position: absolute;
    right: 0px;
    top: 0px;
    width: 30px;
    height: 30px;
    border: none;
  `;

  const close = (e) => {
    onClose?.();
  };

  Modal.defaultProps = {
    closable: true,
    maskClosable: true,
    visible: false,
  };

  return (
    <Modal visible={visible}>
      <ModalOverlay onClick={maskClosable ? close : null} />
      <ModalContainer>
        <CloseButton onClick={close}>X</CloseButton>
        {children}
      </ModalContainer>
    </Modal>
  );
}
