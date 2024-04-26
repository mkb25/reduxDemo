import { ActionTypes } from "../types/actionTypes";

const initalState = {
    products: [
        {
            title: "ChennaBhairaDevi",
            description: "This is card 1",
            img: `Assets/A1.webp`,
          },
          {
            title: "Karvalo",
            description: "This is card 2",
            img: `Assets/A2.webp`,
          },
          {
            title: "Omarta",
            description: "This is card 3",
            img: `Assets/A3.jpg`,
          },
          {
            title: "Ugadi",
            description: "This is card 4",
            img: `Assets/A4.webp`,
          },
          {
            title: "Shikari",
            description: "This is card 5",
            img: `Assets/A5.webp`,
          },
    ],
    cart:[
    
    ]
}

const prodReducer = (state = initalState, action) => {
    switch (action.type) {
        case ActionTypes.add_prod:
             console.log(action.payload);
             console.log(state.cart);
            return {
               ...state,
               products: [...state.products,action.payload],
               cart:[...state.cart,action.payload],
            };
            
        // case ActionTypes.remove_prod:
        //     return{
        //        ...state,
        //        card: state.cart.filter((prod) => prod.id !== action.payload.id)
        //     }
        default:
            return state;
    }
}

export default prodReducer;