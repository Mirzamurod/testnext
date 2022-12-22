import React from 'react'
import Doctor from '../../Doctor/doctor'
import Sertificats from '../../Sertificats/sertificats'
import Works from '../../Works/works'
import WorkVideo from '../../Workvideo/workVideo'
import Clinic from '../../Clinic/clinic'
import Form from '../../Form/form'
import Service from '../../Service/service'
import Location from '../../Location/location'
import Result from '../../Results/results'
import Standarts from '../../Standarts/standarts'

const Main = () => {
  return (
    <main className='container'>
        <Service />
        <Doctor />
        <Sertificats />
        <Works />
        <Clinic />
        <Standarts />
        <Location />
        <Result />
    </main>
  )
}

export default Main