import React, { useState } from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll/modules';
import './navbar.module.css'

import { GrFormClose } from "react-icons/gr";


const showOrders = () => {

    return (
        <div className='priceModal container'>
            <div>
                <p className='modal-title'>SAIDPARADENT</p>
                <p className='modal-subtitle'>Прейскурант стоматологических услуг</p>
            </div>
            <div className='modal'>
                <div className='modal-section'>
                    <p className='modal-section-title'>Лечение кариеса</p>
                    <div className='modal-section-price'>
                        <p>Светокомпазитная пломба</p>
                        <p>от 250.000 до 600.000сум</p>
                    </div>
                    <div className='modal-section-price'>
                        <p>Рестоврация</p>
                        <p>от500.000 до 1.000.000сум</p>
                    </div>
                </div>
                <div className='modal-section'>
                    <p className='modal-section-title'>Лечение переодонтита</p>
                    <div className='modal-section-price'>
                        <p>1-е посещение анестезия+промывание каналов</p>
                        <p>150.000сум</p>
                    </div>
                    <div className='modal-section-price'>
                        <p>2-е посещение анестезия+промывание каналов</p>
                        <p>150.000сум</p>
                    </div>
                    <div className='modal-section-price'>
                        <p>3-е посещение анестезия+промывание каналов</p>
                        <p>от 300.000 до 400.000сум</p>
                    </div>
                </div>
                <div className='modal-section'>
                    <p className='modal-section-title'>Лечение заболеваний десен</p>
                    <div className='modal-section-price'>
                        <p>Чистка зубов(удаление камней+полировка) за один зуб</p>
                        <p>50.000 сум</p>
                    </div>
                    <div className='modal-section-price'>
                        <p>Полная профессиональная чистка зубов</p>
                        <p>от400 000 до 1 000 000 сум</p>
                    </div>
                    <div className='modal-section-price'>
                        <p>Иньекции(витамины,линкомицин)</p>
                        <p>50.000 сум</p>
                    </div>
                    <div className='modal-section-price'>
                        <p>Отбелиевание</p>
                        <p>2.000.000 сум</p>
                    </div>
                </div>
                <div className='modal-section'>
                    <p className='modal-section-title'>Лечение пульпита</p>
                    <p className='modal-section-subtitle'>Анестезия+удаление нерва+пломбировка канала</p>
                    <div className='modal-section-price'>
                        <p>Однокорневого зуба</p>
                        <p>300.000сум</p>
                    </div>
                    <div className='modal-section-price'>
                        <p>Двухкорневого зуба</p>
                        <p>350.000сум</p>
                    </div>
                    <div className='modal-section-price'>
                        <p>Двухкорневого зуба</p>
                        <p>350.000сум</p>
                    </div>
                    <div className='modal-section-price'>
                        <p>Трехкорневого зуба</p>
                        <p>400.000сум</p>
                    </div>
                    <div className='modal-section-price'>
                        <p>Временная пломба(герметизм,р/ф, мышьяк)</p>
                        <p>200.000сум</p>
                    </div>
                    <div className='modal-section-price'>
                        <p>R-снимок</p>
                        <p>50.000сум</p>
                    </div>


                </div>
                <div className='modal-section'>
                    <p className='modal-section-title'>Восстановление зубов</p>
                    <div className='modal-section-price'>
                        <p>Индивидуально отл.штифт.вкладкой </p>
                        <p>300.000сум</p>
                    </div>
                    <div className='modal-section-price'>
                        <p>Стекловолоконный штифт</p>
                        <p>300.000сум</p>
                    </div>
                </div>
                <div className='modal-section'>
                    <p className='modal-section-title'>Хирургическая стоматология</p>
                    <div className='modal-section-price'>
                        <p>Простое удаление</p>
                        <p>250.000сум</p>
                    </div>
                    <div className='modal-section-price'>
                        <p>Сложное удаление</p>
                        <p>от 300.000сум до 700.000</p>
                    </div>
                    <div className='modal-section-price'>
                        <p>Детское удаление</p>
                        <p>150.000сум</p>
                    </div>
                    <div className='modal-section-price'>
                        <p>Перекоронорит</p>
                        <p>250.000сум</p>
                    </div>
                    <div className='modal-section-price'>
                        <p>Вскрытие переостита</p>
                        <p>250.000сум</p>
                    </div>
                    <div className='modal-section-price'>
                        <p>Резекция верхушки корня </p>
                        <p>от 1.000.000сум</p>
                    </div>
                </div>
                <div className='modal-section'>
                    <p className='modal-section-title'>Протезирование</p>
                    <div className='modal-section-price'>
                        <p>Коронка металлокерамическая </p>
                        <p>500.000сум</p>
                    </div>
                    <div className='modal-section-price'>
                        <p>Коронка цельнолитая</p>
                        <p>250.000сум</p>
                    </div>
                    <div className='modal-section-price'>
                        <p>Коронка оксид цирк с нанесением</p>
                        <p>1.500.000сум</p>
                    </div>
                    <div className='modal-section-price'>
                        <p>Сьемный пластинчатый протез </p>
                        <p>1.500.000сум</p>
                    </div>
                    <div className='modal-section-price'>
                        <p>Бюгельный протез</p>
                        <p>2.500.000сум</p>
                    </div>
                    <div className='modal-section-price'>
                        <p>Бюгельный протез на рельсах</p>
                        <p>от 5.000.000сум</p>
                    </div>
                    <div className='modal-section-price'>
                        <p>Валпласт  протез</p>
                        <p>2.500.000сум</p>
                    </div>
                    <div className='modal-section-price'>
                        <p>Микро протез</p>
                        <p>500.000сум</p>
                    </div>
                </div>
                <div className='modal-section'>
                    <p className='modal-section-title'>Имплантология</p>
                    <p className='modal-section-subtitle'>ИМПЛАНТЫ</p>
                    <div className='modal-section-price'>
                        <p>osstem , Inno ,Dio (корея)</p>
                        <p>300$</p>
                    </div>
                    <div className='modal-section-price'>
                        <p>Impro(германия) </p>
                        <p>400$</p>
                    </div>
                    <div className='modal-section-price'>
                        <p>Нкр. Синус лифтинг</p>
                        <p>200$</p>
                    </div>
                    <p className='modal-section-subtitle'>КОРОНКИ НА ИМПЛАНТЫ</p>
                    <div className='modal-section-price'>
                        <p>Металлокерамика( германия) 1 ед</p>
                        <p>1.200.000 сум</p>
                    </div>
                    <div className='modal-section-price'>
                        <p>Коронка на основе оксид циркония с нанесением керамической массы 1  </p>
                        <p>1.500.000 сум</p>
                    </div>
                    <div className='modal-section-price'>
                        <p>Коронка фул- циркон  1 ед</p>
                        <p>1.100.000</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


const Navbar = () => {
    let [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <nav className='nav__bar container'>
                <Link href='/'><Image className='logotype' src={'/logos.png'} width={75} height={75} alt='Logotip' /></Link>
                <label htmlFor="menu" className='nav__bar-label'></label>
                <input type="checkbox" name="" id="menu"></input>
                <ul className='nav__list'>
                    <label htmlFor="menu" className='nav__list-label'></label>
                    <li><Link className='nav__link unselectable' activeClass="active" to="toSection1" spy={true} smooth={true} offset={50} duration={500} delay={500}>Пациентам</Link></li>
                    <li><Link className='nav__link unselectable' activeClass="active" to="toSection2" spy={true} smooth={true} offset={50} duration={500} delay={500}>О клинике</Link></li>
                    <li><Link className='nav__link unselectable' activeClass="active" to="toSection3" spy={true} smooth={true} offset={50} duration={500} delay={500}>Услуги</Link></li>
                    <li><Link className='nav__link unselectable' activeClass="active" to="toSection4" spy={true} smooth={true} offset={50} duration={500} delay={500}>Наши работы</Link></li>
                    <li><Link onClick={() => setModalOpen(modalOpen = !modalOpen)} className={`nav__link ${modalOpen && 'active'}`} href='/'>Цены</Link></li>
                    <li><Link activeClass="active" to="toSection5" spy={true} smooth={true} offset={50} duration={500} delay={1000}><button className='nav__btn unselectable' type="button">Оставить заявку</button></Link></li>
                </ul>
                {modalOpen && (
                    <div className='shoping-cart'>
                        {showOrders()}
                    </div>
                )}
            </nav>
        </
















        >
    );
};



export default Navbar;