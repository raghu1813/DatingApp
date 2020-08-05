import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { NavComponent } from './nav/nav.component';
import {FormsModule} from '@angular/forms';
import {AuthService} from './_services/auth.service';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import {FileUploadModule} from 'ng2-file-upload';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import {ErrorInterceptorProvider} from './_services/error. interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {TabsModule} from 'ngx-bootstrap/tabs';
import { MemberListComponent } from './members/member-list/member-list.component';
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
      PhotoEditorComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
      TabsModule.forRoot(),
      NgxGalleryModule,
      FileUploadModule,
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
      PreventUnsavedChanges
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
