const ADD_GUN = '加机关枪'
const REDUCER_GUN = '减机关枪'

export function counter(state=0, action) {
    switch (action.type) {
        case ADD_GUN:
            return state + 1
            break;
        case REDUCER_GUN:
            return state - 1
        default:
            return 10
    }
}

export function addGun() {
    return { type: ADD_GUN }
}
export function reducerGun() {
    return { type: REDUCER_GUN }
}
export function addGunAsync() {
    return dispatch => {
        setTimeout(() => {
            dispatch(reducerGun())
        }, 2000);
    }
}
