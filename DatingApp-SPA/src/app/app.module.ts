import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { NavComponent } from './nav/nav.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './_services/auth.service';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import {FileUploadModule} from 'ng2-file-upload';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import {ErrorInterceptorProvider} from './_services/error. interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {ModalModule} from 'ngx-bootstrap/modal';
import {TimeagoModule, TimeagoPipe} from 'ngx-timeago';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { MemberListComponent } from './members/member-list/member-list.component';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import {appRoutes} from './routes';
import {MemberCardComponent} from './members/member-card/member-card.component';
import {PhotoEditorComponent} from './members/photo-editor/photo-editor.component';
import {MemberDetailedComponent} from './members/member-detailed/member-detailed.component';
import {MemberEditComponent} from './members/member-edit/member-edit.component';
import {MemberDetailResolver} from './_resolvers/member-detailed.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import {MemberEditResolver} from './_resolvers/member-edit.resolver';
import {PreventUnsavedChanges} from './_gaurds/prevent-unsaved-changes.guard';
import {ListsResolver} from './_resolvers/lists.resolver';
import { MemberMessagesComponent } from './members/member-messages/member-messages.component';
import { MessagesResolver } from './_resolvers/messages.resolver';
import {AdminPanelComponent} from './admin/admin-panel/admin-panel.component';
import {HasRoleDirective} from './_directives/hasRole.directive';
import {PhotoManagementComponent} from './admin/photo-management/photo-management.component';
import {UserManagementComponent} from './admin/user-management/user-management.component';
import {AdminService} from './_services/admin.service';
import { environment } from 'src/environments/environment';
import { User } from './_models/user';
import { RolesModalComponent } from './admin/roles-modal/roles-modal.component';

export function tokenGetter() {
   return localStorage.getItem('token');
 }
 

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      MemberListComponent,
      ListsComponent,
      MessagesComponent,
      MemberCardComponent,
      MemberDetailedComponent,
      MemberEditComponent,
      PhotoEditorComponent,
      MemberMessagesComponent,
      AdminPanelComponent,
      HasRoleDirective,
      UserManagementComponent,
      PhotoManagementComponent,
      RolesModalComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      FormsModule,
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
      BsDatepickerModule.forRoot(),
      ButtonsModule.forRoot(),
      ModalModule.forRoot(),
      PaginationModule.forRoot(),
      TabsModule.forRoot(),
      NgxGalleryModule,
      FileUploadModule,
      TimeagoModule.forRoot(),
      ReactiveFormsModule,
      RouterModule.forRoot(appRoutes),
      JwtModule.forRoot({
         config: {
           tokenGetter,
           allowedDomains: ['localhost:5000'],
           disallowedRoutes: ['localhost:5000/api/auth']
         }
       })
   ],
   providers: [
      ErrorInterceptorProvider,
      AuthService,
      MemberDetailResolver,
      MemberListResolver,
      MemberEditResolver,
      PreventUnsavedChanges,
      ListsResolver,
      MessagesResolver,
      AdminService
   ],
   entryComponents:[
      RolesModalComponent
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {
   baseUrl = environment.apiUrl;

   constructor(private http: HttpClient) {}
 
   getUsersWithRoles() {
     return this.http.get(this.baseUrl + 'admin/userswithroles');
   }
 
   updateUserRoles(user: User, roles: {}) {
     return this.http.post(this.baseUrl + 'admin/editRoles/' + user.username, roles);
   }
 
   getPhotosForApproval() {
     return this.http.get(this.baseUrl + 'admin/photosForModeration');
   }
 
   approvePhoto(photoId) {
     return this.http.post(this.baseUrl + 'admin/approvePhoto/' + photoId, {});
   }
 
   rejectPhoto(photoId) {
     return this.http.post(this.baseUrl + 'admin/rejectPhoto/' + photoId, {});
   }  


 }
