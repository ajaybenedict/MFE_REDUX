import './App.css';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TasksList from './components/TasksList';
import { Provider } from 'react-redux'
import { store } from './store';

const MainApp = () => {
    return(
      <React.StrictMode>
        <Provider store={store}>
          <Container>
          <Row className="justify-content-md-center">
            <Col lg="6">
              <TasksList />
            </Col>
          </Row>
        </Container>
        </Provider>
      </React.StrictMode>
    )
}
export default MainApp;