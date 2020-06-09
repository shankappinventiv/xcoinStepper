// import signInModal from '../../modal'
const loginReducers = (state:any = {}, action:any ) =>{
    switch (action.type) {
        case "SUBMIT":
            state.email = action.payload.email;
            state.pasword = action.payload.password;
            alert(state)
            break;
            default:
            return state;
    }
}

export default loginReducers