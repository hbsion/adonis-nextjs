import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";


import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'

const AUTH_LOGIN = gql`
    mutation {
        authLogin(email: $email password: $password token: $token)
    } 
`

function Login() {
    const { data } = useQuery(AUTH_LOGIN)
}

