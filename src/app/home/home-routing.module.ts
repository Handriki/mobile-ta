import { Routes, RouterModule } from "@angular/router";
import { HomePage } from './home.page';
import { NgModule } from '@angular/core';
import { FollowingPageModule } from './following/following.module';
import { ProjectsPageModule } from './projects/projects.module';
import { ProjectDetailsPageModule } from './projects/project-details/project-details.module';
import { BrowsePageModule } from './browse/browse.module';
import { BrowseDetailsPageModule } from './browse/browse-details/browse-details.module';
import { ProfilePageModule } from './profile/profile.module';
import { NewBrowsePageModule } from './browse/new-browse/new-browse.module';
import { NewProjectPageModule } from './projects/new-project/new-project.module';


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
                        loadChildren: () => FollowingPageModule
                    }
                ]
            },
            {
                path: 'projects',
                children: [
                    {
                        path: '',
                        loadChildren: () => ProjectsPageModule
                    },
                    {
                        path: 'new-project',
                        loadChildren: () => NewProjectPageModule
                    },
                    {
                        path: ':id',
                        loadChildren: () => ProjectDetailsPageModule
                    },
                ]
            },
            {
                path: 'browse',
                children: [
                    {
                        path: '',
                        loadChildren: () => BrowsePageModule
                    },
                    {
                        path: ':id',
                        loadChildren: () => BrowseDetailsPageModule
                    },
                    { 
                        path: 'new-browse', 
                        loadChildren: () => NewBrowsePageModule 
                    }
                ]
            },
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: () =>ProfilePageModule
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

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRoutingModule{}