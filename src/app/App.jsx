import React from 'react';
import { Col, Row, Grid, Tab, Nav, NavItem } from 'react-bootstrap';

import { GreateLess } from '../func/GreatLess.jsx';
import { Home } from '../home/Home.jsx';

const style = {
  overflowX: 'hidden',
};

const margin = {
  marginBottom: '15px' 
}

export const App = () => {
  return (
    <Grid fluid={true}>
      <Tab.Container id="tabs-with-dropdown" defaultActiveKey={0} style={style}>
        <Row className="clearfix">
          <Col sm={12} style={margin}>
            <Nav bsStyle="tabs" justified={true}>
              <NavItem eventKey={0}>Home</NavItem>
              <NavItem eventKey={1} >1</NavItem>
              <NavItem eventKey={2} >2</NavItem>
              <NavItem eventKey={3} >3</NavItem>
              <NavItem eventKey={4} >4</NavItem>
              <NavItem eventKey={5} >5</NavItem>
              <NavItem eventKey={6} >6</NavItem>
              <NavItem eventKey={7} >7</NavItem>
            </Nav>
          </Col>
          <Col sm={12}>
            <Tab.Content animation>
              <Tab.Pane eventKey={0}>
                <Home />
              </Tab.Pane>
              <Tab.Pane eventKey={1}>
                <GreateLess />
              </Tab.Pane>
              <Tab.Pane eventKey={2}>
                Tab 2 content
              </Tab.Pane>
              <Tab.Pane eventKey={3}>
                Tab 3 content
              </Tab.Pane>
              <Tab.Pane eventKey={4}>
                Tab 4 content
              </Tab.Pane>
              <Tab.Pane eventKey={5}>
                Tab 5 content
              </Tab.Pane>
              <Tab.Pane eventKey={6}>
                Tab 6 content
              </Tab.Pane>
              <Tab.Pane eventKey={7}>
                Tab 7 content
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Grid>
  );
}
