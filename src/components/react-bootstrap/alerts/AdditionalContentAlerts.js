import React from "react";
import {Alert, Col, Container, Row} from "react-bootstrap";
import H3 from "../../utils/titles/h3";


export default function AdditionalContentAlerts() {
    return (
        <Container className="center-block text-center">
            <H3 title="2.3. Additional Content"/>
            <Row className="pt-3">
                <Col>
                    <Alert variant="success">
                        <Alert.Heading>I'm an Heading</Alert.Heading>
                        <p>
                            Alerts can contain whatever content you like. Headers, paragraphs, dividers, ...
                        </p>
                        <hr/>
                        <p className="mb-0">
                            I'm another paragraph and I look cool.
                        </p>
                    </Alert>
                </Col>
            </Row>
            <Row className="pt-3">
                <Col>
                    <Alert variant="danger">
                        <Alert.Heading>Danger Heading</Alert.Heading>
                        <p>
                            Alerts can contain whatever content you like. Headers, paragraphs, dividers, ...
                        </p>
                        <hr/>
                        <p className="mb-0">
                            I'm another danger paragraph and I look cool.
                        </p>
                    </Alert>
                </Col>
            </Row>
        </Container>
    );
}