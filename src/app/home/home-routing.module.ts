import { Routes } from "@angular/router";
import { HomePage } from './home.page';


const routes: Routes = [
    {
        path: 'tabs',
        component: HomePage,
        children: [
            {
                path: 'browse',
                children: [
                    {
                        path: '',
                        loadChildren: './browse/browse.module#BrowsePageModule'
                    }
                ]
            },
            {
                path: "events",
                children: [
                    {
                        path: '',
                        loadChildren: './events/events.module#EventsPageModule'
                    }
                ]
            }
        ]
    },
    {
        path: '',
        redirectTo: '/home/tabs/browse',
        pathMatch: 'full'
    }
];