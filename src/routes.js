/*!

=========================================================
* Argon Dashboard PRO React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Alternative from 'views/pages/dashboards/Alternative.js';
import Buttons from 'views/pages/components/Buttons.js';
import Calendar from 'views/pages/Calendar.js';
import Cards from 'views/pages/components/Cards.js';
import Charts from 'views/pages/Charts.js';
import Components from 'views/pages/forms/Components.js';
import Dashboard from 'views/pages/dashboards/Dashboard.js';
import Elements from 'views/pages/forms/Elements.js';
import Google from 'views/pages/maps/Google.js';
import Grid from 'views/pages/components/Grid.js';
import Icons from 'views/pages/components/Icons.js';
import Lock from 'views/pages/examples/Lock.js';
import Login from 'views/pages/examples/Login.js';
import Notifications from 'views/pages/components/Notifications.js';
import Pricing from 'views/pages/examples/Pricing.js';
import Profile from 'views/pages/examples/Profile.js';
import ReactBSTables from 'views/pages/tables/ReactBSTables.js';
import Register from 'views/pages/examples/Register.js';
import RTLSupport from 'views/pages/examples/RTLSupport.js';
import Sortable from 'views/pages/tables/Sortable.js';
import Tables from 'views/pages/tables/Tables.js';
import Timeline from 'views/pages/examples/Timeline.js';
import Typography from 'views/pages/components/Typography.js';
import Validation from 'views/pages/forms/Validation.js';
import Vector from 'views/pages/maps/Vector.js';
import Widgets from 'views/pages/Widgets.js';

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        icon: 'fas fa-home text-primary',
        component: Widgets,
        layout: '/gift',
    },
    {
        path: '/items',
        name: 'Items',
        icon: 'fas fa-gift text-red',
        component: Charts,
        layout: '/gift',
    },
    {
        path: '/lists',
        name: 'Lists',
        icon: 'far fa-list-alt text-orange',
        component: Calendar,
        layout: '/gift',
    },
    {
        path: '/Groups',
        name: 'Groups',
        icon: 'ni ni-single-02 text-yellow',
        component: Profile,
        layout: '/gift',
    },
    {
        path: '/shopping-list',
        name: 'Shopping List',
        icon: 'fas fa-shopping-cart text-green',
        component: Tables,
        layout: '/gift',
    },
    {
        path: '/friends',
        name: 'Friends',
        icon: 'fas fa-user-friends text-purple',
        component: Tables,
        layout: '/gift',
    },
    {
        path: '/events',
        name: 'Events',
        icon: 'fas fa-calendar-day text-pink',
        component: Register,
        layout: '/gift',
    },
];

export default routes;
