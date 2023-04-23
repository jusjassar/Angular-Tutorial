import { Component, OnInit } from '@angular/core';
import { Product } from '../all.interface';
import { AllService } from '../all.service'

@Component({
  selector: 'app-machenical',
  templateUrl: './machenical.component.html',
  styleUrls: ['./machenical.component.css']
})
export class MachenicalComponent implements OnInit {
productsList:Product[]=[];
  constructor(private allSrvc:AllService) { }

  ngOnInit() {
    for( let product of this.allSrvc.products){
      if(product.pDepartId === 102 ){
        this.productsList.push(product)
      }
    }
  }

}