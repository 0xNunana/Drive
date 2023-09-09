import React from 'react'



const Button = ({title,clicked,style}:ButtonType) => {
  return (
    <div onClick={clicked} className={`${style} flex justify-center items-center rounded-lg px-4 py-3 shadow-lg`}>
        <p className='text-center'>{title}</p>



    </div>
  )
}

export default Button