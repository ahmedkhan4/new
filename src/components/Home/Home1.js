import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"

const Home = () => {
    const [data1, setData] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                console.log("res", res);
                const data = res.data
                setData(data)

            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <div className="container py-3">
                <div className="row text-center fs-3">
                    <input
                        type="text"
                        placeholder="search..."
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="row">
                    {data1
                        .filter((val) => {
                            if (search === "") {
                                return val;
                            } else if (
                                val.name &&
                                val.email &&
                                val.username
                                    .toLocaleLowerCase()
                                    .includes(search.toLocaleLowerCase())
                            ) {
                                return val;
                            }
                        })
                        .map((item,index) => {
                            return (
                                  <React.Fragment key={index}>
                                  <div className="col-4 gy-3 gx-3 w-25">
                                        <Link to="/detailPage" state={{ from: item }}>
                                            <div className="card">
                                                <img src="..." className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">
                                                        {item.name}
                                                    </h5>
                                                    <p className="card-text">{item.email}</p>
                                                    <a href="#" className="btn btn-primary">
                                                        {item.username}
                                                    </a>

                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                  </React.Fragment>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default Home;