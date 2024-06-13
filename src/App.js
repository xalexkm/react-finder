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

  return (
    <div className="wrapper">
      <Button onClick={() => setView(route.pop())}>Back</Button>
      <Table striped bordered hover>
        <thead>
        <tr>
          <th>Type</th>
          <th>Name</th>
          <th>Added</th>
        </tr>
        </thead>
        <tbody>
          {
            view.map((item) => <>
              <tr>
                <td>{item.type === 'folder' ? <Button onClick={() => handleFolder(item.files)}>Folder</Button> : item.type }</td>
                <td>{item.name}</td>
                <td>{item.added}</td>
              </tr>
            </> )
          }
        </tbody>
      </Table>
    </div>
  );
}

export default App;
