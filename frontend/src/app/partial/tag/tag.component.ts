import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food.ts.service';
import { Tag } from '../../shared/Models/Tag';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.css'
})
export class TagComponent implements OnInit {
  tags?:Tag[];
  constructor(foodService:FoodService) {
    foodService.getAllTags().subscribe(serverTags => {
      this.tags = serverTags;
    });
   }

  ngOnInit(): void {
  }

  

}
