import React from 'react';
import styles from './Login.css';
import { Row, Col, Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

const LoginForm = Form.create()(React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  },
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
    <div className={styles.normal}>
            <h1 style={{ textAlign: 'center', padding: 15}}>登录</h1>
      <Form onSubmit={this.handleSubmit} className={styles.form}>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入用户名!' }],
          })(
            <Input addonBefore={<Icon type="user" />} placeholder="请输入用户名" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码!' }],
          })(
            <Input addonBefore={<Icon type="lock" />} type="password" placeholder="请输入密码" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>记住我</Checkbox>
          )}
          <a className={styles.forgot}>忘记密码</a>
          <Button type="primary" htmlType="submit" className={styles.button}>
            登录
          </Button>
          <a>立即注册!</a>
        </FormItem>
      </Form>
      </div>
    );
  },
}));




export default LoginForm;
