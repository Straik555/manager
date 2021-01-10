import React, { createContext, useReducer } from 'react'

import {
    setPhoneData,
    getPhoneData,
    addPhone,
    viewingPhone,
    newCard,
    removePhone,
    searchPhone
} from "../localStorage";

const initialState = getPhoneData('phonesList') || {
    phonesList: [
        {
            id: 1,
            name: 'Chad Snyder',
            age: 28,
            animal: 'owl',
            phone: '8 (629) 653-9041',
            phrase: 'Owmeco jen be tezpoksim vojuz parro vuri da ce wioveis ko hojmaso ahe civ bapdedam.',
            image: 'http://rtivital.github.io/react-challenge-sort-and-search/images/owl.svg'
        },
        {
            id: 2,
            name: 'Milton Warner',
            age: 65,
            animal: 'owl',
            phone: '8 (366) 958-8850',
            phrase: 'Juile ejtaglo olzam fifi pirviju pawisu du dorkuwfo pu fefmelfer sunozod hovitado lalis idrefzec mudic.',
            image: 'http://rtivital.github.io/react-challenge-sort-and-search/images/owl.svg'
        },
        {
            id: 3,
            name: 'Viola Hale',
            age: 43,
            animal: 'cat',
            phone: '8 (687) 456-4873',
            phrase: 'Vahkeega vi hut fa dabigaj areepjat seci jem couci dovigo ecoozahi ba duzboh fiduf mebfi.',
            image: 'http://rtivital.github.io/react-challenge-sort-and-search/images/cat.svg'
        },
        {
            id: 4,
            name: 'Tyler Herrera',
            age: 48,
            animal: 'dog',
            phone: '8 (537) 867-1647',
            phrase: 'Ewetovuv gebuw kaaniosu vizuk upe hafe aguhuh agevamu dom humo ciasa gairji ufvisso je poz.',
            image: 'http://rtivital.github.io/react-challenge-sort-and-search/images/dog.svg'
        },
        {
            id: 5,
            name: 'Gabriel Howell',
            age: 18,
            animal: 'penguin',
            phone: '8 (629) 653-9041',
            phrase: 'Bofojce mep bine cizavher eze aneeke puvaon ug cupfovcu ne kuzak lod mu kehozwu zovlam.',
            image: 'http://rtivital.github.io/react-challenge-sort-and-search/images/penguin.svg'
        },
        {
            id: 6,
            name: 'Maurice Watson',
            age: 58,
            animal: 'lion',
            phone: '8 (219) 734-5286',
            phrase: 'Emafecew beframfop has litfu gomcabire ku mo go te ligodo rod bowina kodnib oz juciuc.',
            image: 'http://rtivital.github.io/react-challenge-sort-and-search/images/lion.svg'
        },
        {
            id: 7,
            name: 'Vincent Sparks',
            age: 38,
            animal: 'fox',
            phone: '8 (475) 497-4172',
            phrase: 'Kuz dukieri javavavip resveb ovowibco vi diwasweh sownis hongep orulawuc baz kej muwrem eciur rob.',
            image: 'http://rtivital.github.io/react-challenge-sort-and-search/images/fox.svg'
        },
        {
            id: 8,
            name: 'Adelaide Jacobs',
            age: 88,
            animal: 'sheep',
            phone: '8 (609) 383-7022',
            phrase: 'Ogebu mihset gazile gekzef karvutew nez tuv sahomjo upe ez emujot dip giv gapef nir.',
            image: 'http://rtivital.github.io/react-challenge-sort-and-search/images/sheep.svg'
        },
        {
            id: 9,
            name: 'Phillip Daniels',
            age: 19,
            animal: 'koala',
            phone: '8 (629) 653-9041',
            phrase: 'Ic dulo coc ezijaav nu cok banih goadiofa doc capunur vin gi gezuwlal tifwepkuf bajsauk.',
            image: 'http://rtivital.github.io/react-challenge-sort-and-search/images/koala.svg'
        },
        {
            id: 10,
            name: 'Leila Smith',
            age: 41,
            animal: 'raccoon',
            phone: '8 (629) 653-9041',
            phrase: 'Relcefja nineaz suh usi fabnak mam duhir ve misoddo rikatvo giubomo nag mo pocvelok wivtimnud.',
            image: 'http://rtivital.github.io/react-challenge-sort-and-search/images/raccoon.svg'
        },
        {
            id: 11,
            name: 'Phillip Barker',
            age: 64,
            animal: 'pig',
            phone: '8 (629) 653-9041',
            phrase: 'Ittap idi jathaju tusmof za tugte vudiz zinino egoab zak ta pughored faboz radhajhiz po.',
            image: 'http://rtivital.github.io/react-challenge-sort-and-search/images/pig.svg'
        }
    ],
    viewingPhone: [],
    searchPhone: {
        phone: [],
        active: false
    }
}
const storeContext = createContext(initialState)
const { Provider } = storeContext

const ACTIONS = {
    ADD_TO_PHONE: 'ADD_TO_PHONE',
    VIEWING_PHONE: 'VIEWING_PHONE',
    FETCH_PHONES_SUCCESS: 'FETCH_PHONES_SUCCESS',
    CHANGE_CARD: 'CHANGE_CARD',
    REMOVE_PHONE: 'REMOVE_PHONE',
    SEARCH_PHONE: 'SEARCH_PHONE'
}

const reducer = (state, action) => {
    const k = () => {
        switch (action.type) {
            case ACTIONS.ADD_TO_PHONE:
                return {
                    ...state,
                    phonesList: addPhone(state.phonesList, 'phonesList', action.payload)
                }
            case ACTIONS.VIEWING_PHONE:
                return {
                    ...state,
                    viewingPhone: viewingPhone(state.viewingPhone, action.payload)
                }
            case ACTIONS.CHANGE_CARD:
                return {
                    ...state,
                    viewingPhone: viewingPhone(state.viewingPhone, action.payload),
                    phonesList: newCard(state.phonesList, action.payload)
                }
            case ACTIONS.REMOVE_PHONE:
                return {
                    ...state,
                    phonesList: removePhone(state.phonesList, action.payload),
                    viewingPhone: []
                }
            case ACTIONS.SEARCH_PHONE:
                return {
                    ...state,
                    searchPhone: searchPhone(state.phonesList, action.payload)
                }
            default:
                throw new Error()
    }}

    const newStore = k();

    setPhoneData('phonesList', newStore);

    return newStore;
}

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <Provider value={{state, dispatch}}>{children}</Provider>
}

export { storeContext, StateProvider, ACTIONS }
