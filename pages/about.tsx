import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Body from '../components/About/Body';
import Hero from '../components/About/Hero';

type Props = {};

const About: NextPage = (props: Props) => {
    return (
        <>
            <Head>
                <title>My Journey - MF</title>
                <meta name="Graphic Designer" content="Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="px-4">
                <Hero />
                <Body />
            </div>
        </>
    );
};

export default About;
