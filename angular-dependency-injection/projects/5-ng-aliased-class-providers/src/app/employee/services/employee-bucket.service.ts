import { Injectable } from '@angular/core';
import { BucketService } from '../../services/bucket.service';
@Injectable({
  providedIn: 'root',
})
export class EmployeeBucketService extends BucketService {
  constructor() {
    super();
  }
  override removeItem() {
    alert('Employees can not delete items');
  }
}
