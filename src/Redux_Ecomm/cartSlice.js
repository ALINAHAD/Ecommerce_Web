import {createSlice} from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name:"cartSlice",
    initialState:{
        cartQuantity:0,
        cartProducts:[],
         // array of objects -> {details of products added to cart} },
    },
    reducers:{ // whatever actions i need to perform i mention inside this reducer.(addToCart and deleteFromCart)
        addToCart:(state1,action)=>{

                state1.cartQuantity++;
                //
                
               const productToBeAdded=action.payload  // product details which is to be added to cart
                const requiredProduct= state1.cartProducts.find((cProduct)=>cProduct.id===productToBeAdded.id) // to check whether the product is already present in cart or not
                if(requiredProduct){
                    requiredProduct.IndvQuantity+=1; // if product is already present in cart increase the quantity by 1
                }else{
                    state1.cartProducts.push({...productToBeAdded,IndvQuantity:1}) // if product is not present in cart add the product to cart with quantity 1
                }
                
        },
        deleteFromCart:(state,action)=>{
            state.cartQuantity-=1;
            const productToBeDeleted=action.payload;
            const requiredProduct= state.cartProducts.find((cProduct)=>cProduct.id===productToBeDeleted.id) // to check whether the product is already present in cart or not
            if(requiredProduct.IndvQuantity>1){
                requiredProduct.IndvQuantity-=1; // if product quantity is more than 1 decrease the quantity by 1
            }else{
                state.cartProducts= state.cartProducts.filter((cProduct)=>cProduct.id!==productToBeDeleted.id) // if product quantity is 1 remove the product from cart

            }


        }
        

    }
});
export const actions=cartSlice.actions; // to use the actions in other files
export default cartSlice.reducer;
