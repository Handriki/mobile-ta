import { Routes, RouterModule } from "@angular/router";
import { HomePage } from './home.page';
import { NgModule } from '@angular/core';


const routes: Routes = [
    {
        path: 'tabs',
        component: HomePage,
        children: [
            {
                path: 'following',
                children: [
                    {
                        path: '',
                        loadChildren: './following/following.module#FollowingPageModule'
                    }
                ]
            },
            {
                path: 'projects',
                children: [
                    {
                        path: '',
                        loadChildren: './projects/projects.module#ProjectsPageModule'
                    },
                    {
                        path: 'id',
                        loadChildren: './projects/project-details/project-details.module#ProjectDetailsPageModule'
                    }
                ]
            },
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
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: './profile/profile.module#ProfilePageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/home/tabs/following',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/home/tabs/following',
        pathMatch: 'full'
    },
  { path: 'following', loadChildren: './following/following.module#FollowingPageModule' },
  { path: 'project-details', loadChildren: './projects/project-details/project-details.module#ProjectDetailsPageModule' }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRoutingModule{}