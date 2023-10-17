
import React, { useState } from "react";
import {
   Button,
   Row, 
   Col,
   Container, 
   Table, 
   Popover,
   OverlayTrigger, 
   Breadcrumb, 
  ProgressBar,
   Form,
  Pagination,
   Nav,
   Navbar,
   NavDropdown,
   Spinner,
   Tab,
   Tabs,
   Collapse
 
  } from "react-bootstrap"


function App() {
  const pesan = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Informasi Website</Popover.Header>
      <Popover.Body>
       Website ini dibuat untuk memudahkan dalam pencarian Informasi 
       terkini tentang berita olah raga
      </Popover.Body>
    </Popover>
  );
  const [buka, kondisi]= useState(false)
  return(
<div>
  
<Navbar expand="lg"  variant="dark" bg="dark">
      <Container fluid>
        <Navbar.Brand href="#">Akses Sport</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Berita</Nav.Link>
            <Nav.Link href="#action1">Live Score</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Piala & Liga</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Liga ingris
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Liga italia
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
               Liga Indonesia
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">
              Transfer Pemain
            </Nav.Link>
            <Nav.Link href="#">
            Tim
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
      </Container>
    </Navbar>
    <Container >
     
      <Row>
        <Col  md={{ span: 5, offset: 10 }}>
        <div style={{ backgroundColor:"#f7f7f7", padding:"7px",marginRight:"200px",borderRadius:"5px"}}>
        <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        Liga Inggris 
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Transfer Pemain</Breadcrumb.Item>
    </Breadcrumb>
    </div>
    </Col>
    </Row>
    </Container>

    <Container>       
      <br/><br/>
      <Row >
        <Col>
        <h2>Rumor Transfer Pemain</h2>
        </Col>
        <Col></Col>
        <Col md={{ span: 1, offset: 2 }}>
        <Spinner animation="border" variant="success" />
        <Spinner animation="grow" variant="success" />
        </Col>
      </Row>
      </Container>
      <Container>
      <Row>
        <Col>
        <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="transfer" title="Semua Transfer">
      </Tab>
      <Tab eventKey="primer" title="Liga Primer Ingris">
      </Tab>
      <Tab eventKey="Serie" title="Serie A">
      </Tab>
      <Tab eventKey="contact" title="Divisi Primera" >
      </Tab>
      <Tab eventKey="Liga" title="Bundesliga" >
      </Tab>
      <Tab eventKey="indonesia" title="Liga 1 Indonesia" >
      </Tab>
    </Tabs>
        </Col>
      </Row>
      <Row>
        <Col>
        <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Nama Pemain</th>
          <th>Tim</th>
          <th>Transfer</th>
          <th>Proses transfer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>MAROUANE FELLANINI</td>
          <td>MANCHESTER UNITED</td>
          <td>SHANDONG LUNENG</td>
          <td><ProgressBar striped variant="PRIMARY" now={82} label="82%" /></td>
        </tr>
        <tr>
          <td>2</td>
          <td>LUIS NANI</td>
          <td>SPORTING CP</td>
          <td>ORLANDO CITY</td>
          <td><ProgressBar striped variant="PRIMARY" now={50} label="50%" /></td>
        </tr>
        <tr>
          <td>3</td>
          <td>MAREK HAMSIK</td>
          <td>NAPOLI</td>
          <td>DALIAN YIFANG</td>
          <td><ProgressBar striped variant="PRIMARY" now={95} label="95%" /></td>
        </tr>
        <tr>
          <td>4</td>
          <td>SARDAR AZMOUN</td>
          <td>RUBIN KAZAN</td>
          <td>ZENIT ST PETERSBURG</td>
          <td><ProgressBar striped variant="PRIMARY" now={100} label="100%" /></td>
        </tr>
        <tr>
          <td>5</td>
          <td>MICHY BATSHUAYI</td>
          <td>CHELSEA</td>
          <td>CRYSTAL PALACE</td>
          <td><ProgressBar striped variant="PRIMARY" now={50} label="50%" /></td>
        </tr>
        <tr>
          <td>6</td>
          <td>LUCAS PIAZON</td>
          <td>CHELSEA</td>
          <td>CHIEVO</td>
          <td><ProgressBar striped variant="PRIMARY" now={100} label="100%" /></td>
        </tr>
      </tbody>
    </Table>
        </Col>
      </Row>
      <Row>
        <Col>
        <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item >{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item >{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
        </Col>
      </Row>
      <Row>
        <Col>
        <div style={{display:"flex", flexDirection:"row"}}>
        <div>
        <OverlayTrigger trigger="click" placement="right" overlay={pesan}>
        <Button variant="primary" >informasi</Button>
        </OverlayTrigger>
        </div>
        <div>
        <Button variant="primary" onClick={()=> kondisi(!buka)}>
       Versi Website
      </Button>
      <Collapse in={buka}>
        <p>Akses Sport V1.0</p>
      </Collapse>
      </div>
      </div>
        </Col>
      
      </Row>
      </Container>
      
   
   
</div>
  );
}

export default App;
