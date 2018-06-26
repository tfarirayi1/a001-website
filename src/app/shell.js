import React from 'react';
import {Route,Link,withRouter} from 'react-router-dom';
import {ArrowUpwardIcon,ArrowBackIcon} from 'mdi-react';
import 'styles/shell.scss';
import {Routes} from '_routes';
import {configureAuth} from '_helpers';

class Shell extends React.Component{
    _stepBack(){
        this.props.history.goBack();
    }
    constructor(props){
        super(props);
        this._stepBack=this._stepBack.bind(this);
        configureAuth();
    }
    render(){
        const {location}=this.props;
        const layer_one=(
            <div className="layer-one">
                <div className="tool-panel">
                    <div className="navigation-button">
                        {
                            location.pathname==='/'?(
                                <ArrowBackIcon size="1em" onClick={this._stepBack}/>
                            ):(
                                <Link to="/">
                                    <ArrowUpwardIcon size="1em"/>
                                </Link>
                            )
                        }
                    </div>
                    <div className="label">
                        project-a001
                    </div>
                </div>
                <div className="view-panel">
                    {
                        Routes.map((item,index)=>{
                            return(
                                <div key={index}>
                                    <Route exact path={item.endpoint} component={item.component}/>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
        return(
            <div id="shell">
                {layer_one}
            </div>
        );
    }
}
export default withRouter(Shell);
