import React from 'react'
import Layout from '../componentes/Layout'

import '../css/styles.css'


const MyApp = ({ Component, pageProps }) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
export default MyApp