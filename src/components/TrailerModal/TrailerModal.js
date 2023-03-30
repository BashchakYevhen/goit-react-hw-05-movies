import React from 'react';
import { BackDrop } from 'components/BackDrop/BackDrop.style';
import { Modal, Button } from './TrailerModal.style';

export const TrailerModal = ({ toggleClose, TrailerData, setTrailerData }) => {
  console.log(TrailerData);
  return (
    <BackDrop>
      <Modal>
        <Button
          onClick={() => {
            toggleClose();
            setTrailerData([]);
          }}
        >
          X
        </Button>
        <iframe
          title="y"
          width="720"
          height="480"
          src={`https://www.youtube.com/embed/${TrailerData[0].key}`}
        ></iframe>
      </Modal>
    </BackDrop>
  );
};
