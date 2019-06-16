import { Component, OnInit } from '@angular/core';
import { BeerService } from '../services/beer.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {
  lista:any ;
  error: boolean;

  constructor(private beerService: BeerService) { }

  ngOnInit() {
    this.beerService.getAllBeers()
    .then( datos => {
      this.lista = datos;
    })
    .catch(error => {
      this.error = true;
    });
  }

}
