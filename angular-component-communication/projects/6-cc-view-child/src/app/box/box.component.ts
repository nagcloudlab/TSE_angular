import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FoodComponent } from '../food/food.component';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {

  // @ViewChild("p") pEle!: ElementRef;
  // @ViewChildren("p") pEles!: QueryList<ElementRef>
  @ViewChild("b") boxEle!: ElementRef;
  @ViewChild(FoodComponent) foodEle!: FoodComponent;

  constructor() {
    // console.log(this.pEle);
  }

  ngOnInit() {
    // console.log(this.pEle);
  }

  ngAfterViewInit() {
    // console.log(this.pEle.nativeElement.innerText);
    // this.pEles.forEach(ele => {
    //   console.log(ele.nativeElement.innerText);
    // })
    // console.log(this.foodEle.foodType);
    if (this.foodEle.foodType === "Veg") {
      this.boxEle.nativeElement.style.backgroundColor = "green";
    } else {
      this.boxEle.nativeElement.style.backgroundColor = "red";
    }
    this.boxEle.nativeElement.style.border = "1px solid red";
    this.boxEle.nativeElement.style.borderRadius = "5px";
    this.boxEle.nativeElement.style.padding = "10px";
    this.boxEle.nativeElement.style.margin = "10px";

  }

}
