"use client"

import { Row, Col } from 'react-bootstrap'
import { MeemLogo } from '../../constants/svg'
import Link from 'next/link'

export default function Layout({ children }) {
    return (
        <div className="container">
            <Row>
                <Col lg={4} className='mx-auto'>
                    <div className='obvoarding__layout'>
                        <div className='logo__holder d-flex justify-content-center'>
                            <MeemLogo />
                        </div>
                        <div className='inner__holder'>
                            {children}
                        </div>
                        <div className='links__footer'>
                            <Link href='/'>About us</Link>
                            <Link href='/'>Privacy Policy</Link>
                            <Link href='/'>Terms & Conditions</Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
