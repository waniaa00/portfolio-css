import React from 'react'
import "@/app/styles/footer.css"


interface propsType {
    title: string;
}

const Heading: React.FC<propsType> =({title}) => {
  return (
    <div className='heading-container'>
        <p className='heading-title'> {title} </p>
      
    </div>
  )
}

export default Heading

