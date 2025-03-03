import { Link } from "react-router-dom";
import "./table.module.css";

function Table({ trades }) {
  return (
    <div className="table-center">
      <table>
        <thead>
          <tr>
            <th>Entry</th>
            <th>Close</th>
            <th>Size</th>
            <th>PNL</th>
            <th>More info</th>
          </tr>
        </thead>
        <tbody>
          {trades.length === 0 ? (
            <tr>
              <td colSpan="5">No trades</td>
            </tr>
          ) : (
            trades.map((trade, index) => (
              <tr key={index}>
                <td>{trade.tradeEntry}</td>
                <td>{trade.prizeOnSell}</td>
                <td>{trade.tradeSize}</td>
                <td>{trade.PNL}</td>
                <td>
                  <Link to={`/table/${index}`}>More info</Link>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
