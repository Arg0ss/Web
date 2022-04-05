import { Drawer, Button, Space } from "antd";
import Head from "next/head";
import React from "react";

class Modal extends React.Component {
  state = { visible: this.props.show };
  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    // const { visible } = this.state;
    const visible = this.props.show
    return (
      <>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.19.5/antd.compact.min.css"
            integrity="sha512-eWWSqUkg467wXWb0WwpVDqckemcUsO/BrBP0X18gNHwHdFHlDQ1x2AvHdCuTxoCMmw4osOAwFGvhlZbQbHtxwA=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
          />
        </Head>
        <Space>
          <Button type="primary" onClick={this.showDrawer}>
            Open
          </Button>
        </Space>
        <Drawer
          title="Basic Drawer"
          placement={"bottom"}
          closable={false}
          onClose={visible}
          visible={visible}
          key={"bottom"}
        >
          <p>{this.props.data && this.props.data.t}</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </>
    );
  }
}

export default Modal;
