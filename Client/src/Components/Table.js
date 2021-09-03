import React from "react";
import "../style/Table.css";
import numeral from "numeral";
import 'bootstrap/dist/css/bootstrap.min.css';

function Table({ countries }) {
  return (
    <div className="table">
      <table className="table table-dark table-striped table-hover">
        <thead>
          <tr>
            <th>Country</th>
            <th>Live Cases</th>
          </tr>
        </thead>
        <tbody>
       
          {countries.map(({ country, cases }) => (
            <tr>
              <th>{country}</th>
              <th>
                <strong>{numeral(cases).format("000,000")}</strong>
              </th>
            </tr>
          ))}
      </tbody>  
      </table>
    </div>
  );
}

export default Table;
