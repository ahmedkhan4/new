import React from "react";
import { Link, useLocation } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import {BsArrowLeft} from 'react-icons/bs'


const DetailPage = () => {
  const location = useLocation();
  const { from } = location.state;
  console.log(from);


  return (
    <>
      <Container>
        <div className="detailPage">
          <Link to="/">
            <button className="backBtn"> <BsArrowLeft/> Back</button>
          </Link>
          <div className="detailPageText">
            <div>
              <img src={from.flags.png} />
            </div>
            <div>
              <h2>{from.name.common}</h2>
              {/* <h2>{from.name.nativeName.eng.official}</h2> */}
              <h3><span>Population: </span>{from.population}</h3>
              <h4><span>Region: </span> {from.region}</h4>
              <h4><span>Subregion: </span> {from.subregion}</h4>
              <h5><span>Capital: </span> {from.capital}</h5>
            </div>
            <div> <h5><span>Top Level Domain: </span> {from.tld}</h5>
              {/* <h5><span>Languages: </span> {from.languages.eng}</h5> */}
              {/* <h4><span>Currencies: </span> {from.currencies.CKD.symbol}</h4> */}</div>

          </div>
        </div>
      </Container>


    </>
  );
};

export default DetailPage;