import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";
import axios from "axios"


const Home = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState("");

    console.log("search", search)
    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((res) => {
                console.log("res", res);
                const data = res.data
                setData(data)

            })
            .catch((error) => console.log(error));
    }, []);


    return (
        <>
            <section className='HomeSection'>
                <Container>
                    <div className="row">
                        <div className="searchDrop">

                            <Form className="d-flex">
                                <Form.Control
                                    type="text"
                                    placeholder="Search for a country..."
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </Form>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Filter by Region
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">
                                        {data.splice(0, 5).map((item, index) => {
                                            return (
                                                <React.Fragment key={index}>
                                                    <p>{item.region}</p>
                                                </React.Fragment>
                                            )
                                        })}
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="row home">
                        {data.splice(0, 24)
                            .filter((val) => {
                                console.log("val", val)
                                if (search === "") {
                                    return val;
                                } else if (
                                    val.name.common &&
                                    val.population &&
                                    val.region &&
                                    val.capital
                                        .toLocaleLowerCase()
                                        .includes(search.toLocaleLowerCase())
                                ) {
                                    return val;
                                }
                            })
                            .map((item, index) => {
                                console.log("item", item)
                                return (
                                    <React.Fragment key={index}>
                                        <div className="col-4 gy-4 gx-4 w-25">
                                        <Link to="/detailPage" state={{ from: item }}>
                                            <div className="homeText">
                                                <img src={item.flags.png} />
                                                <h2>{item.name.common}</h2>

                                                <div className='tagsText'>
                                                    <h3><span>Population: </span>{item.population}</h3>
                                                    <h4><span>Region: </span> {item.region}</h4>
                                                    <h5><span>Capital: </span> {item.capital}</h5>
                                                </div>
                                            </div>
                                        </Link>
                                        </div>
                                    </React.Fragment>
                                );
                            })}
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Home

