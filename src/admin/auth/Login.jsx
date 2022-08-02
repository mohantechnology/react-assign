import React from 'react';
import { Route, Switch,  NavLink, useLocation   } from "react-router-dom";
import Button from '@mui/material/Button';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
export default function () {

    return (<div>
        <Button variant="contained">Hello World</Button>   <AccessAlarmIcon /> Login Page
        <NavLink exact to={"/admin/register"}>
            Register
        </NavLink>
    </div>);
}

