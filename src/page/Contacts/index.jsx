import React from "react";

import {useCustomStore} from '../../context/useStore';
import PageWrapper from "../../components/PageWrapper";
import ListContacts from './List';

const Contacts = () => {
    const {state} = useCustomStore()
    return (
        <PageWrapper match={true} >
            <div className={'contacts-block'}>
                <div className={'contacts-block_content'}>
                    {state.phonesList.length === 0 ? <p>Список пуст</p> :
                       state.searchPhone.active ? <p>Ничего нет</p> :
                       state.searchPhone.phone.length !== 0 ?
                           state.searchPhone.phone.map(phone => <ListContacts phone={phone} /> ) :
                           state.phonesList.map(phone => <ListContacts phone={phone} /> )
                    }
                </div>
            </div>
        </PageWrapper>
    )
}


export default Contacts;
