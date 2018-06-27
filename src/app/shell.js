import React from 'react';
import {Route,Link,withRouter} from 'react-router-dom';
import {ArrowUpwardIcon,ArrowBackIcon} from 'mdi-react';
import {Routes} from '_routes';
import Helpers from '_helpers';
import 'styles/shell.scss';

class Shell extends React.Component{
    _stepBack(){
        this.props.history.goBack();
    }
    constructor(props){
        super(props);
        this._stepBack=this._stepBack.bind(this);
    }
    componentDidMount(){
        Helpers.configureAuth();
    }
    render(){
        const {location}=this.props;
        const arrow_back=(<ArrowBackIcon size="1em" onClick={this._stepBack}/>);
        const arrow_up=(
            <Link to="/">
                <ArrowUpwardIcon size="1em"/>
            </Link>
        );
        return(
            <div id="shell">
                <div className="layer-one">
                    <div className="tool-panel">
                        <div className="navigation-button">
                            {
                                location.pathname==='/'?arrow_back:arrow_up
                            }
                        </div>
                        <div className="label">
                            project-a001
                        </div>
                    </div>
                    <div className="view-panel">
                        {
                            Routes.map((a,b)=>{
                                const item=a;
                                const position=b;
                                return(
                                    <div key={position}>
                                        <Route exact path={item.endpoint} component={item.component}/>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(Shell);
