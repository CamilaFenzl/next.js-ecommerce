import Link from 'next/link';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
export default function Page() {
  return (
    <Container>
      <Row>
        <Col>
          <Link href="/products/Mug">
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Image src="/boobs.jpg" alt="mug" fluid />
                <Card.Title>Mug</Card.Title>
                <Card.Text>
                  Hand-made ceramic mug.
                  <br />
                  No piece is perfect and there may be small imperfections.
                  Multi-purpose use.
                </Card.Text>
                <Button variant="primary">Buy</Button>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col>
          <Link href="/products/Pinkvase">
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Image src="/rosabody.jpg" alt="vase" fluid />
                <Card.Title>Rosa body</Card.Title>
                <Card.Text>
                  Hand-made ceramic vase.
                  <br />
                  No piece is perfect and there may be small imperfections.
                  Multi-purpose use.
                </Card.Text>
                <Button variant="primary">Buy</Button>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        <Col>
          <Link href="/products/Diversity">
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Image src="/boobsvase.jpg" alt="vase" fluid />
                <Card.Title>Diverse breasts</Card.Title>
                <Card.Text>
                  Hand-made ceramic vase.
                  <br />
                  No piece is perfect and there may be small imperfections.
                  Multi-purpose use.
                </Card.Text>
                <Button variant="primary">Buy</Button>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        <Col>
          <Link href="/products/Woman">
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Image src="/plussizewoman.jpg" alt="esculpture" fluid />
                <Card.Title>Curvilicious body</Card.Title>
                <Card.Text>
                  Hand-made ceramic vase.
                  <br />
                  No piece is perfect and there may be small imperfections.
                  Multi-purpose use.
                </Card.Text>
                <Button variant="primary">Buy</Button>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
