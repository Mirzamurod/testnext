import Link from 'next/link';
import React, { useState } from 'react';
import './location.module.css'
import Axios from 'axios';


const Location = () => {
    const url = 'https://api.telegram.org/bot'
    const telegram_bot_id = '5691978661:AAHwO_BOoZ41sfN957Q8VX9nlDbto-9qqfE'
    const chat_id = -1001865097901;
    const [username, setUsername] = useState("");
    const [useremail, setUseremail] = useState("");
    const [message, setMessage] = useState("");


    const handleusername = (event) => {
        const user_name = event.target.value;
        setUsername(user_name);
    };

    const handleemail = (event) => {
        const user_email = event.target.value;
        setUseremail(user_email);
    };


    const submitUser = async (e) => {
        e.preventDefault();
        const userdata = [
            `Cообщение от сайта: Saidparadent.uz\n\n\nИмя пациента: ${username}\nТелефон номер: ${useremail}\n\nСотрудники: @Sardor_say @stom_9910\n\n\nПациент ждёт звонок`
        ];
        await Axios({
            baseURL: 'https://api.telegram.org/bot' + telegram_bot_id + '/sendMessage',
            method: 'POST',

            headers: {
                "Content-Type": "application/json",
                "cache-control": "no-cache"
            },
            data: JSON.stringify({
                'chat_id': chat_id,
                'text': userdata.toString()
            })
        })
            .then((result) => {
                setMessage(result.data.msg);
                console.log(result.data);
                console.log(result.data.message);
            });
    };
    return (
        <section className='location'>
            <h1 className='location__titile'>
                Мы ждем вас
            </h1>
            <div className='location__info'>
                <div className='location__left'>
                    <Link href={`https://www.google.com/maps/place/41%C2%B022'30.0%22N+69%C2%B017'55.0%22E/@41.374997,69.298616,16z/data=!4m5!3m4!1s0x0:0xe5137b202ceea09c!8m2!3d41.374997!4d69.298616`}>
                        <iframe className='locat-map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5987.916020117938!2d69.298616!3d41.374997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe5137b202ceea09c!2zNDHCsDIyJzMwLjAiTiA2OcKwMTcnNTUuMCJF!5e0!3m2!1sru!2s!4v1667900244960!5m2!1sru!2s" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy='no-referrer'
                            style={{
                                border: '0px',
                                // width: '100%'
                            }}
                        >
                        </iframe>
                    </Link>
                </div>
                <div className='location__right'  id='toSection5'>
                    <h1 className='location__right-titile'>
                        ЗАПОЛНИТЕ ФОРМУ
                        <span>для  записи на прием</span>
                    </h1>
                    <form className='location__form' onSubmit={submitUser}>
                        <div className='location__form-inputs'>
                            <input
                                type="text"
                                name="user_name"
                                placeholder='Введите своё имя: '
                                onChange={(e) => handleusername(e)}
                            />

                            <input type="tel"
                                name="user_email"
                                className="form-control p-2"
                                onChange={(e) => handleemail(e)}
                                placeholder='+998(——) ——— —— ——'
                            />
                        </div>
                        <div className='location__address'>
                            <span>Юнус-Абад 14-квартал</span>
                            <span>
                                14-дом
                            </span>
                        </div>
                        <input className='send_form' type='submit' value='оставить заявку' />
                    </form>
                </div>
            </div >
        </section >
    );
};



export default Location;