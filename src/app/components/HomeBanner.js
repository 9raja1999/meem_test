"use client" 
import {Container, Row , Col, NavLink} from 'react-bootstrap' 
import { CategroyIconMenu } from '@/constants/svg'

export default function HomeBanner() {
  return (
    <section className='homebannerarea' style={{backgroundImage: `url(/images/bannerHome.png)`}}>
        <Container>
            <Row>
                <Col lg={3}  md={3}>
                    <div className='headerSidebar'>
                        <h4><CategroyIconMenu />Category</h4>
                            <ul>
                                <li><NavLink>Mobile Phones</NavLink>
                                    <ul>
                                        <li><NavLink>Mobile Phones</NavLink></li>
                                        <li><NavLink>Skincare</NavLink></li>
                                        <li><NavLink>Home Living</NavLink></li>
                                        <li><NavLink>Furniture</NavLink></li>
                                        <li><NavLink>Electronics</NavLink></li>
                                        <li><NavLink>Jewelry</NavLink></li>
                                        <li><NavLink>Jewelry</NavLink></li>
                                        <li><NavLink>Furniture</NavLink></li>
                                        <li><NavLink>Home Living</NavLink></li>
                                    </ul>

                                </li>
                                <li><NavLink>Skincare</NavLink>
                                      <ul>
                                        <li><NavLink>Skincare Phones</NavLink></li>
                                        <li><NavLink>Skincare</NavLink></li>
                                        <li><NavLink>Home Living</NavLink></li>
                                        <li><NavLink>Furniture</NavLink></li>
                                        <li><NavLink>Electronics</NavLink></li>
                                        <li><NavLink>Jewelry</NavLink></li>
                                        <li><NavLink>Jewelry</NavLink></li>
                                        <li><NavLink>Furniture</NavLink></li>
                                        <li><NavLink>Home Living</NavLink></li>
                                     </ul>
                                    </li>
                                <li><NavLink>Home Living</NavLink></li>
                                <li><NavLink>Furniture</NavLink></li>
                                <li><NavLink>Electronics</NavLink></li>
                                <li><NavLink>Jewelry</NavLink></li>
                                <li><NavLink>Jewelry</NavLink></li>
                                <li><NavLink>Furniture</NavLink></li>
                                <li><NavLink>Home Living</NavLink>
                                <ul>
                                        <li><NavLink>Home Living</NavLink></li>
                                        <li><NavLink>Skincare</NavLink></li>
                                        <li><NavLink>Home Living</NavLink></li>
                                        <li><NavLink>Furniture</NavLink></li>
                                        <li><NavLink>Electronics</NavLink></li>
                                        <li><NavLink>Jewelry</NavLink></li>
                                        <li><NavLink>Jewelry</NavLink></li>
                                        <li><NavLink>Furniture</NavLink></li>
                                        <li><NavLink>Home Living</NavLink></li>
                                     </ul>
                                
                                </li>
                            </ul>
                    </div>
                    
                    </Col> 
                <Col lg={9}  md={9} className=''>
                    <div className='h-100 d-inline-block'>
                    <div className='banner__Title my-auto '>
                        <h1>Welcome to the World of Bartering! </h1>
                        <p>Trade your goods and services with others in your community with ease."</p>
                        <button className='button__Bluebg ' >Explore Now</button>
                        </div>
                    </div>
                    </Col> 
            </Row>
        </Container>

    </section>
  )
}
