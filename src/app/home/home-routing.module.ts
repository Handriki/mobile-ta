import { Routes, RouterModule } from "@angular/router";
import { HomePage } from './home.page';
import { NgModule } from '@angular/core';


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
            },
            {
                path: '',
                redirectTo: '/home/tabs/browse',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/home/tabs/browse',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRoutingModule{}