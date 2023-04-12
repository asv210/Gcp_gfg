import React from 'react'
import cart from './cart'

const cartItems = (props) => {
      return (
            <>
                  <div>
                        {
                              props.location.state
                        }

                  </div >
            </>
      )
}

export default cartItems
