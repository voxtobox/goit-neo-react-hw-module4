import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

export default function ImageModal({ isOpen, onClose, imageData }) {
  return (
    <Modal
      className={css.modalContent}
      overlayClassName={css.modalOverlay}
      isOpen={isOpen}
      onRequestClose={onClose}
    >
      <img
        className={css.image}
        src={imageData.urls.regular}
        alt={imageData.description}
      />
    </Modal>
  );
}
