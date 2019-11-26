import { ProductListComponent } from './product-list/product-list.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProcessTechnologyComponent } from './process-technology/process-technology.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'process&tech', component: ProcessTechnologyComponent },
  { path: 'aboutus', component: AboutUsComponent},
  { path: 'contactus', component: ContactUsComponent },
  { path: 'products', component: ProductListComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
