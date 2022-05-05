import React, { FC, PropsWithChildren } from 'react'
import Head from 'next/head'
import { Navbar } from '../ui'


interface Props {
    children: JSX.Element,
    title?: string
}

export const Layout: FC<PropsWithChildren<Props>> = ({ children, title }) => {

    const origin = (typeof window === 'undefined' ? '' : window.location.origin)
    
    return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name="author" content="Isita" />
                <meta name="description" content="Info extra" />
                <meta name="keywords" content="x, pokemon, pokedex" />

                <meta property="og:title" content={title || 'Pokemon App'} />
                <meta property="og:description" content="Info extra" />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>
            <Navbar />
            <main style={{
                padding: '0 20px'
            }}>
                {children}
            </main>
        </>
    )
}

