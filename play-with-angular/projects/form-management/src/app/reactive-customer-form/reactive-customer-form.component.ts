import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { zip, filter, debounceTime } from 'rxjs'

@Component({
  selector: 'app-reactive-customer-form',
  templateUrl: './reactive-customer-form.component.html',
  styleUrls: ['./reactive-customer-form.component.css']
})
export class ReactiveCustomerFormComponent {

  customerForm!: FormGroup;

  errors: any = {}

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.customerForm = this.formBuilder.group({
      firstName: ['John', [Validators.required, Validators.minLength(3)]],
      lastName: ['Doe', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['9945674228'],
      notification: ['email'],
      addressFormArray: this.formBuilder.array([])
    }, /*{ validators: [this.crossFieldValidator] }*/);


    let lastName = this.customerForm.get('lastName') as AbstractControl;
    zip(lastName.valueChanges, lastName.statusChanges)
      .subscribe({
        next: (arr) => {
          if (arr[1] === "INVALID") {
            if (lastName.errors) {
              if (lastName.errors["required"]) {
                this.errors["lastName"] = "lastName is required";
              }
              if (lastName.errors["minlength"]) {
                this.errors["lastName"] = "lastName must be at least 3 characters";
              }
            }
          } else if (arr[1] === "VALID") {
            this.errors["lastName"] = "";
          }
        }
      })

    let email = this.customerForm.get('email') as AbstractControl;
    email.valueChanges
      .pipe(debounceTime(3000))
      .subscribe(value => {
        console.log(email);
      })

    //this.addressFormArray?.push(this.createAddressFormGroup());

  }

  createAddressFormGroup(): FormGroup {
    return this.formBuilder.group({
      street: ['', [Validators.required, Validators.minLength(3)]],
      city: ['', [Validators.required, Validators.minLength(3)]],
      state: ['', [Validators.required, Validators.minLength(3)]],
      zip: ['', [Validators.required, Validators.minLength(3)]],
      country: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  get addressFormArray() {
    return this.customerForm.get('addressFormArray') as FormArray;
  }

  handleNewAddress() {
    this.addressFormArray.push(this.createAddressFormGroup());
  }
  handleRemoveAddress(index: number) {
    this.addressFormArray.removeAt(index);
  }

  handleNotiChange(notiType: string) {
    let mobileFormControl = this.customerForm.get('mobile') as AbstractControl;
    if (notiType === "sms") {
      mobileFormControl.setValidators([Validators.required, Validators.pattern(/\d{10}/)])
    } else {
      mobileFormControl.clearValidators()
    }
    mobileFormControl.updateValueAndValidity();
  }

  handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    console.log(this.customerForm.value);
  }
  handleClear() {
    this.customerForm.reset();
  }
  handleLoad() {
    let customer = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'upchh@example.com'
    }
    // this.customerForm.setValue(customer);
    this.customerForm.patchValue(customer);
  }
  zipCodeValidator(control: AbstractControl): { [key: string]: any } | null {
    let zipCodePattern = /\d{6}/
    let zidCode = control.value;
    if (zipCodePattern.test(zidCode)) {
      return null;
    } else {
      return { zip: "invalid" }
    }
  }
  crossFieldValidator(group: FormGroup) {
    let city = group.controls['city'].value;
    let zip = group.controls['zip'].value as string;
    if (city === "chennai" && zip.startsWith("6")) {
      return null
    } else {
      return { city_zip: "invalid" }
    }
  }


}
