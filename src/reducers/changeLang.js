const initialState = {
    language: 'vi',
}

export const languageReducer = (state = initialState, action) => {
    console.log('sate', state);
    switch (action.type) {
        case 'LANGUAGE': {
            console.log('LANGUAGE reducer', action.payload);
            return { ...state, language: action.payload }
        }

        default:
            return state;
    }
}