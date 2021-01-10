import React, {useState} from 'react';
import Modal from 'react-modal';
import { Icon } from 'react-icons-kit';
import {ic_clear} from 'react-icons-kit/md/ic_clear';
import PhoneInput from 'react-phone-input-2';

import {ACTIONS} from "../../context/providerContext";
import {useCustomStore} from "../../context/useStore";

const customStyles = {
    content : {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        transition: 'opacity 500ms ease-in-out',
        zIndex: '1000000 !important',
    }
};

Modal.setAppElement('#root')

const AddPhone = () => {
    const [modalIsOpen,setIsOpen] = useState(false);
    const [userPhone, setUserPhone] = useState('');
    const [userName, setUserName] = useState('');
    const [userImage, setUserImage] = useState('');
    const {state, dispatch} = useCustomStore();
    console.log('userImage', userImage)
    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
    }

    const addPhonesOption = () => {

        return {
            id: state.phonesList.length + 1,
            name: userName,
            phone: userPhone,
            image: userImage
        }
    }

    const change = (file) => {
        setUserImage({file})
    }

    return (
        <>
            <button
                className={'open-modal'}
                onClick={openModal}
            >
                Добавить
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div
                    className={'modal-block'}>
                    <button
                        className={'button-close'}
                        onClick={closeModal}
                    >
                        <Icon
                            size={'100%'}
                            icon={ic_clear}
                        />
                    </button>
                    <h2 itemProp={'name'}>
                        Добавить контакт
                    </h2>
                    <div
                        className={'modal-block_content'}
                    >
                        <legend>
                            Имя
                        </legend>
                        <input type="text" placeholder={'name'} onChange={(e) => setUserName(e.target.value)}/>
                        <legend>
                            Телефон
                        </legend>
                        <PhoneInput
                            country={'ua'}
                            inputExtraProps={{
                                name: "phone",
                                required: true,
                                autoFocus: true
                            }}
                            value={''}
                            onChange={e => setUserPhone(e)}
                        />
                    </div>
                    <div
                        itemProp={'modalBlockFooter'}
                        itemScope
                        className={'modal-block_footer'}>
                       <button
                           className={'right'}
                           onClick={() => {
                               closeModal();
                               dispatch({type: ACTIONS.ADD_TO_PHONE, payload: addPhonesOption()})
                           }}
                       >
                           Добавить
                       </button>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default AddPhone;