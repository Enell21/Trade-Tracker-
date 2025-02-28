import { BrowserRouter as Link } from 'react-router-dom';
import './table.module.css';

function Table() {
  return (
    <div className='table-center'>
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
          <tr>
            <td>prize of entry</td>
            <td>prize of close</td>
            <td>size of contracts</td>
            <td>how much we won or lost</td>
            <td>
              <Link>
                <button>More info</button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
