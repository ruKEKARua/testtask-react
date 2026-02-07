import React from 'react'
import Href from '../UI/Components/Href/Href'

const Header = () => {
  return (
    <header>

        <div className='header_wrapper'>
            <div className='logo'>
            </div>

            <div className='header_buttons'>

                <div className='contacts_button second_text'>

                    <Href text={'Контакты'} />

                </div>

                <div className='join_button main_text_regular'>

                    <Href text={'Войти'} />

                </div>

            </div>
        </div>

    </header>
  )
}

export default Header