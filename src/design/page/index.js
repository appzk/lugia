/**
 *
 * create by LYQ
 *
 * @flow
 */
import * as React from 'react';
import { Alert ,  Theme } from '@lugia/lugia-web';
// import { Widget} from '@lugia/lugia-web/dist/consts/index';
import Widget from '@lugia/lugia-web/dist/consts/index';
import styled from 'styled-components';
import Temlpate from '../template/template';
import data from './document';
const Container = styled.div` 
  padding:45px 0 50px 0;
  width:100%;
`;

type DefProps ={
  current?:string,
}

type StateProps ={
  current?:string,
  pathType:string
}

export default class Pages extends React.Component<any, any> {

  static getDerivedStateFromProps(defProps: DefProps, stateProps: StateProps) {
    const path = window.location.pathname;
    const pathType = path.match(/[^/]+/g)[1];
    const defCurrent = defProps.current || pathType;
    if (!stateProps) {
      return {
        current:defCurrent,
        pathType
      };
    }
    return {
      current: 'current' in defProps ? defCurrent : stateProps.current,
      pathType: 'pathType' in stateProps ? stateProps.pathType : pathType,
    };
  }


  render() {
    const {pathType} = this.state;
    const dataSource = data[pathType] ||data.introduce;
    return (
      <Container>
        <Temlpate dataSource={dataSource}>
        </Temlpate>
      </Container>
    );
  }
}
