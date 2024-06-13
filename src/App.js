import './App.css';
import dataset from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import {useState} from "react";
import Button from "react-bootstrap/Button";

function App() {
  const [view, setView] = useState(dataset);
  const [route] = useState([]);

  const handleFolder = (files) => {
    route.push(view);
    setView(files);
  }

  const handleSort = (attr) => {
    const sortedView = [...view].sort((a, b) => {
      const aValue = a[attr];
      const bValue = b[attr];

      if (aValue !== undefined && bValue !== undefined) {
        return aValue.localeCompare(bValue);
      }

      if (aValue === undefined) return 1;
      if (bValue === undefined) return -1;

      return 0;
    });

    setView(sortedView);
  };

  return (
    <div className="wrapper">
      <Button onClick={() => setView(route.pop())}>Back</Button>
      <Table striped bordered hover>
        <thead>
        <tr className="header">
          <th onClick={() => handleSort('type')}>Type</th>
          <th onClick={() => handleSort('name')}>Name</th>
          <th onClick={() => handleSort('added')}>Added</th>
        </tr>
        </thead>
        <tbody>
          {
            view.map((item) => <tr key={item.name}>
              <td>{item.type === 'folder' ? <Button onClick={() => handleFolder(item.files)}>Folder</Button> : item.type }</td>
              <td>{item.name}</td>
              <td>{item.added}</td>
            </tr> )
          }
        </tbody>
      </Table>
    </div>
  );
}

export default App;
