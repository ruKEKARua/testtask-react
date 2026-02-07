import React from 'react'
import H5 from '../UI/Components/H5/H5'
import Paragrath from '../UI/Components/Paragrath/Paragrath'

import services from '../services.json'

const Bottom = () => {

    return (
        <div className='bottom'>

            {
                services.map((element) => {

                    return <div className='cardiogramma'>

                        <div className={element.imageName}></div>

                        <div className='text_block'>

                            <H5 text={element.title}/>

                            <div className='border'></div>

                            <Paragrath text={element.description} />

                        </div>

                    </div>

                })
            }

        </div>
  )
}

export default Bottom
