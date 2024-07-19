import { Component } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.interface';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonComponent } from './pokemon/pokemon.component';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent {
  public pokemons: Pokemon[] = [];
  public page: number = 0;
  public search: string = '';
  public pokemon: any; 

  constructor( 
    private pokemonService: PokemonService,
   ) { }

  ngOnInit(): void {

    this.pokemonService.getAll()
      .subscribe( pokemons => {
        this.pokemons = pokemons;
      });

  }

  next() {
    this.page += 100;
  }

  back() {
    if ( this.page > 0 )
      this.page -= 100;
  }

  showPokemon(data: any): void{
    this.pokemonService.get(data.id).subscribe( data => {
      this.pokemon = data;
      console.log('detalle pokemon', this.pokemon);
    });
  }

  searchPokemon( search: string ) {
    this.page = 0;
    this.search = search;
    console.log(search);
    
  }
}
