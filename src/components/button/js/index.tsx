/**
 * @description button
 * button
 * @time 2018/05/015
 * @author Mike.Cai
 */

import * as React from 'react';
import { Button, Icon } from 'antd';

class HButton extends React.Component<any, any> {
    static defaultProps = {
        type: "primary",
        ghost: false,
        size: "default",
        target: "",
        loading: false,
        disabled: false,
        htmlType: "button",
        icon: "",
        name: ""
    }
   
    constructor(props: any) {
        super(props);
    }
    renderBtn() {
        let iconEle = null;
        if (this.props.icon === "") {
            iconEle = <Icon type={this.props.icon} />
        }
        return <Button
            type={this.props.type}
            ghost={this.props.ghost}
            size={this.props.size}
            target={this.props.target}
            loading={this.props.loading}
            disabled={this.props.disabled}
            htmlType={this.props.htmlType}
            icon={this.props.icon}
            name={this.props.name} onClick={this.props.callBackClick}>
            {this.props.text}
            {iconEle}
        </Button>
    }
    render() {
        return (
            this.renderBtn()
        )
    }
}

export default HButton;
