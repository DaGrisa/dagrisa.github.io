import React from 'react';

const angularIcon = require('../assets/images/technologies/angular.png')
const dotnetcoreIcon = require('../assets/images/technologies/dotnetcore.png')
const javaIcon = require('../assets/images/technologies/java.png')
const reactIcon = require('../assets/images/technologies/react.png')
const sqlIcon = require('../assets/images/technologies/sql.png')

export default function Technologies() {
    return (
        <ul className="technologies">
            <li className="technology">
                <img src={angularIcon} alt="AngularJS and Angular 2+" title="AngularJS and Angular 2+"></img>
            </li>
            <li className="technology">
                <img src={dotnetcoreIcon} alt=".NET core" title=".NET core"></img>
            </li>
            <li className="technology">
                <img src={javaIcon} alt="Java" title="Java"></img>
            </li>
            <li className="technology">
                <img src={reactIcon} alt="React" title="React"></img>
            </li>
            <li className="technology">
                <img src={sqlIcon} alt="Oracle SQL / PLSQL / APEX" title="Oracle SQL / PLSQL / APEX"></img>
            </li>
        </ul>
    );
}