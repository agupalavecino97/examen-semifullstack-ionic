import { Component, Input, signal } from '@angular/core';
import { PokeapiserviceService } from '../pokeapiservice.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})

export class PokemonCardComponent {
  @Input() pokemonId: string = '';
  @Input() type: string = '';
  pokemon = signal({id: 0, name: '', sprites: {front_default: '', back_default: ''}});
  
  constructor(
    private _pokeapiserviceService: PokeapiserviceService
  ) {

  }

  ngOnInit(): void {
    this.getPokemonDetails(this.pokemonId);
  }

  ngOnChanges(): void {
    this.getPokemonDetails(this.pokemonId);
  }

  getPokemonDetails(id: string) {
    this._pokeapiserviceService.getPokemon(id).subscribe(
      {
        next: (data) => {
          if(data != null) {
            this.pokemon.set(data);
          }
        },
        error: (e)=> {
          alert(e);
        }
      }
    )
  }
  
}
