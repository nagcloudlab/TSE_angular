import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Recipe } from '../model/recipe.model';

@Injectable({
  providedIn: 'root'
})

export class RecipesService {

  recipes$ = this.http.get<Recipe[]>(`${"http://localhost:3001/api"}/recipes`); // stream-1

  private filterRecipeSubject = new BehaviorSubject<Recipe>({ title: '' });

  filterRecipesAction$ = this.filterRecipeSubject.asObservable(); // stream-2

  constructor(private http: HttpClient) { }

  updateFilter(criteria: any) {
    this.filterRecipeSubject.next(criteria);
  }
}

