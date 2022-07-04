import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Cafeteria ,Copia,InvestmentBg} from '../components/Images';

function Investment() {
    return <>
        <section>
            <Container >
                <div className='investment-section'>
                    <h3>INVEST IN OUR NEW</h3>
                    <h2>Coffee shops</h2>
                    <img src={Cafeteria} />
                    <p>Invest and be part of our new cafeterias, put your money<br />
                        to work and start shaping your dreams.</p>
                </div>
            </Container>
        </section>
        <section className='invest-second'>
        <img src={InvestmentBg} className="invest-bg"/>

            <Container >
                <Row>
                    <Col lg={4}>
                        <h2 className='secondary-text'>STATES:</h2>
                        <ul className='state-ul'>
                            <li>
                                <Link to={"#"}>AGUASCALIENTES</Link>
                            </li>
                            <li>
                                <Link to={"#"}>AGUASCALIENTES</Link>
                            </li>
                            <li>
                                <Link to={"#"}>AGUASCALIENTES</Link>
                            </li>
                            <li>
                                <Link to={"#"}>AGUASCALIENTES</Link>
                            </li>
                            <li>
                                <Link to={"#"}>AGUASCALIENTES</Link>
                            </li>
                            <li>
                                <Link to={"#"}>AGUASCALIENTES</Link>
                            </li>
                            <li>
                                <Link to={"#"}>AGUASCALIENTES</Link>
                            </li>
                            <li>
                                <Link to={"#"}>AGUASCALIENTES</Link>
                            </li>
                            <li>
                                <Link to={"#"}>AGUASCALIENTES</Link>
                            </li>
                            <li>
                                <Link to={"#"}>AGUASCALIENTES</Link>
                            </li>
                            <li>
                                <Link to={"#"}>AGUASCALIENTES</Link>
                            </li>
                            <li>
                                <Link to={"#"}>AGUASCALIENTES</Link>
                            </li>
                            <li>
                                <Link to={"#"}>AGUASCALIENTES</Link>
                            </li>
                            <li>
                                <Link to={"#"}>AGUASCALIENTES</Link>
                            </li>
                            <li>
                                <Link to={"#"}>AGUASCALIENTES</Link>
                            </li>
                            <li>
                                <Link to={"#"}>AGUASCALIENTES</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={8}>
                        <div className='investment-second'>
                        <h3>BE PART OF OUR COLLECTIVE INVESTMENT IN </h3>
                        <h2>MEXICO</h2>
                        <img src={Copia}/>
                        <p className=''>
                        Lorem ipsum pain sit amet, consectetur adipiscing elit. Maecenas pulvinar augue ut bibendum fringilla. Praesent condimentum tempus lectus non blandit. Praesent porttitor in erat eu euismod. Suspendisse eu tortor quis tellus auctor molestie sit amet et urna. Curabitur volutpat vehicula arcu eu molestie. Donec laoreet laoreet elit ac elementum. Suspendisse laoreet lacinia suscipit. Fusce malesuada ligula quam, et eleifend massa pharetra eget. In a nursery arch. Pellentesque eu laoreet enim. Phasellus ac vehicula tellus, quis pellentesque augue. 
                        </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
}

export default Investment;