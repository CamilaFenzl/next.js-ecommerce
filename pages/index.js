import Link from 'next/link';
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Container,
  Image,
  Row,
} from 'react-bootstrap';
export default function Page() {
  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src="/boobs.jpg" alt="mug" fluid />
            <Card.Body>
              <Card.Title>Mug</Card.Title>
              <Card.Text>Handmade ceramic mug. Color may varay.</Card.Text>
              <Link href="/products/0">
                <Button variant="color" size="sm">
                  View product
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src="/yogadame.jpg" alt="sculpture" fluid />
            <Card.Body>
              <Card.Title>Yoga positions</Card.Title>
              <Card.Text>
                Handmade ceramic sculpture. Color may varay.
              </Card.Text>
              <Link href="/products/1">
                <Button variant="color" size="sm">
                  View product
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src="/rosabody.jpg" alt="vase" fluid />
            <Card.Body>
              <Card.Title>Rosa body</Card.Title>
              <Card.Text>Handmade ceramic vase. Color may varay.</Card.Text>
              <Link href="/products/2">
                <Button variant="color" size="sm">
                  View product
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '15rem' }}>
            <Card.Img
              variant="top"
              src="/plussizewoman.jpg"
              alt="esculpture"
              fluid
            />
            <Card.Body>
              <Card.Title>Curvilicious body</Card.Title>
              <Card.Text>
                Handmade ceramic sculpture. Color may varay.
              </Card.Text>
              <Link href="/products/3">
                <Button variant="color" size="sm">
                  View product
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
