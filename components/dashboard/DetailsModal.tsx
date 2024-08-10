// Modal.tsx
import React from 'react';
import './DetailsModal.css'
interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const DetailsModal: React.FC<ModalProps> = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal w-[70%]" onClick={(e) => e.stopPropagation()}>
        <div className='w-full h-full'>{children}</div>
      </div>
    </div>
  );
};

export default DetailsModal;