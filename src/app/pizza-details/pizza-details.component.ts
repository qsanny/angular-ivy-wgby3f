import { Component, OnInit } from '@angular/core';
import { Pizza } from '../models/pizza';

@Component({
  selector: 'app-pizza-details',
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.css'],
})
export class PizzaDetailsComponent implements OnInit {
  pizza: Pizza;

  constructor() {
    this.pizza = new Pizza(
      'Fratelli',
      'https://media-cdn.tripadvisor.com/media/photo-s/18/64/2f/f2/pizza.jpg',
      '« I Fratelli » c’est l’histoire de deux frères qui ont eu l’envie de partager leur culture et la pizza Napolitaine. Depuis 2017, la pizza napolitaine est entrée au patrimoine de l’Unesco. Nous respectons l’élaboration de la pâte avec une longue maturation et la cuisson au feu de bois dans un four napolitain.'
    );
  }

  ngOnInit() {}
}
