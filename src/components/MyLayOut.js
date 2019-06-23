import React, { Component } from "react";
import { TabBar } from "antd-mobile";

class MyLayOut extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ position: "fixed", height: "100%", width: "100%", top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="orange"
          barTintColor="white"
        >
          <TabBar.Item
            title="主页"
            key="Home"
            icon={<span className="iconfont icon-home" />}
            selectedIcon={<span className="iconfont icon-home" />}
            selected={this.props.match.url === "/"}
            onPress={() => {
              this.props.history.push("/");
            }}
          >
            {this.props.match.url==="/"?this.props.children:null}
          </TabBar.Item>
          <TabBar.Item
            icon={<span className="iconfont icon-gouwuche" />}
            selectedIcon={<span className="iconfont icon-gouwuche" />}
            title="购物车"
            key="Cart"
            selected={this.props.match.url === "/cart"}
            onPress={() => {
              this.props.history.push("/cart");
            }}
          >
            {this.props.match.url==="/cart"?this.props.children:null}
          </TabBar.Item>
          <TabBar.Item
            icon={<span className="iconfont icon-weibiaoti2fuzhi12" />}
            selectedIcon={<span className="iconfont icon-weibiaoti2fuzhi12" />}
            title="我的"
            key="Mine"
            selected={this.props.match.url === "/mine"}
            onPress={() => {
              this.props.history.push("/mine");
            }}
          >
            {this.props.match.url==="/mine"?this.props.children:null}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default MyLayOut;
