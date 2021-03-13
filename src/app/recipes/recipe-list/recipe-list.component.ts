import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is a simply test', 
    'https://www.kyleecooks.com/wp-content/uploads/2020/07/Italian-Mozzarella-Chicken-21-1024x1536.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
