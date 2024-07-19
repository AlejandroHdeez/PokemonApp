import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Pokemon } from '../pokemon/interfaces/pokemon.interface';



@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url: string = 'https://pokeapi.co/api/v2';

  constructor( private http: HttpClient ) { }


  getAll(): Observable<Pokemon[]> {
    return this.http.get<any>(`${ this.url }/pokemon?limit=1500`).pipe( map( this.transformSmallPokemonIntoPokemon ))
  }

  get(id: any) {
    return this.http.get<any>(`${ this.url }/pokemon/${id}`);
  }

  private transformSmallPokemonIntoPokemon( resp: any ): Pokemon[] {

    const list: Pokemon[] = resp.results.map( (item: any) => {

      const urlArr = item.url.split('/');
      const id  = urlArr[6];

      return {
        id,
        name: item.name,
        url: item.url
      }
    })

    return list;
  }
  

}
