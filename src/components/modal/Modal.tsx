import React, { useEffect, useRef, useState } from "react";
import "./modal.scss";
interface IModalProps {
  isOpen: boolean;
  title: string;
  hasCloseBtn?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<IModalProps> = (props) => {
  const { isOpen, title, hasCloseBtn = true, onClose, children } = props;
  const [isModalOpen, setModalOpen] = useState(isOpen);
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
    setModalOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const modalElement = modalRef.current;

    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isModalOpen]);

  return (
    <dialog ref={modalRef} onKeyDown={handleKeyDown} className="modal">
      <div className="dialog-header">
        <h3>{title}</h3>
        {hasCloseBtn && (
          <button className="modal-close-btn" onClick={handleCloseModal}>
            X
          </button>
        )}
      </div>
      <div className="dialog-content">{children}</div>
    </dialog>
  );
};

export default Modal;
