import React from 'react'
import H5 from '../UI/Components/H5/H5'
import Paragrath from '../UI/Components/Paragrath/Paragrath'

const Bottom = () => {
  return (
    <div className='bottom'>

        <div className='cardiogramma'>

            <div className='cardiogramma_img'></div>

            <div className='text_block'>

                <H5 text={'Онлайн-приём'}/>

                <div className='border'></div>

                <Paragrath text={'Рыба текст'} />

            </div>

        </div>

        <div className='stetoscope'>

            <div className='stetoscope_img'></div>

            <div className='text_block'>

                <h5 className='main_text_regular'>Экстренный Случай</h5>

                <div className='border'></div>

                <p className='second_text'>Рыба текст</p>

            </div>

        </div>

        <div className='table'>

            <div className='table_img'></div>

            <div className='text_block'>

                <h5 className='main_text_regular'>Лечение рака</h5>

                <div className='border'></div>

                <p className='second_text'>Рыба текст</p>

            </div>

        </div>

    </div>
  )
}

export default Bottom
