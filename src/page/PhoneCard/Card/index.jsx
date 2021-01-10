import React, {useState} from 'react';
import PhoneInput from 'react-phone-input-2';

import available from "../../../assets/no-photo-available.png";
import './index.scss';
import {useCustomStore} from "../../../context/useStore";
import {ACTIONS} from "../../../context/providerContext";
import {Link} from "react-router-dom";
import {routes} from "../../../routes";

const Card = ({card}) => {
    const [nameUser, setNameUser] = useState(card.name);
    const [phoneUser, setPhoneUser] = useState(card.phone)
    const {dispatch} = useCustomStore()

    const newCard = () => {
        return {
            ...card,
            name: nameUser,
            phone: phoneUser,
        }
    }

    return (
        <div className={'card-list'}>
            <div className={'card-list_image_block'}>
                <div className="img">
                    <img src={card.image ? card.image : available} alt={card.name}/>
                </div>
            </div>
            <div className={'card-list_content_block'}>
                <legend>
                    Имя
                </legend>
                <input
                    type="text"
                    placeholder={'Имя'}
                    value={nameUser}
                    onChange={e => setNameUser(e.target.value)}
                />
                <legend>
                    Телефон
                </legend>
                <PhoneInput
                    inputExtraProps={{
                        required: true,
                        autoFocus: true
                    }}
                    value={phoneUser}
                    onChange={e => setPhoneUser(e)}
                />
                <div className={'button-content'}>
                    <button
                        className={'button-content_add'}
                        onClick={() => dispatch({type: ACTIONS.CHANGE_CARD, payload: newCard()})}
                    >
                        Изменить
                    </button>
                    <Link
                        className={'button-content_delete'}
                        to={routes.contacts}
                        onClick={() => dispatch({type: ACTIONS.REMOVE_PHONE, payload: card.id})}
                    >
                        Удалить
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card;