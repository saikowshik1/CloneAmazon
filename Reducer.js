//It's like a data layer

//reducer is something like if we add any product to basket how we will
//move this product to datalayer

//React Context API
//Redux has also similar pattern but React Context APi and Redux are not same

//Both uses idea of global store for our application and have pattern 
// of dispatching actions into store
//Reducer gets signalled and also monitors the actions related to datalayer

export const initialState = {
    cart : [],
    user:null
};

export const GetCartTotal = (cart) => 
    cart?.reduce((amount,item) => item.price + amount,0); //one of the way of writing for loop in react


//Here cart in brackets is the parameter passed

const Reducer = (state, action) => {
    console.log(action);
    switch (action.type) {

        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.item],
            };
        
        case "REMOVE_FROM_CART":
            const index = state.cart.findIndex(
                (cartitem) => cartitem.id === action.id
            );
            let newCart = [...state.cart];

            if(index >=0){
                newCart.splice(index,1); //slice by 1 in basket
            }
            else{
                console.warn(`Can't remove product(id: ${action.id}) as it is not in basket`)
            }

            return {
                ...state,
                cart:newCart
            }
        
        case 'SET_USER':
            return {
                ...state,
                user:action.user
                //sets the user which called
            }

        default:
            return state;
    }
}


export default Reducer;
