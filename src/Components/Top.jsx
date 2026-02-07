import React from 'react'
import Href from '../UI/Components/Href/Href'

const Top = () => {
  return (
    <div className='top'>
                    
        <h1 className='main_text_bold'>Место для получения медицинской помощи</h1>


        <div className='buttons'>
            
            <div className='join_button main_text_regular'>
                <Href text={'Войти'} />
            </div>

            <div className='contacts_button main_text_regular'>
                <Href text={'Контакты'} />
            </div>

        </div>

    </div>
  )
}

export default Top
