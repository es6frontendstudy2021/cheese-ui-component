import React, { useState, useCallback } from 'react';
import Modal from '../index';
import { Button } from '../../Button';

export default function TransitionsModal(props) {
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
        Transitions Modal
      </Button>
      <Modal open={open} onClose={handleClose} timeout={200}>
        <h1>TransitionsModal</h1>
      </Modal>
    </div>
  );
}
