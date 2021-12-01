import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Home from './pages/Home';
import Header from './components/layout/Header';
import { Col, Container, Row } from 'react-bootstrap';
import ReactConcepts from './pages/ReactConcepts';
import ReactHooks from './pages/ReactHooks';
import ReactFetching from './pages/ReactFetching';
import ReactStyling from './pages/ReactStyling';
import ReactRouter from './pages/ReactRouter';
import ReactRedux from './pages/ReactRedux';
import ReactTesting from './pages/ReactTesting';
import Movies from './pages/sess26/Movies';
import Studios from './pages/sess26/Studios';
import Login from './pages/sess26/Login';

function App() {
  const { title } = useSelector(({ base }) => base)

  useEffect(() => {
    document.title = title
  }, [ title ])

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Container>
          <Row>
            <Col>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/concepts" element={<ReactConcepts />} />
                <Route path="/hooks" element={<ReactHooks />} />
                <Route path="/fetching" element={<ReactFetching />} />
                <Route path="/styling" element={<ReactStyling />} />
                <Route path="/router" element={<ReactRouter />} />
                <Route path="/redux" element={<ReactRedux />}>
                  <Route path="" element={<Login />}></Route>
                  <Route path="movies" element={<Movies />}></Route>
                  <Route path="studios" element={<Studios />}></Route>
                </Route>
                <Route path="/testing" element={<ReactTesting />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
