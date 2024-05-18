import React from 'react';
import { Modal } from 'react-native';

interface ModalProps {
  children: any;
  showModal: boolean;
  modalVisible: () => void;
}

const ModalComponent: React.FC<ModalProps> = ({ children, showModal, modalVisible }) => {
  return (
    <Modal visible={showModal} onShow={modalVisible} animationType="fade" transparent>
      {children}
    </Modal>
  );
};

export default ModalComponent;
