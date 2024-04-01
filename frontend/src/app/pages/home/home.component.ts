import { Component, OnInit } from '@angular/core';
import { Food } from '../../shared/Models/Food';
import { FoodService } from '../../services/food.ts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  selectedRating: number = 0;
  foods: Food[] = [];
  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute) {
    let foodsObservalbe:Observable<Food[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm){
        foodsObservalbe = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);

      }else if (params.tagName){
        foodsObservalbe = this.foodService.getAllFoodsByTag(params.tagName);
      }else{
        foodsObservalbe = foodService.getAll();

      }
        foodsObservalbe.subscribe((serverFoods) => {
          this.foods = serverFoods;
        })
    })
  }

  ngOnInit(): void {
  }
  }

