import React from 'react';

import {useCustomStore} from "../../context/useStore";
import PageWrapper from "../../components/PageWrapper";
import Card from "./Card";

const PhoneCard = () => {
    const {state} = useCustomStore();
    return (
        <PageWrapper>
            {
                state.viewingPhone.map(el =>
                    <Card key={el.id} card={el} />
                )
            }
        </PageWrapper>
    )
}

export default PhoneCard;
