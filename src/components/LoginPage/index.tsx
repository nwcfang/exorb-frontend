import React, {ButtonHTMLAttributes} from "react";

import {Form, Input, Button} from "antd";

import styles from "./styles.module.less"

const loginPage = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const loginForm = {
  width: 400
};

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

class LoginPage extends React.Component<any, any> {
  public render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <div className={styles.LoginContainer}>
        <Form name="login" {...layout}>
          <Form.Item
            label="Имя пользователя"
            name="username"
            rules={[{required: true, message: "Пожалуйста введите имя пользователя!"}]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Пароль"
            name="password"
            rules={[{required: true, message: "Пожалуйста введите пароль!"}]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Войти
            </Button>
          </Form.Item>

        </Form>
      </div>
    );
  }
}

export {LoginPage}