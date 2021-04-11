import React, { useState, useCallback } from 'react';
import Modal from '../index';
import { Button } from '../../Button';

export default function SimpleModal(props) {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div>
      <Button type="button" onClick={handleOpen}>
        Simple Modal
      </Button>
      <Modal open={open} onClose={handleClose}>
        <h1>SimpleModal</h1>
      </Modal>
    </div>
  );
}
