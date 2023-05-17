"use client"
import { Container, Row , Col, NavLink } from "react-bootstrap"
import Image from 'next/image';

export const TopItem = () => {
  return (
    <div className="topitem">
       <Container>
            <Row>
                <Col lg={12} >
                    <div className="slider-top">
                        <div className="topitembox">
                            
                            <div className="productheading">
                                <NavLink ><h3>Huawei Mobile  </h3></NavLink>
                                <div className="Location">San Antonio, CA</div>
                            </div>

                            <div className="">
                              <Image   src="/images/topitem/p1.png"  width={146} height={180}     alt="Huawei Mobile"     />
                            </div>

                        </div>


                    </div> 
                </Col>
            </Row>


        </Container>





    </div>
  )
}
