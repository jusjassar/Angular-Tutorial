import { Injectable } from '@angular/core';
import { Product } from './all.interface';


@Injectable({
  providedIn:'root'
})

export class AllService {

   products:Product[] = [
    { pName:'Iphone',pDes:'Iphone 20 with charger',pPrice:'$800',pDepartId:101},
    { pName:'Samsung Phone',pDes:'Samsumg Note20',pPrice:'$900',pDepartId:101},
    { pName:'Ipad',pDes:'Ipad 12 on Rogers',pPrice:'$700',pDepartId:101},
    { pName:'Pole Saw',pDes:'Pole Saw',pPrice:'$200',pDepartId:102},
    { pName:'LawnMower',pDes:'works LawnMower',pPrice:'$300',pDepartId:102},
    { pName:'Screw Driver',pDes:'Screw Driver',pPrice:'$120',pDepartId:102},
    { pName:'Hedge Trimmer',pDes:'side Trimmer for lawn',pPrice:'$200',pDepartId:102},
    { pName:'Snow Blower',pDes:'500 cc Blower',pPrice:'$800',pDepartId:102},
    { pName:'Stove',pDes:'Samsung',pPrice:'$900',pDepartId:103},
    { pName:'Fridge',pDes:'Fridgidare',pPrice:'$400',pDepartId:103},
    { pName:'Microwave',pDes:'kent',pPrice:'$300',pDepartId:103},
    { pName:'Exhaust Fan Chimney',pDes:'Aople',pPrice:'$600',pDepartId:103},
    { pName:'DishWasher',pDes:'Homedepot',pPrice:'$100',pDepartId:103}
  ]

  getProducts(){
    const productListPromise = new Promise<Product[]>((resolve)=>{
        setTimeout(()=>{
          resolve(this.products)
        },1000)
    })
    return productListPromise;
  }
}
