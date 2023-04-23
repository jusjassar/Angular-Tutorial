import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../all.interface';
import { AllService } from '../all.service';
import { ResolveGuardService } from '../resolveRouteGuard.service'



@Component({
  selector: 'app-home-appliances',
  templateUrl: './home-appliances.component.html',
  styleUrls: ['./home-appliances.component.css']
})
export class HomeAppliancesComponent implements OnInit {
  productsList:Product[]=[];
    constructor(
      private allSrvc:AllService,
      private resolveSrvcs:ResolveGuardService,
      private route:ActivatedRoute) { }
  
    ngOnInit() {
     
      this.productsList = this.route.snapshot.data['resolvedProducts'];
      console.log(this.productsList)
    }
  
  }