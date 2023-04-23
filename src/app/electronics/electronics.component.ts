import { Component, OnInit } from '@angular/core';
import { AllService } from '../all.service';
import { Product } from '../all.interface'

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {
productsList:Product[]=[];
  constructor(private productsSrv:AllService) { }

  ngOnInit() {
   
    for(let product of this.productsSrv.products){
      if( product.pDepartId === 101){
        console.log(product)
        this.productsList.push(product)
        
      }
    }
  }

}