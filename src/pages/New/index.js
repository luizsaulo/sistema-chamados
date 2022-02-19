
import { useState } from 'react';

import Header from '../../components/Header';
import Title from '../../components/Title';

import './new.css';
import { FiPlusCircle } from 'react-icons/fi';

export default function New(){

    const [assunto, setAssunto] = useState('Suporte');
    const [status, setStatus] = useState('Aberto');

    function handleRegister(e){
        e.preventDefault();
        alert('teste')
    }

    //Chamado quando troca o assunto
    function handleChangeSelect(e){
        setAssunto(e.target.value);        
    }

    //Chamado quando troca o status
    function handleOptionChange(e){
        setStatus(e.target.value);
    }

    return(
        <div>
            <Header />

            <div className='content'>
                <Title name='Novo chamado'>
                    <FiPlusCircle size={25} />
                </Title>

                <div className='container'>

                    <form className='form-profile' onSubmit={handleRegister} >

                        <lable>Cliente</lable>
                        <select>
                            <option key={1} value={1}>
                                Scuderia Ferrari
                            </option>
                        </select>

                        <label>Assunto</label>
                        <select value={assunto} onChange={handleChangeSelect}>
                            <option value='Suporte'>Suporte</option>
                            <option value='Visita Tecnica'>Visita Técnica</option>
                            <option value='Financeiro'>Financeiro</option>
                        </select>

                        <label>Status</label>
                        <div className='status'>
                            <input
                            type='radio'
                            name='radio'
                            value='Aberto'
                            onChange={handleOptionChange}
                            checked={ status === 'Aberto' }
                            />
                            <span>Em aberto</span>

                            <input
                            type='radio'
                            name='radio'
                            value='Progresso'
                            onChange={handleOptionChange}
                            checked={ status === 'Progresso' }
                            />
                            <span>Em progresso</span>

                            <input
                            type='radio'
                            name='radio'
                            value='Atendido'
                            onChange={handleOptionChange}
                            checked={ status === 'Atendido' }
                            />
                            <span>Atendido</span>
                        </div>

                        <label>Complemento</label>
                        <textarea
                            type='text'
                            placeholder='Descreva seu problema (opcional).'
                        />

                        <button type='submit'>Registrar</button>

                    </form>

                </div>

            </div>
        </div>
    )
}