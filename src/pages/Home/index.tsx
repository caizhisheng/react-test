import * as React from 'react';
import HButton from '../../components/button/js';
// import HRow from '../../components/row';
// import HCol from '../../components/col';
// import HButton from '../../components/button';

class Home extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    componentWillMount() {
        return true;
    }
    render() {
        return (
            <div className="homepage">
              <HButton type="primary" size="large" htmlType="button" name="test" text="确认按钮"/>
            </div>
        )
    }
    componentDidMount() {
        return true;
    } 
}

export default Home;

