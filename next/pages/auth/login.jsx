import React from 'react'
import Link from 'next/link'
import { Head, Foot } from '../../components/layout'
import Nav from '../../components/navigation'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'
import { AUTH_LOGIN } from '../../api'
import { useMutation } from 'react-apollo';


class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }
  handleSubmit(e) {
    e.preventDefault()
    const { data } = useMutation(AUTH_LOGIN)
  
  }

  render() {
    return (
      <div>
        <Head title="Home" />
        <Nav />
        <main>
          <Container className="mt-4" id="content">
            <Row className="justify-content-center">
              <Col md="8">
                <Card>
                  <Card.Header>Login</Card.Header>
                  <Card.Body>
                    <Form
                      onSubmit={this.handleSubmit.bind(this)}>
                      <Form.Group>
                        <Form.Label>Email or Username</Form.Label>
                        <Form.Control type="text" name="email"  />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password"/>
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          <Foot />
        </main>
      </div>
    )
  }

  
}

export default Login
