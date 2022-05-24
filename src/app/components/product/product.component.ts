import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Products} from '../../hero';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  @ViewChild('lorem', { static : true}) element: ElementRef;


  public ngOnInit(): void {
    
    //console.log(this.element.nativeElement.innerText = "change lorem");
  }

  public products : Products [] = [
    {
      id: Math. floor(Math. random() * 100),
      title: 'Learn CSS',
      "description": "Create CSS Grid layouts using the new grid system & use it together with CSS3 Flexbox and Sass for an amazing workflow.",
      "imgUrl": "https://eduport.webestica.com/assets/images/courses/4by3/12.jpg",
      price: 45,
    },
    {
      id: Math. floor(Math. random() * 100),
      title: 'Learn HTML',
      description : "Modern, semantic and accessible HTML5. How to use common components and layout patterns for professional website design and development.",
      "imgUrl": "https://eduport.webestica.com/assets/images/courses/4by3/11.jpg",
      price: 55,
    },
    {
      id: Math. floor(Math. random() * 100),
      title: 'Learn Angular',
      description : "Get job ready with Angular! Master the latest version of Angular and learn to build large scale apps that set you apart.",
      imgUrl: "https://eduport.webestica.com/assets/images/courses/4by3/06.jpg",
      price: 65,
    }
  ];

  deleteProduct(product: Products) {
    this.products = this.products.filter(pdt => pdt.id !== product.id);
  }
  // public clickButton (event: Event) {
  //   console.log(event);
  // }

  salary : number = 2000;
  increaseSalary(salary: number) : number {
    return this.salary = this.salary + salary
  }

  

}
