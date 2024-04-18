import React, { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';

import { OBJECTS_SMALL_DESCRIPTIONS } from '../../config/smallDescriptions';
import { OBJECTS_PNG } from '../../config/solarObjects';
import { OBJECTS_TITLE } from '../../config/titles';
import useSolarSystemStore from '../../store/solarSystemStore';
import st from './Modal.module.less';

interface IProps {
  show: boolean;
  onClose: () => void; // Добавляем колбэк для закрытия модального окна
}

function SolarModal({ show = false, onClose }: IProps) {
  const { selectedObject = '' } = useSolarSystemStore();
  const title = selectedObject && OBJECTS_TITLE[selectedObject];
  const smallDescription = selectedObject && OBJECTS_SMALL_DESCRIPTIONS[selectedObject];

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [onClose]);

  return (
    <>
      <Modal
        className={st.modal}
        show={show}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        contentClassName={st.content}
      >
        <Modal.Header closeButton closeVariant="white" onClick={onClose}>
          {' '}
          {/* Добавляем обработчик клика */}
          <Modal.Title id="example-custom-modal-styling-title">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedObject && (
            <img
              className={st.img}
              src={OBJECTS_PNG[selectedObject]}
              alt="dd"
              loading="lazy"
            />
          )}
          <p>{smallDescription}</p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SolarModal;
