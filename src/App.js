import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Für Herr Senften</p>
        <table>
          <thead>
            <tr>
              <th>Base Url</th>
              <th>Resource Url</th>
              <th>Method</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>"/gradebook"</td>
              <td>"/teacher/register"</td>
              <td>"POST"</td>
            </tr>
            <tr>
              <td>"/gradebook"</td>
              <td>"/teacher/login"</td>
              <td>"POST"</td>
            </tr>
            <tr>
              <td>"/gradebook"</td>
              <td>"/grade/add"</td>
              <td>"POST"</td>
            </tr>
            <tr>
              <td>"/gradebook"</td>
              <td>"/grade/delete/{'id'}"</td>
              <td>"DELETE"</td>
            </tr>
            <tr>
              <td>"/gradebook"</td>
              <td>"/grade/update/{'id'}"</td>
              <td>"PUT"</td>
            </tr>
            <tr>
              <td>"/gradebook"</td>
              <td>"/grade"</td>
              <td>"GET"</td>
            </tr>
            <tr>
              <td>"/gradebook"</td>
              <td>"/student/register"</td>
              <td>"POST"</td>
            </tr>
            <tr>
              <td>"/gradebook"</td>
              <td>"/student/login"</td>
              <td>"POST"</td>
            </tr>
            <tr>
              <td>"/gradebook"</td>
              <td>"/subject/add"</td>
              <td>"POST"</td>
            </tr>
            <tr>
              <td>"/gradebook"</td>
              <td>"/subject/delete/{'id'}"</td>
              <td>"DELETE"</td>
            </tr>
            <tr>
              <td>"/gradebook"</td>
              <td>"/subject/update/{'id'}"</td>
              <td>"PUT"</td>
            </tr>
            <tr>
              <td>"/gradebook"</td>
              <td>"/subject"</td>
              <td>"GET"</td>
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
