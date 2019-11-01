import React from 'react';
import './AppUI.scss';
import App from "../../../core/App";
import {useSubscription} from "../../utils/HookUtils";


const app = new App();

function AppUI() {
  useSubscription(app.onChange);


  return (
    <div className="AppUI">
      {app.list.map((s,index) => <h5 key={index}>{s}</h5>)}
    </div>
  );
}

export default AppUI;
