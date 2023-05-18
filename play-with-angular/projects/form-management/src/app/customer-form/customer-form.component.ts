import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent {

  firstName!: string;
  lastName!: string;

  handleLoad() {
    //..
    let customer = {
      firstName: "foo",
      lastName: "bar"
    }
    this.firstName = customer.firstName;
    this.lastName = customer.lastName;
  }
  handleSubmit(event: Event) {
    event.preventDefault();
    console.log(this.firstName, this.lastName);
  }
  handleClear() {
    this.firstName = "";
    this.lastName = ""
  }

}
