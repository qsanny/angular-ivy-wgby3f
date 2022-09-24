import { Component, OnInit } from '@angular/core';
import { Pizza } from '../models/pizza';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css'],
})
export class PizzaListComponent implements OnInit {
  pizza_list: Pizza[] = [];

  constructor() {
    this.pizza_list.push(
      new Pizza(
        'Fratelli',
        'https://media-cdn.tripadvisor.com/media/photo-s/18/64/2f/f2/pizza.jpg',
        '« I Fratelli » c’est l’histoire de deux frères qui ont eu l’envie de partager leur culture et la pizza Napolitaine. Depuis 2017, la pizza napolitaine est entrée au patrimoine de l’Unesco. Nous respectons l’élaboration de la pâte avec une longue maturation et la cuisson au feu de bois dans un four napolitain.'
      )
    );

    this.pizza_list.push(
      new Pizza(
        'In Teglia',
        'https://media-cdn.tripadvisor.com/media/photo-s/0d/4f/25/e5/dsc-0024-largejpg.jpg',
        'pizza à la coupe, au poids à la romaine ou classique.Vous pouvez réaliser votre pizza sur mesure. Produits frais uniquement. pizza réalisées dans la pure tradition italienne.'
      )
    );
  }

  ngOnInit() {}
}
