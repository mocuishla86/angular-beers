import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  getAllBeers() {
    return this.httpClient.get('https://api.punkapi.com/v2/beers').toPromise();
  }

  constructor(private httpClient: HttpClient) { }
}
