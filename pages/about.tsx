import { NextPage } from 'next';
import React from 'react';
import Body from '../components/About/Body';
import Hero from '../components/About/Hero';

type Props = {};

const About: NextPage = (props: Props) => {
    return (
        <div>
            <Hero />
            <Body />
        </div>
    );
};

export default About;
