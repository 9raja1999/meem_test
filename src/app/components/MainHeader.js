"use client"
import Image from 'next/image'
import { Container, Row, Col, NavLink, InputGroup, Form } from 'react-bootstrap'
import { MainLogo } from '@/constants/svg'
import { Avatar, Button, Space, Popover } from "antd"
import { HeartIcon, BellIcon, DropIcon, LocationIcon, SearchIcon, AwrrowDown } from '../../constants/svg'

import { useEffect, useState } from 'react'
import SearchLocation from './location/SearchLocation'
import RecentSearch from './RecentSearch'
import CustomModal from './CustomModal'
import AvatarPopover from './AvatarPopover'
export default function MainHeader() {
  const [openlocation, setOpenlocation] = useState(false);


  return (
    <header>
      <Container>
        <Row>
          <Col lg={3} md={3} >
            <div className='logoListing'>
              <div className='main__Logo'>
                <NavLink><MainLogo /></NavLink>
              </div>

              <div className='item__ServiceLinking'>
                <ul>
                  <li><NavLink className='active'>Items</NavLink></li>
                  <li><NavLink>services </NavLink></li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={5} md={5}>
            <div className='recent__search__main'>
              <RecentSearch />
            </div>
          </Col>
          <Col lg={4} md={4} sm={12}>
            <div className='right__listing'>
              <div>
                <BellIcon />
              </div>
              <AvatarPopover />
              <div>
                <HeartIcon />
              </div>
              <button className='button__whitebg' style={{ height: '35px' }}> + Create New</button>
              <Space size={9} onClick={() => setOpenlocation(prev => !prev)}>
                <div>
                  <LocationIcon />
                </div>
                <p className='country__name'>Pakistan</p>
                <div>
                  <DropIcon />
                </div>
              </Space>
            </div>
          </Col>
        </Row>
      </Container>
      <CustomModal
        heading="Custom Location"
        open={openlocation}
        onCancel={() => setOpenlocation(false)}
      >
        <SearchLocation onCancel={() => setOpenlocation(false)} initialstep={0} />
      </CustomModal>
    </header>

  )
}
