import { Component, ContentChild, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {

  @ContentChild("contentHeader")
  contentHeadEle!: ElementRef;

  @ViewChild("viewHeader")
  viewHeaderEle!: ElementRef;


  ngAfterContentInit() {
    console.log("ngAfterContetInit");
    if (this.contentHeadEle) {
      this.contentHeadEle.nativeElement.innerText = this.contentHeadEle.nativeElement.innerText.toUpperCase()
    }
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
    if (!this.contentHeadEle) {
      this.viewHeaderEle.nativeElement.innerText = "Box"
    }

  }




}
