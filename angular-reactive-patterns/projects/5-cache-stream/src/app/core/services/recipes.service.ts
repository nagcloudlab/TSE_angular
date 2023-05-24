import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, ReplaySubject, timer } from 'rxjs';
import { Recipe } from '../model/recipe.model';
import { share, shareReplay, switchMap } from 'rxjs/operators';
const BASE_PATH = "http://localhost:3001/api";
const REFRESH_INTERVAL = 5000;
const timer$ = timer(0, REFRESH_INTERVAL);

@Injectable({
  providedIn: 'root'
})

export class RecipesService {

  recipes$ = this.getRecipesList();

  private filterRecipeSubject = new BehaviorSubject<Recipe>({ title: '' });
  filterRecipesAction$ = this.filterRecipeSubject.asObservable();

  constructor(private http: HttpClient) { }

  updateFilter(criteria: any) {
    this.filterRecipeSubject.next(criteria);
  }

  saveRecipe(formValue: any): Observable<Recipe> {
    return this.http.post<Recipe>(`${BASE_PATH}/recipes/save`, formValue);
  }

  getRecipesList(): Observable<Recipe[]> {
    if (!this.recipes$) {
      return timer$.pipe(
        switchMap(_ => this.http.get<Recipe[]>(`${BASE_PATH}/recipes`)),
        /**Popular way using shareReplay**/
        // shareReplay(1)
        //Recommended way using RxJS7+
        // share({
        //   connector: () => new ReplaySubject(1),
        //   resetOnRefCountZero: true,
        //   resetOnComplete: true,
        //   resetOnError: true
        // })
      );
    }
    return this.recipes$;
  }


}

