
export const changeLang = (language) => {
    console.log('test', language);
    return {
        type: 'LANGUAGE',
        payload: language
    }
}