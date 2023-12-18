import { Component, OnInit, signal } from '@angular/core';
import { PokeapiserviceService } from '../pokeapiservice.service';

export interface Pokemon {
  id: string,
  name: string
}

@Component({
  selector: 'app-pokemon-team',
  templateUrl: './pokemon-team.component.html',
  styleUrls: ['./pokemon-team.component.scss']
})


export class PokemonTeamComponent implements OnInit{

  firePokemons: Array<any> = [];
  electricPokemons: Array<any> = [];
  rockPokemons: Array<any> = [];
  waterPokemons: Array<any> = [];

  chosenFirePokemon = signal('');
  chosenElectricPokemon = signal('');
  chosenRockPokemon = signal('');
  chosenWaterPokemon = signal('');

  constructor(
    private _pokeapiserviceService: PokeapiserviceService
  ) {

  }

  ngOnInit(): void {
    this.getElectricPokemons();
    this.getFirePokemons();
    this.getRockPokemons();
    this.getWaterPokemons();
   
  }

  getElectricPokemons() {
    this._pokeapiserviceService.getElectricPokemons().subscribe(
      {
        next: (data) => {
          if(data != null) {
            this.electricPokemons = data;
            let i = Math.trunc(Math.random() * this.electricPokemons.length - 1);
            this.chosenElectricPokemon.set(this.electricPokemons[i].id);
          }
        },
        error: (e)=> {
          alert(e);
        }
      }
    )
  }

  getFirePokemons() {
    this._pokeapiserviceService.getFirePokemons().subscribe(
      {
        next: (data) => {
          if(data != null) {
            this.firePokemons = data;
            let i = Math.trunc(Math.random() * this.firePokemons.length - 1);
            this.chosenFirePokemon.set(this.firePokemons[i].id);
          }
        },
        error: (e)=> {
          alert(e);
        }
      }
    )
  }

  getRockPokemons() {
    this._pokeapiserviceService.getRockPokemons().subscribe( 
     {
      next: (data) => {
        if(data != null) {
          this.rockPokemons = data;
          let i = Math.trunc(Math.random() * this.rockPokemons.length - 1);
          this.chosenRockPokemon.set(this.rockPokemons[i].id);
        }
      },
      error: (e)=> {
        alert(e);
      }
      }
    )
  }

  getWaterPokemons() {
    this._pokeapiserviceService.getWaterPokemons().subscribe( 
      {
        next: (data) => {
          if(data != null) {
            this.waterPokemons = data;
            let i = Math.trunc(Math.random() * this.waterPokemons.length - 1);
            this.chosenWaterPokemon.set(this.waterPokemons[i].id);
          }
        },
        error: (e)=> {
          alert(e);
        }
      }
    )
  }

  doRefresh = async (event: { target: { complete: () => void; }; }) =>{
    let i = Math.trunc(Math.random() * this.electricPokemons.length - 1);
    this.chosenElectricPokemon.set(this.electricPokemons[i].id);
    let j = Math.trunc(Math.random() * this.firePokemons.length - 1);
    this.chosenFirePokemon.set(this.firePokemons[j].id);
    let k = Math.trunc(Math.random() * this.rockPokemons.length - 1);
    this.chosenRockPokemon.set(this.rockPokemons[k].id);
    let m = Math.trunc(Math.random() * this.waterPokemons.length - 1);
    this.chosenWaterPokemon.set(this.waterPokemons[m].id);
    event.target.complete();
	}

  onClickRefresh() {
    let i = Math.trunc(Math.random() * this.electricPokemons.length - 1);
    this.chosenElectricPokemon.set(this.electricPokemons[i].id);
    let j = Math.trunc(Math.random() * this.firePokemons.length - 1);
    this.chosenFirePokemon.set(this.firePokemons[j].id);
    let k = Math.trunc(Math.random() * this.rockPokemons.length - 1);
    this.chosenRockPokemon.set(this.rockPokemons[k].id);
    let m = Math.trunc(Math.random() * this.waterPokemons.length - 1);
    this.chosenWaterPokemon.set(this.waterPokemons[m].id);
  }
}
