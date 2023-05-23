import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BucketService } from '../../../services/bucket.service';
import { Fruit } from '../../../constants/fruit';
import { IFruit } from '../../../interfaces/fruit.interface';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.scss']
})
export class BucketComponent implements OnInit {
  $bucket!: Observable<IFruit[]>;
  selectedFruit: Fruit | null = null
  fruits: string[] = Object.values(Fruit);

  constructor(private bucketService: BucketService) { }

  ngOnInit(): void {
    this.$bucket = this.bucketService.$bucket;
    this.bucketService.loadItems();
  }

  addSelectedFruitToBucket() {
    this.bucketService.addItem({
      id: Date.now(),
      name: this.selectedFruit || Fruit.Apple
    })
  }
  deleteFromBucket(fruit: IFruit) {
    this.bucketService.removeItem(fruit);
  }

}
