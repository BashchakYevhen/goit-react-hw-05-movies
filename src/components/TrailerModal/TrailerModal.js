import React from 'react';
import { BackDrop } from 'components/BackDrop/BackDrop';
import { Modal, Button, Frame } from './TrailerModal.style';

export const TrailerModal = ({ toggleClose, TrailerData, setTrailerData }) => {
  return (
    <BackDrop
      onClick={e => {
        console.log(e);
        toggleClose();
        setTrailerData([]);
      }}
    >
      <Modal>
        <Button
          onClick={e => {
            console.log(e);
            toggleClose();
            setTrailerData([]);
          }}
        >
          X
        </Button>
        <Frame
          title="YouTube"
          width="720"
          height="480"
          src={`https://www.youtube.com/embed/${TrailerData[0].key}`}
        ></Frame>
      </Modal>
    </BackDrop>
  );
};
