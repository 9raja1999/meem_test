"use client"

import { useEffect, useState, useRef } from "react"
import { InputGroup, Form } from 'react-bootstrap'
import { Popover, List, Typography } from 'antd'
import { SearchIcon, AwrrowDown } from "../../constants/svg"
import { useRouter } from 'next/navigation'




function RecentList({ list, searchTerm, searchFrom, clearAll, showData, goToProduct }) {

    const highlightText = (text, searchTerm) => {
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        return text.replace(regex, '<strong>$1</strong>');

    }


    return (
        <div className="recentsearch__drop__containers">
            {
                (showData || searchTerm.length == 0) ? <>
                    <div className="header">
                        <h1>Recent Searches</h1>
                        <p onClick={clearAll}>Clear All</p>
                    </div>
                    <div className="body">
                        {
                            // Show the recent searches from localstorage
                            list?.map((el, idx) => {
                                return <div key={idx} className="tag">
                                    <SearchIcon />
                                    <p>{el}</p>
                                </div>
                            })
                        }
                    </div>
                </> : (
                    <div className="list__similar">
                        {/* If no recent searches then show the list */}
                        <ul>
                            {
                                searchFrom.map((item, idx) => {
                                    return <li
                                        key={item}
                                        onClick={goToProduct}
                                        dangerouslySetInnerHTML={{
                                            __html: highlightText(item, searchTerm)
                                        }}
                                    />
                                })
                            }
                        </ul>
                    </div>
                )
            }
        </div>
    )
}


export default function RecentSearch() {
    const router = useRouter();
    const [selectedcategory, setSelectedcategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const [showData, setShowData] = useState(true);
    const [categories, setCategories] = useState([
        "All",
        "Mobile Phones",
        "Skincare",
        "Home Living",
        "Furniture",
        "Electronics",
        "Jewelry",
        "Outdoor"
    ]);
    const data = [
        "iPhone X",
        "Samsung Phone",
        "Sofa Chair",
        "Motorola Phone",
        "Brown Shoes",
        "iPhone",
        "iPhone X",
        "Samsung Phone"
    ];

    const goToProduct = () => {
        router.push('/pages/products')
    }

    return (

        <InputGroup className="recent__Search">
            <Popover
                trigger="click"
                placement="bottomLeft"
                overlayStyle={{ width: '137px' }}
                content={
                    <div className="all__categories__popover">
                        <ul>
                            {
                                categories.map((el, idx) => {
                                    return <li
                                        key={idx}
                                        className={el == selectedcategory ? 'yellowColor__para' : 'lightColor__para'}
                                        onClick={() => setSelectedcategory(el)}
                                    >{el}</li>
                                })
                            }
                        </ul>
                    </div>
                }
            >
                <InputGroup.Text className="fade__bg__grey">{selectedcategory.slice(0, 3) + ".."} <AwrrowDown /></InputGroup.Text>
            </Popover>
            <Popover
                trigger="click"
                placement='bottom'
                overlayStyle={{ width: '501px' }}
                content={
                    <RecentList
                        list={data}
                        searchTerm={searchTerm}
                        searchFrom={data}
                        clearAll={() => setShowData(false)}
                        showData={showData}
                        setShowData={() => setShowData(true)}
                        goToProduct={goToProduct}
                    />
                }
            >
                <Form.Control
                    placeholder="I'm searching for"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </Popover>
            <InputGroup.Text
                className={`rounded  ${!showData ? 'bg__yellow' : 'fade__bg__grey'}`}
            >
                <SearchIcon />
            </InputGroup.Text>
        </InputGroup>

    )
}
