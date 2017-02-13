import React from 'react';
import { connect } from 'dva';
import styles from './Login.css';
import { Layout, Row, Col, Icon } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import LoginForm from '../components/Login/Login';

function Login() {
  return (
      <Layout>
       <Header style={{ background: '#108ee9'}}>
          <div className={styles.logo}>
            <h1 style={{color: "#fff"}}><Icon type="rocket" style={{ margin: 10}}></Icon>全民营销</h1>
          </div>
       </Header>
       <Content>
        <Row style={{ margin: "6% 0"}}>
            <Col span={5} offset={14} style={{ background: '#fff'}}>
                <LoginForm />
            </Col>
        </Row>
       </Content>
       <Footer>Footer</Footer>
      </Layout>
  );
}


export default connect()(Login);
