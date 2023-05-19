import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent {

  reviewForm!: FormGroup;
  @Output()
  newReview: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.reviewForm = this.fb.group({
      ratings: ['5'],
      text: [''],
      name: ['', [Validators.required]],
    })
  }

  handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    if (this.reviewForm.valid) {
      console.log(this.reviewForm.value);
      this.newReview.emit(this.reviewForm.value);
    }
    this.reviewForm.reset();
  }

}
