"use client"

import { Form, InputGroup } from 'react-bootstrap'
import { SearchIcon, PointLocationIcon, LocationBlueIcon } from "../../../constants/svg"
import { useState, useRef, useEffect } from 'react'
import { Divider } from 'antd'
import Image from 'next/image'
import MapImage from '../../../assets/images/map/map.png'

const data = [
    {
        location: "Terminal 3 - Dubai International Airport",
        airport: "Dubai - United Arab Emirates"
    },
    {
        location: "Terminal 3 - Dubai International Airport",
        airport: "Dubai - United Arab Emirates"
    },
    {
        location: "Terminal 3 - Dubai International Airport",
        airport: "Dubai - United Arab Emirates"
    },
]




export default function SearchLocation({ onCancel, initialstep }) {

    const [step, setStep] = useState(initialstep);

    const inputRef = useRef(null)
    const [location, setLocation] = useState('');
    const [selectedlocation, setSelectedlocation] = useState(null)

    useEffect(() => {
        return () => {
            console.log("CLOSING")
        }
    }, [])


    useEffect(() => {
        if (location !== '') {
            console.log("LOcation", location)
        }
    }, [location])

    const selectLocation = (id) => {
        let loc = data.find((el, idx) => idx == id)
        setSelectedlocation(loc)
        setStep(1)
    }

    return (
        <div>
            {
                step == 0 && <div className="search__field">
                    <InputGroup>
                        <SearchIcon />
                        <Form.Control
                            placeholder="Search"
                            aria-describedby="basic-addon1"
                            ref={inputRef}
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </InputGroup>
                    {
                        location.length > 0 ? (
                            <div className='list__data'>
                                {
                                    data.map((el, idx) => {
                                        return <div key={idx} className='dropdoewn__locs' onClick={() => selectLocation(idx)}>
                                            <div>
                                                <LocationBlueIcon />
                                            </div>
                                            <div className='right'>
                                                <p className='darkColor__para'>{el.location}</p>
                                                <p className='lightColor__para'>{el.airport}</p>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        ) : (
                            <>
                                <Divider></Divider>
                                <div className='select__location'>
                                    <PointLocationIcon />
                                    <p>Use current location</p>
                                </div>
                            </>
                        )
                    }
                </div >
            }
            {
                step == 1 && <div className='maplocation__search'>
                    <div className='map__display'>

                    </div>
                    <div className='input margin_top_20'>
                        <input placeholder='Street Name' className='enter__input' />
                    </div>
                    <div className='margin_top_20'>
                        <label className='input__label'>Address <span>*</span></label>
                        <div className='input '>
                            <input placeholder='Street Name' value={selectedlocation.location} className='enter__input' />
                        </div>
                    </div>

                    <div className='margin_top_23'>
                        <div className='blue__button' onClick={() => onCancel()}>
                            <p>Done</p>
                        </div>
                    </div>

                </div>
            }
        </div >
    )
}
