import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthserviceService } from './authservice.service';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms'
import { LoginComponent } from './login/login.component';
import { AuthcomponentComponent } from './authcomponent/authcomponent.component';
import { Routes, RouterModule, Router} from '@angular/router'

const routes :Routes =[
 /* { path: '',
  redirectTo: 'login',
  pathMatch: 'full'
  },*/
  {
    path : 'login',
    component : LoginComponent
    
  },
  {
    path : 'auth',
    component : AuthcomponentComponent,
    canActivate : [AuthserviceService]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthcomponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    
  ],
  providers: [AuthserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
