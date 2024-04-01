// star-rating.component.ts

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  @Input() value: number = 0; // Initialize with default value
  @Input() totalStars: number = 5; // Initialize with default value
  @Input() checkedColor: string = 'red'; // Initialize with default value
  @Input() uncheckedColor: string = 'black'; // Initialize with default value
  @Input() size: string = '22px'; // Initialize with default value
  @Input() readonly: boolean = false; // Initialize with default value

  stars: number[] = []; // Initialize stars array

  constructor() { }

  ngOnInit(): void {
    // Generate array of star indices based on totalStars
    this.stars = Array(this.totalStars).fill(0).map((_, i) => i);
  }

  onClick(index: number): void {
    if (!this.readonly) {
      this.value = index + 1;
    }
  }
}
