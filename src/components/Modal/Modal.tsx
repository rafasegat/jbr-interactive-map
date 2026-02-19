import React, { FC, ReactNode } from 'react';
import Close from '../Icons/Close';
import './Modal.scss';

type Props = {
  children: ReactNode;
  isOpen: boolean;
  closeModal: () => void;
};

const Modal: FC<Props> = ({ children, isOpen, closeModal }: Props) => {
  return (
    <>
      {
        <div className={`modal-overlay ${isOpen ? 'open' : 'closed'}`}>
          <div className="modal-dialog">
            <div
              className="modal-content"
              tabIndex={-1}
              role="dialog"
              aria-modal={true}
            >
              <button
                type="button"
                className="btn-close-modal"
                onClick={closeModal}
              >
                <Close />
              </button>
              {children}
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Modal;
