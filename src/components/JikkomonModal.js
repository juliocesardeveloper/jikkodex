import React from 'react'
import Modal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModal } from '../actions/ui';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root');

export const JikkomonModal = ({ children }) => {

  const dispatch = useDispatch();

  const { openModal } = useSelector(state => state.ui)

  const closeModal = () => {
    dispatch(uiCloseModal());
  }

  return (
    <Modal
      isOpen={ openModal }
      onRequestClose={ closeModal }
      style={ customStyles }
      closeTimeoutMS={ 200 }
      className="modal"
      overlayClassName="modal-fondo"
    >

      { children }

    </Modal>
  )
}
