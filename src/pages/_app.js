import React, { useEffect, useState } from 'react'
import LoadingScreen from '../components/shared/Loading/loadingscreen'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
    }, [])

    useEffect(() => {
        setTimeout(() => setLoading(true), 6000)
    })

    return !loading ? <LoadingScreen /> : <Component {...pageProps} />
}

export default MyApp
