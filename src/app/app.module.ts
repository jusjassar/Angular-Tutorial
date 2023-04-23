import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ErrorComponent } from './error/error.component'
import { ElectronicsComponent } from './electronics/electronics.component';
import { MachenicalComponent } from './machenical/machenical.component';
import { HomeAppliancesComponent } from './home-appliances/home-appliances.component';
import { ResolveGuardService } from './resolveRouteGuard.service'

const appRoutes:Routes=[
  {path:'home',component:HomeComponent},
  // {path:'products',component:ProductsComponent},
  {path:'products',component:ProductsComponent,
  children:[

          {path:'',component:ElectronicsComponent},
          {path:'electronics',component:ElectronicsComponent},
          {path:'mechenical',component:MachenicalComponent},
          {path:'home-appliances',component:HomeAppliancesComponent
          ,resolve:{resolvedProducts: ResolveGuardService}}


  ]},
  {path:'**',component:ErrorComponent }
]

@NgModule({
  imports: [BrowserModule,
  RouterModule.forRoot(appRoutes)],
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ErrorComponent,
    ElectronicsComponent,
    MachenicalComponent,
    HomeAppliancesComponent
  ],
  bootstrap: [AppComponent],
  providers:[ResolveGuardService]
})
export class AppModule {}
