import React from 'react';
import { connect } from 'dva';
import styles from './Users.css';
import { Row, Col } from 'antd';
import UsersComponent from '../components/Users/Users';
import MainLayout from '../components/MainLayout/MainLayout';

function Users() {
  return (
      <Row>
        <Col span={14} offset={5}>
            <MainLayout location={location}>
                <div className={styles.normal}>
                    <UsersComponent />
                </div>
            </MainLayout>
        </Col>
      </Row>

  );
}


export default connect()(Users);
