import React from "react";
import {routes} from "../../../routes";
import {Link} from "react-router-dom";

import {ACTIONS} from "../../../context/providerContext";
import {useCustomStore} from "../../../context/useStore";

const ListContacts = ({phone}) => {
    const {dispatch} = useCustomStore()
    return (
        <Link
            className={'list-contacts'}
            key={phone.id}
            to={`${routes.contacts}/${phone.id}`}
            onClick={() => dispatch({type: ACTIONS.VIEWING_PHONE, payload: phone})}
        >
            <h1>{phone.name}</h1>
            <span>{phone.phone}</span>
        </Link>
    )
}

export default ListContacts;