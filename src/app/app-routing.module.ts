import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { WashingMaschineComponent } from './products/washing-maschine/washing-maschine.component';

const appRoutes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component :LoginComponent},
  {path:'home', component :HomeComponent},
  {path:'about', component :AboutComponent},
  {path:'products', children:[
    {path:'', component :ProductsComponent},
    {path:'mobile', component :MobileComponent},
    {path:'laptop', component :LaptopComponent},
    {path:'washing', component :WashingMaschineComponent},
  ]},
  {path:'contact', component :ContactComponent},
  {path:'**', component :PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],//register routs
  exports: [RouterModule]
})
export class AppRoutingModule { }
