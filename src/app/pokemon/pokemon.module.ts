import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { FiltroPipe } from './pipes/filtro.pipe';
import { PokemonComponent } from './pokemons/pokemon/pokemon.component';
import {MatCardModule} from '@angular/material/card';




@NgModule({
  declarations: [
    PokemonsComponent,
    FiltroPipe,
    PokemonComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    PokemonsComponent
  ]
})
export class PokemonModule { }
