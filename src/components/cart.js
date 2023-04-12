import React from "react";
function cart({cart}){
      return (
            <div>
                  {
                        cart.map((cartItem, cartIndex) => {
                              return (
                                    <div>
                                          <img src={cartItem.url} width={30} />
                                          <span> {cartItem.name}</span>
                                          <span> {cartItem.quantity}</span>
                                          <span> {cartItem.price}</span>
                                    </div>
                              )
                        })
                  }
            </div>
      )
}
export default cart;