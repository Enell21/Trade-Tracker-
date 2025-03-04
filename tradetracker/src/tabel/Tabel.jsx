import { Link } from "react-router-dom";
import "./table.module.css";

function Table({ data }) {
  return (
    <div className="table-center">
      <table>
        <thead>
          <tr>
            <th>Entry</th>
            <th>Close</th>
            <th>Size</th>
            <th>PNL</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((trade, index) => (
              <tr key={index}>
                <td>{trade.tradeEntry}</td>
                <td>{trade.prizeOnSell}</td>
                <td>{trade.tradeSize}</td>
                <td>{trade.PNL}</td>
                <td>{trade.tradeDescription}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No trades</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
