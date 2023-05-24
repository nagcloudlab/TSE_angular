import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, timer } from 'rxjs';
import { Recipe } from '../model/recipe.model';
import { delayWhen, retryWhen, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class RecipesService {

  recipes$ = this.http.get<Recipe[]>(`http://localhost:3001/api/recipes`);

  constructor(private http: HttpClient) { }
}
