import { Component } from '@angular/core';
import { SuggestedProducts } from '../model/model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 suggestedProducts :SuggestedProducts[]=[
  {
  banerimage:'Banner_Chairs.jfif',
  category:{
    id : 0,
    category :'electronics',
    subcategory : 'mobiles',
  }
},
  {
  banerimage:'Banner_Mobiles.jfif',
  category:{
    id : 0,
    category :'electronics',
    subcategory : 'mobiles',
  
 }
},
  {
  banerimage:'Banner_Laptop.jfif',
  category:{
    id : 0,
    category :'electronics',
    subcategory : 'mobiles',
  
 }
},
  {
  banerimage:'Banner_Tablets.jfif',
  category:{
    id : 0,
    category :'electronics',
    subcategory : 'mobiles',
  
 }
}
]

 
  constructor(){}
  ngOnInit():void{}
}
