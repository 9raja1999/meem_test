"use client"
import { Modal } from 'antd'
import { ModalCloseIcon } from '../../constants/svg';

export default function CustomModal({ children, open, onCancel, heading }) {
    return (
        <Modal
            centered
            open={open}
            closable={false}
            footer={null}
            className='custom__modal'
        >

            <div className='modal__header'>
                <h2 className='heading'>{heading}</h2>
                <div className='close__icon' onClick={onCancel}>
                    <ModalCloseIcon />
                </div>
            </div>
            <div className='modal__body'>
                {children}
            </div>
        </Modal>
    )
}
