import React from "react";

import Menu from "../Menu";
import '../../style/index.scss'
import {ACTIONS} from "../../context/providerContext";
import AddPhone from "../AddPhone";
import {useCustomStore} from "../../context/useStore";

const PageWrapper = ({children, match}) => {
    const {dispatch} = useCustomStore()
    return (
        <div className={'phone-list'}>
            <div className={'phone-list_menu'}>
                <Menu />
                {
                    match &&
                    <div className={'header'}>
                        <div className={'search-block'}>
                            <input type="text" placeholder='search' onChange={e => dispatch({type: ACTIONS.SEARCH_PHONE, payload: e.target.value})} />
                        </div>
                        <AddPhone />
                    </div>
                }
            </div>
            <div className={'phone-list_children'}>
                {children}
            </div>
        </div>
    )
}

export default PageWrapper
