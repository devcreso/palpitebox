import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../componentes/PageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
    const {data, error} = useSWR('/api/get-promo', fetcher)
    return (
        <div>
            <PageTitle title='Bem-vindo'/>
            <p className='mt-10 text-center font-bold'>
                O restaurante X sempre busca atender melhor seus clientes.<br />
                Por isso, estamos sempre abertos a ouvir sua opinião.
            </p>
            <div className='text-center font-bold my-12'>
                <Link href='/pesquisa'>
                    <a className='px-32 bg-blue-400 p-4 rounded-lg shadow-lg hover:shadow'>Dar opinião ou sugestão</a>
                </Link>
            </div>
            {!data && <p>Carregando...</p>}
            {!error && data && data.showCoupon &&
            <p className='mt-10 mb-5 text-center font-bold'>
                {data.message}
            </p>
            }
        </div>
    )
}

export default Index