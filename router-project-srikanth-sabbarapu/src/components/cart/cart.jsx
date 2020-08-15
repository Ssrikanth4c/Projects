import React from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
const Cart = props => {
  const { app } = props;
  let cartItems = app.getCartArr();
  let {isAuth}= app
  const style={ display: 'flex',  justifyContent:'center', height: '100vh', alignItems:'center'}
  console.log(cartItems);
  if(!isAuth)
    return (
      <Redirect  to='/login'/>
    );
  return(
    <div >
      <div className="container justify-content-center">
        <div className="h2 text-info font-weight-bold">cart</div>
          <div className="row border ">  
            <table className="table table-striped table-dark ">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Image</th>
                      <th scope="col">Qty</th>
                      <th scope="col">Price</th>
                    </tr>
                  </thead>
               {
                cartItems?.map((item, ind)=>{
                  return(
                    <tbody>
                      <tr>
                        <th scope="row">{Number(ind)+1}</th>
                        <td className='text-truncate font-weight-bold'>{item.name}</td>
                        <td>
                          <img src={item.img} alt={item.name} width="100px" height="100px"/>
                        </td>
                        <td>{item.qty}</td>
                        <td>{Number(item.price)*Number(item.qty)}</td>
                      </tr>
                    </tbody>
                )
              })
            }
            </table>
          </div>
      </div>
    </div>
  )
};

export default Cart;
