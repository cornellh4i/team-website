import React from 'react';
import Head from '../components/head';
import Section from '../components/section';
import { Container } from 'reactstrap';

export default function Error() {
    return (
        <>
            <Head title="404 Not Found" />
            <Section grey>
            <Container>
                <h1 className="text-center error-title">404 Not Found</h1>
                <p className="text-center error-description"> Sorry! This page does not exist! </p>
            </Container>
            </Section>
        </>
        );
}
