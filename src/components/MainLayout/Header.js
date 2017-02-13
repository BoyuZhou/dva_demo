import React from 'react';
 import { Row, Col, Menu, Icon } from 'antd';
 import { Link } from 'dva/router';

 function Header({ location }) {
   return (

     <Menu
       selectedKeys={[location.pathname]}
       mode="horizontal"
     >
       <Menu.Item key="/users">
         <Link to="/users"><Icon type="bars" />用户名</Link>
       </Menu.Item>
       <Menu.Item key="/">
         <Link to="/"><Icon type="home" />消息</Link>
       </Menu.Item>
       <Menu.Item key="/404" style={{ float: "right"}}>
         <Link to="/page-you-dont-know"><Icon type="frown-circle" />404</Link>
       </Menu.Item>
       <Menu.Item key="/antd" style={{ float: "right"}}>
         <a href="https://github.com/dvajs/dva" target="_blank">dva</a>
       </Menu.Item>
     </Menu>

   );
 }

 export default Header;
