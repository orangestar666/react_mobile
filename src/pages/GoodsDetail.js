import React, { Component, Fragment } from "react";
import { NavBar, Icon } from "antd-mobile";

class GoodsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(id);
  }
  render() {
    return (
      <Fragment>
        {/* <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log("onLeftClick")}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: "16px" }} />,
            <Icon key="1" type="ellipsis" />
          ]}
        >
          NavBar
        </NavBar>

        <NavBar
          mode="dark"
          leftContent="Back"
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: "16px" }} />,
            <Icon key="1" type="ellipsis" />
          ]}
        >
          NavBar
        </NavBar> */}
      </Fragment>
    );
  }
}

export default GoodsDetail;
