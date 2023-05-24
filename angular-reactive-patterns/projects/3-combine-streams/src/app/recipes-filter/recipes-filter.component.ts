import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { concatMap, map, bufferCount, bufferTime, filter } from 'rxjs/operators';
import { RecipesService } from '../core/services/recipes.service';

@Component({
  selector: 'app-recipes-filter',
  templateUrl: './recipes-filter.component.html'
})
export class RecipesFilterComponent implements OnInit {

  recipeForm = this.fb.group({
    title: [''],
    category: [''],
    ingredient: [''],
    tags: [''],
    prepTime: [''],
    cookingTime: [''],
  });

  constructor(private service: RecipesService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.recipeForm.get('title')?.valueChanges
      .pipe(
        // bufferCount(3),
        // map(val => val[2]),
        bufferTime(3000),
      )
      .pipe(filter(title => title.length > 0))
      .pipe(map(title => title[title.length - 1]))
      .subscribe(title => {
        console.log(title);
        this.service.updateFilter({ title: title });
      })
  }

  filterResults() {
    // this.service.updateFilter(this.recipeForm.value);
  }

  clearFilter() {
  }



}
