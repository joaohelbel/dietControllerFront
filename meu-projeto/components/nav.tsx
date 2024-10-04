'use client';
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import logo from '../public/images/logo.png';
import Image from 'next/image';
import style from '../components/style.module.css'



export default function Nav() {
    return (
        <Container fluid>
            <Col className={style.boxTop}>
                <Row>
                    <Image src={logo} alt="logo" className={style.logo} />
                </Row>
                <Row>
                    <h1>Diet Controller</h1>
                    <p className={style.paragrafo}>
                        Comece uma vida saudável agora mesmo com o Diet Controller, 
                        o aplicativo ideal para quem busca melhorar seus hábitos de 
                        alimentação e bem-estar. Com ele, você pode acompanhar suas 
                        refeições, definir metas nutricionais e monitorar seu 
                        progresso de maneira simples e intuitiva. Dê o primeiro 
                        passo para uma rotina mais equilibrada e saudável! Baixe o Diet 
                        Controller hoje e comece a transformar sua saúde
                    </p>
                    <Button className={style.button}>Comece agora mesmo!</Button>
                </Row>
            </Col>
        </Container>
    );
}

