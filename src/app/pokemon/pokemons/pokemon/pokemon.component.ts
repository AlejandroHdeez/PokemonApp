import { Component, inject } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {

  pokemon: any

  constructor(
    private pokemonService: PokemonService
  ){

  }

  ngOnInit(): void {
  }

  getPokemon(){
    this.pokemonService.get(1).subscribe( data => {
      this.pokemon = data;
      console.log('detalle pokemon', this.pokemon);
    });
  }

  close(){
    
  }

  

}
