import React from 'react'

const Second = () => {
  const mystyle={
    color:'#fff',
    // fontSize:'50px',
    backgroundColor:'red',
    alignItem:'left',
    width:'50%',
    
  

  }
  return (
    <>
    <h4>This is second component.</h4>
      <p style={mystyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, maiores reprehenderit repellat magnam modi aliquid suscipit repellendus porro. Perspiciatis quas consequatur, libero accusamus nisi necessitatibus sequi? Deleniti voluptatibus quis maxime?</p>
      <img src="/images/camera4.png" alt="image"  className='image' />
    </>
  )
}

export default Second
