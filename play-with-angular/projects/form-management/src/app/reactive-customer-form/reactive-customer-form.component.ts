import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { zip, filter } from 'rxjs'

@Component({
  selector: 'app-reactive-customer-form',
  templateUrl: './reactive-customer-form.component.html',
  styleUrls: ['./reactive-customer-form.component.css']
})
export class ReactiveCustomerFormComponent {


  customerForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.customerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]]
    })

    let firstName = this.customerForm.controls['firstName'];
    // firstName
    //   .valueChanges
    //   .subscribe(value => console.log(value));

    // firstName
    //   .statusChanges
    //   .subscribe(status => console.log(status));

    zip(firstName.valueChanges, firstName.statusChanges)
      .pipe(filter(([, status]) => status === 'VALID'))
      .subscribe({
        next: data => console.log(data),
      })


  }
  handleClear() {
    this.customerForm.reset();
  }
  handleLoad() {
    let customer = {
      firstName: 'Nag',
      lastName: 'N'
    }
    this.customerForm.setValue(customer);
  }

  handleSubmit(event: SubmitEvent) {
    console.log(this.customerForm.value);
  }

}
