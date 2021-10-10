import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Codelist from './pages/Codelist';
import Main from './pages/Main';
import Lep from './pages/LEP';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/codelist" component={Codelist}/>
                <Route path="/lep" component={Lep}/>
                <Route path="/" component={Main}/>
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;