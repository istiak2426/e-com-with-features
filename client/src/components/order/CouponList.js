import React from 'react'

const CouponList = (props) => {



  return (
	<div><div 
            style={{cursor:"pointer", width:"100%", height:"2rem", background:"orange"}}>
                <span>
              {props.coupon.name}

				</span> 
                <span>
				{props.coupon.discount}
					</span>
                </div>

                <button 
    
                onClick={()=>props.SelectCoupon(props.coupon)}
                >add</button></div>
  )
}

export default CouponList