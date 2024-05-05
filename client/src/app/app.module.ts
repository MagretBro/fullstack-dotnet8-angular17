import { ApplicationConfig, NgModule } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentFormComponent } from './students/student-form/student-form.component'; // Добавьте HttpClientModule
import { ToastrModule } from 'ngx-toastr';
import { provideToastr } from 'ngx-toastr';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter([]),
    provideToastr()
  ]
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   
  ],
  providers: [
    ...appConfig.providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}

 
