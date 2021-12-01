import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
// import CardHeader from 'react-bootstrap'

export default function ReactFetching() {

  // Di sini, kita akan mendemonstrasikan tentang
  // bagaimana kita bisa fetch data di dalam React.
  // Khusus hal ini, kita akan menggunakan Hooks, ya,
  // dan kalau temen-temen belum paham cara kerja Hooks,
  // teman-teman bisa buka bagian "20-Hooks"

  const [ data, setData ] = useState([])

  useEffect(() => {
    fetch('/users/1/todos')
    .then(res => res.json())
    .then(result => setData(result))
    .catch(console.error)
  }, [])

  return (
    <>
      {
        data.length > 0 ?
        <>
          <h3>Todo list</h3>
          <Row>
            {
              data.map(row => (
                <Col key={row.id}>
                  <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>
                        { row.title }
                      </Card.Title>
                      <Card.Text>
                        by {row.userId} {row.completed ? ", completed" : ""}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            }
          </Row>
        </> :
        <h3>Data masih loading, ditunggu ya!</h3>
      }
    </>
  )
}
