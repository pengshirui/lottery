import * as React from 'react';
import { Col, Glyphicon, Grid, Nav, NavItem, Row, Tab } from 'react-bootstrap';
import { compose, withHandlers, withState } from 'recompose';
import { All as AllTab} from '../all/All.jsx';
import { ColdWarmHot as ColdWarmHotTab } from '../coldWarmHot/ColdWarmHot.jsx';
import { FirstRoute as FirstRouteTab } from '../firstRoute/FirstRoute.jsx';
import { Home as HomeTab } from '../home/Home.jsx';
import { OddEven as OddEvenTab } from '../oddeven/OddEven.jsx';
import { Origin as OriginTab } from '../origin/Origin.jsx';
import { Pivot as PivotTab } from '../pivot/Pivot.jsx';
import { Prime as PrimeTab } from '../prime/Prime.jsx';
import { Repeat as RepeatTab } from '../repeat/Repeat.jsx';
import { SecondRoute as SecondRouteTab } from '../secondRoute/SecondRoute.jsx';
import { SoloNextPass as SoloNextPassTab } from '../soloNextPass/SoloNextPass.jsx';
import { ThreeRoute as ThreeRouteTab } from '../threeRoute/ThreeRoute.jsx';
import { UpDownEven as UpDownEvenTab } from '../upDownEven/UpDownEven.jsx';
import { ZeroRoute as ZeroRouteTab } from '../zeroRoute/ZeroRoute.jsx';
import { readCsvAs2DArr } from '../util/File.js';

const left = {
  backgroundColor: '#337ab7',
  position: 'fixed',
  top: '0px',
  bottom: '0px',
  left: '0px',
  width: '50px',
  zIndex: '1000'
};

const inputFile = {
  display: 'none'
}

const right = {
  position: 'absolute',
  left: '50px',
  right: '0',
  overflowX: 'hidden',
}

const margin = {
  marginTop: '15px'
}


const enhance = compose(
  withState('csv', 'setCsv', []),
  withState('filePath', 'setFilePath', ''),
  withHandlers({
    onChange: props => event => {
      if (event.target.files[0]) {
        props.setFilePath(event.target.files[0].path);
        const twoDArr = readCsvAs2DArr(event.target.files[0].path);
        props.setCsv(twoDArr);
      }
    },
    onClick: () => event => {
      event.target.value = null;
    }
  })
)

const component = (props) => {
  const { csv, filePath, onChange, onClick } = props;
  return (
    <Grid>
      <div style={left}>
        <label className="btn btn-lg btn-primary btn-block">
          <Glyphicon glyph="file" />
          <input type="file" style={inputFile} accept='.csv' onChange={onChange} onClick={onClick} />
        </label>      
      </div>
      <div style={right}>
        <Tab.Container id="tabs-with-dropdown" defaultActiveKey={0}>
          <Row className="clearfix">
            <Col sm={12}>
              <Nav bsStyle="tabs" justified={true}>
                <NavItem eventKey={0} >文件</NavItem>               
                <NavItem eventKey={1} >大小</NavItem>
                <NavItem eventKey={2} >质和</NavItem>
                <NavItem eventKey={3} >奇偶</NavItem>
                <NavItem eventKey={4} >原始</NavItem>
                <NavItem eventKey={5} >零一二路</NavItem>
                <NavItem eventKey={6} >零路</NavItem>
                <NavItem eventKey={7} >一路</NavItem>
                <NavItem eventKey={8} >二路</NavItem>
                <NavItem eventKey={9} >冷温热</NavItem>
                <NavItem eventKey={10} >复隔中</NavItem>
                <NavItem eventKey={11} >孤邻传</NavItem>
                <NavItem eventKey={12} >升降平</NavItem>
                <NavItem eventKey={13} >新版</NavItem>
              </Nav>
              <Tab.Content animation style={margin}>
                <Tab.Pane eventKey={0}>
                  <HomeTab csv={csv} path={filePath}/>
                </Tab.Pane>
                <Tab.Pane eventKey={1}>
                  <PivotTab csv={csv} />
                </Tab.Pane>
                <Tab.Pane eventKey={2}>
                  <PrimeTab csv={csv} />
                </Tab.Pane>
                <Tab.Pane eventKey={3}>
                  <OddEvenTab csv={csv} />
                </Tab.Pane>
                <Tab.Pane eventKey={4}>
                  <OriginTab csv={csv} />
                </Tab.Pane>
                <Tab.Pane eventKey={5}>
                  <ThreeRouteTab csv={csv} />
                </Tab.Pane>
                <Tab.Pane eventKey={6}>
                  <ZeroRouteTab csv={csv} />
                </Tab.Pane>
                <Tab.Pane eventKey={7}>
                  <FirstRouteTab csv={csv} />
                </Tab.Pane>
                <Tab.Pane eventKey={8}>
                  <SecondRouteTab csv={csv} />
                </Tab.Pane>
                <Tab.Pane eventKey={9}>
                  <ColdWarmHotTab csv={csv} />
                </Tab.Pane>
                <Tab.Pane eventKey={10}>
                  <RepeatTab csv={csv} />
                </Tab.Pane>
                <Tab.Pane eventKey={11}>
                  <SoloNextPassTab csv={csv} />
                </Tab.Pane>
                <Tab.Pane eventKey={12}>
                  <UpDownEvenTab csv={csv} />
                </Tab.Pane>
                <Tab.Pane eventKey={13}>
                  <AllTab csv={csv} />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </Grid>
  );
}

export const App = enhance(component);