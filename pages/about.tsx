import { NextPage } from 'next';
import React from 'react';
import Body from '../components/About/Body';
import Hero from '../components/About/Hero';

type Props = {};

const About: NextPage = (props: Props) => {
    return (
        <div className='px-4'>
            <Hero />
            <Body />
        </div>
    );
};

export default About;
