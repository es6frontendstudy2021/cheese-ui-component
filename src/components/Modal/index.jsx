// @TODO Modal 컴포넌트 원형
import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

const Modal = React.forwardRef(function Modal(props, refs) {
  const { children } = props;
  const { open, ...rest } = props;

  const modal = React.useRef({});
  const mountNodeRef = React.useRef(null);
  const modalRef = React.useRef(null);

  return <>I'm modal</>;
});

Modal.propTypes = {
  open: PropTypes.bool.isRquired,
};

export default Modal;
