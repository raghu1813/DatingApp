import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MemberListComponent} from './members/member-list/member-list.component';
import {ListsComponent} from './lists/lists.component';
import {MessagesComponent} from './messages/messages.component';
import {AuthGuard} from './_gaurds/auth.guard';
import { MemberDetailedComponent } from './members/member-detailed/member-detailed.component';
import { MemberDetailResolver } from './_resolvers/member-detailed.resolver';
import {MemberListResolver} from './_resolvers/member-list.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { PreventUnsavedChanges } from './_gaurds/prevent-unsaved-changes.guard';
import {ListsResolver} from './_resolvers/lists.resolver';
import { MessagesResolver } from './_resolvers/messages.resolver';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: '', runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
        {path: 'members', component: MemberListComponent, resolve: {users: MemberListResolver}},
        {path: 'members/:id', component: MemberDetailedComponent, resolve: {user: MemberDetailResolver}},
        {path: 'member/edit', component:MemberEditComponent, resolve:{user: MemberEditResolver},canDeactivate: [PreventUnsavedChanges]},
    {path: 'messages', component: MessagesComponent, resolve: { messages: MessagesResolver }},
    {path: 'lists', component: ListsComponent, resolve:{users: ListsResolver}},
    {path: 'admin', component: AdminPanelComponent, data: {roles:['Admin', 'Moderator']}},

    ]
},
    {path: '**', redirectTo: '', pathMatch: 'full'},



];

