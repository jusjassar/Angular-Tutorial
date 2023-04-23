import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Product } from './all.interface';
import { AllService } from './all.service'

@Injectable()

export class ResolveGuardService implements Resolve<Product[]>{
  constructor(private allSrvcs:AllService
     ){}
  resolve(
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
    ):Promise<Product[]>{
        return this.allSrvcs.getProducts().then(data=>{
            return data;
        })
  }
}