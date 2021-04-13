import React from 'react'

const Footer = () => {
    return (
        <div className='bg-gray-700'>
            <div className='container mx-auto p-4 text-center font-bold text-white'>
                Projeto desenvolvido por: Creso Junior / {' '}
                <a href='https://www.linkedin.com/in/creso-pereirajr/' target='_blank' className='hover:underline'>Linkedin</a> / {' '}
                <a href='https://github.com/devcreso' target='_blank' className='hover:underline'>Github </a> /  {' '}
                <a href='https://www.instagram.com/dev.cjunior/' target='_blank' className='hover:underline'>Instagram</a>
                <div className='mt-4'>
                    <img className='inline p-4' src='/logo_semana_fsm.png' />
                    <img className='inline p-4' src='/logo_devpleno.png' />
                </div>
            </div>
        </div>
    )
}

export default Footer