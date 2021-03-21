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
    'https://i.pinimg.com/originals/ac/3b/a2/ac3ba2c89be8c74b3567c72aec607c25.jpg'),
    new Recipe('A test Recipe', 'This is a simply test', 
    'https://i.pinimg.com/originals/ac/3b/a2/ac3ba2c89be8c74b3567c72aec607c25.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
