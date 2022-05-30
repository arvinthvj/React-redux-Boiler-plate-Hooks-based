export const toAddOrGetBalanceInBank = (details) => {
    debugger
    return (dispatch) => 
        dispatch({
            type: "add",
            payload: details
        });
    
}