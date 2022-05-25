import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/* importando modulos necessarios do proprio angular */
import { HttpClientModule } from '@angular/common/http';
/* necessario para validação de formulario */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/* importando modulos necessarios do proprio angular */

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NewMomentComponent } from './components/pages/new-moment/new-moment.component';
import { MomentFormComponent } from './components/moment-form/moment-form.component';
import { MomentsComponent } from './components/pages/moments/moments.component';
import { MomentComponent } from './components/pages/moment/moment.component';
import { EditMomentComponent } from './components/pages/edit-moment/edit-moment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    NewMomentComponent,
    MomentFormComponent,
    MomentsComponent,
    MomentComponent,
    EditMomentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
