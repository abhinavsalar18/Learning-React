import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        item: []
    },
    //* "reducers" bcz a slice can we have "reducer"
    reducers: {
        //actions
        addItem: (state, action) => {
            /* //*vanilla Redux(Older Redux) -> DON'T MUTATE THE STATE
             THere we use to write code like
             const newState = [...state];  creating copy of crnt State
             newState.item.push(action.payload);
             return newState; 
            */

             //* Redux Toolkit
             //* We HAVE to MUTATE the state OR we can return a state object {item: []}
             // behind the scenes redux is still doing the same thing but developers do not need to do that
             //* it is using IMMER(library) to get a new Immutable state => state -> newState -> Immer => newImmutableState (like diff algo)
            // action contains the payload 
            state.item.push(action.payload);
        },
        
        removeItem: (state, action) => {
            console.log(action.payload);
            state.item = state.item.filter((item) => {
                return action.payload.card.info.id !== item.card.info.id;
            })
        },

        //we have omit the action as it is no required in this action function
        clearCart: (state) => {
            /*
                state is local variable containing the reference of the original state
                if we mutate the local state like state = [] it means changing in local variable 
             */
            //state = []; won't work
            // state.item = [];


            state.item.length = 0;
            // return [] // won't work bcz it will set state to [] means "no item" obejct exists
            // return {item: []}; //will also work because the immer will be creating a new Immutable state using the returned object
        }
    }
});

// using this we will export the actions
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;