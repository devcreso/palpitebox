import React, { useState } from 'react'
import PageTitle from '../componentes/PageTitle'


const Pesquisa = () => {
    const [form, setForm] = useState({
        Nome: '',
        Email: '',
        Whatsapp: '',
        Nota: 0
    })
    const notas = [0, 1, 2, 3, 4, 5]
    const [success, setSuccess] = useState(false)
    const [retorno, setRetorno] = useState({})
    const save = async () => {
        try {
            const response = await fetch('/api/save', {
                method: 'POST',
                body: JSON.stringify(form)
            })
            const data = await response.json()
            setSuccess(true)
            setRetorno(data)
        } catch (err) {
        }
    }
    const onChange = evt => {
        const value = evt.target.value
        const key = evt.target.name
        setForm(old => ({
            ...old,
            [key]: value
        }))
    }

    return (
        <div className='pt-6'>
            <PageTitle title='Pesquisa'/>
            <h1 className='my-4 text-center font-bold text-2xl'>Críticas e sugestões</h1>
            <p className='mb-5 text-center font-bold'>O restaurante X sempre busca  arender melhor seus clientes.<br />
                Por isso, estamos sempre abertos a ouvir sua opinião.</p>
            {!success && <div className=' w-1/5 mx-auto'>
                <label className='font-bold'>Seu nome</label>
                <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome} />
                <label className='font-bold'>Email</label>
                <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Email' onChange={onChange} name='Email' value={form.Email} />
                <label className='font-bold'>Whatsapp</label>
                <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Whatsapp' onChange={onChange} name='Whatsapp' value={form.Whatsapp} />
                <label className='font-bold'>Nota</label>
                <div className='flex pt-2 pb-6'>
                    {notas.map(nota => {
                        return (<label className='block w-1/6 text-center'>
                            {nota}<br/>
                            <input type='radio' name='Nota' value={nota} onChange={onChange}/>
                        </label>
                        )
                    })
                    }
                </div>
                <button className='px-32 bg-blue-400 p-4 rounded-lg shadow-lg hover:shadow mb-4' onClick={save}>Salvar</button>
            </div>}
            {success && <div className=' w-1/5 mx-auto'>
                <p className='mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3'>Obrigado por contribuir com sua opinião!</p>
                {
                    retorno.showCoupon && <div className='text-center border p-4 shadow mb-4'>
                        Seu Cupom: <br />
                        <span className='font-bold text-2xl'>{retorno.Cupom}</span>
                    </div>
                }
                {
                    retorno.showCoupon && <div className='text-center border p-4 shadow mb-4'>
                        <span className='font-bold block p-4'>{retorno.Promo}</span>
                        <br />
                        <span className='italic'>Tire um print ou foto desta tela e apresente ao garçom</span>
                    </div>
                }
            </div>}
        </div>
    )
}
export default Pesquisa