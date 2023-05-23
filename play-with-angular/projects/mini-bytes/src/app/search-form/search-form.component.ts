import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {

  searchForm!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.searchForm = this.fb.group({
      minMax: this.fb.group({
        min: [''],
        max: [''],
      }, { validator: this.minMaxalidator }),
      startEndDate: this.fb.group({
        startDate: [''],
        endDate: ['']
      }, { validator: this.startEndDateValidator })
    },);
  }


  handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    if (this.searchForm.valid)
      console.log(this.searchForm.value);
    else {
      console.log('invalid');
    }
  }

  minMaxalidator(group: FormGroup) {
    let min = group.get('min');
    let max = group.get('max');
    if (min?.value > max?.value) {
      return { minMax: "Min < Max" }
    } else {
      return null
    }
  }

  startEndDateValidator(group: FormGroup) {

  }

}
