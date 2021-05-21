import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from './component/dashboard/dashboard';
import Surat from './component/surat/surat';
import DetailSurat from './component/surat/detailSurat';
import { Sholat } from './component/sholat';

function App() {
    return (
        <div>
            <Switch>
                <Route path="/sholat" exact component={Sholat}/>
                <Route path="/surat/:nomor" exact component={DetailSurat}/>
                <Route path="/surat" exact component={Surat}/>
                <Route path="/" exact component={Dashboard}/>
            </Switch>
        </div>
    );
}

export default App;
