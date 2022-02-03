export const initialState = {
    user : null,
    playlists : [],
    playing : false,
    item: null,
    //token : 'BQABGZe6EUPimthjAN90qk05_A1C3cS4TnmlfF1veTJVPAa6TJHVx-4A-cyn2VEZPVN5bQB9PhhVaTyHggkFmOd0XtWCWcH3j8L5RIIinf-3gyh6ZV8N5j8EkVnISpGqD_djbpuzrDVXPtOSMGYFXoKvgO1_ZqVT2TB3PYXidWuvmkz8Enq7',
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state, 
                user: action.user,
            };
            
        case 'SET_TOKEN':
        return{
            ...state,
            token: action.token,
        };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        default:
            return state;
        

    }
};

export default reducer;