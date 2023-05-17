"use client"
import {Container, Row , Col, NavLink} from 'react-bootstrap'
import { FooterLogo, IconDownloadAppStore, IconDownloadPlayStore } from '@/constants/svg'

export default function MainFooter() {
  return (
    <footer>
        <Container>
            <Row>
                <Col lg={3} md={3} >
                <div className='footerlogo'><FooterLogo /></div>   
                  <p> Trade your goods and services with others in your community with ease." </p>
                </Col>
                <Col lg={2} md={2}>
                  <h3>About</h3>
                  <ul>
                  <li> <NavLink>About Us </NavLink></li>
                  <li> <NavLink>Terms & Conditions </NavLink></li>
                  <li> <NavLink>Privacy Policy </NavLink></li>
                  <li> <NavLink>Blogs </NavLink></li>
                  </ul>
                   </Col>
                <Col lg={2} md={2}>
                   <h3>Information</h3>
                   <ul>
                  <li> <NavLink>Help Center </NavLink></li>
                  <li> <NavLink>Money Refund </NavLink></li>
                  <li> <NavLink>Shipping </NavLink></li>
                  <li> <NavLink>Contact us </NavLink></li>
                  </ul>

                   </Col>
                <Col lg={2} md={2}> 
                    <h3>For Users</h3>
                    <ul>
                  <li> <NavLink>Login </NavLink></li>
                  <li> <NavLink>Register </NavLink></li>
                  <li> <NavLink>Settings </NavLink></li>
                  <li> <NavLink>My Orders  </NavLink></li>
                  </ul>

                </Col>
                <Col lg={2} md={2} className='footerAppLink'>
                    <h3>Get app</h3> 
                    <NavLink> <IconDownloadAppStore /></NavLink>
                    
                    <NavLink> <IconDownloadPlayStore /></NavLink>
                    
                    </Col>
            </Row>
        </Container>

      <section className='copyRight'>
        <Container>
          <Row>
            <Col lg={12}>
              <div className='copy__content'>© 2023 MeeM Souk. </div>
            </Col>
          </Row>
        </Container>
      </section>


    </footer>
  )
}
