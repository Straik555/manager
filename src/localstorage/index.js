export const getPhoneData = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

export const setPhoneData = (key, val) => {
    localStorage.setItem(key, JSON.stringify(val));
};

export const viewingPhone = (item, el) => {

        if(item.length !== 0){
            item.splice(0, 1);
            item.push(el)
            return item
        }
        item.push(el)
        return item
}

export const addPhone = (state, key, el) => {
    state.push(el)
    return state
}

export const newCard = (state, card) => {
    const index = state.some(item => item.id === card.id);
    if(index){
        state.some(item => {
            if(item.id === card.id){
                console.log('yes')
                    item.name = card.name;
                    item.phone = card.phone;
                    item.image = card.image;
               }
            }
        )}
    return state
}

export const removePhone = (state, phone) => {
    state = state.filter(item => item.id !== phone)
    return state
}

export const searchPhone = (state, phone) => {
    if(phone.length === 0){
        return {
            phone: [],
            active: false
        }
    }
   const i = state.filter(i => i.name.toLowerCase().indexOf(phone.toLowerCase()) > -1)
    if(i.length === 0){
        return {
            phone: [],
            active: true
        }
    } else{
        return {
            phone: i,
            active: false
        }
    }
}