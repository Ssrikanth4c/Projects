import React from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
const Cart = props => {
  const { app } = props;
  let cartItems = app.getCartArr();
  let {isAuth}= app
  const style={ display: 'flex',  justifyContent:'center', height: '100vh', alignItems:'center'}
  console.log(cartItems);
  if(!isAuth)
  // if(0)
    return (
      <Redirect  to='/login'/>
    );
  return(
    <div >
      <h2 className='font-weight-bold'>Cart items</h2>
      {
      !cartItems.length?
      // 0?
      <div className="cart-container">
        <div className='empty-cart'>
          <h1>Cart is Empty</h1>
        </div>
      </div>
      :
      <div className=" cart-container container justify-content-center">
          <div className="row justify-content-center"> 
           {
              cartItems?.map((item, ind)=>{
                  return(
                      <div className="col-md-6 col-lg-4 border p-2">
              <div class="card  w-100">
                <div class="row no-gutters">
                  <div class="col-4">
                    <img src={item.img} class="card-img" width="100px" height="100px" alt="..." />
                  </div>
                  <div class="col-8">
                    <div class="card-body">
                      <p class="card-text text-truncate h5 font-weight-bold">{item.name}</p>
                      <div className="row justify-content-between">
                        <div className="col-4 d-flex align-items-end">
                          <p className=' border bg bg-danger rounded px-2 text-white'>Qty</p>
                          <p className='border flex-fill font-weight-bold'>{item.qty}</p>  
                        </div>
                        <div className="col-8 d-flex align-items-end">
                          <p className=' border bg bg-danger rounded px-2 text-white'>Price</p>
                          <p className='border flex-fill font-weight-bold'>{Number(item.price)*Number(item.qty)}</p>  
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>            
              )
              })
           }
          </div>
      </div>
      }
    </div>
  )
};

export default Cart;
