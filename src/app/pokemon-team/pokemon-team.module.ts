import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonTeamComponent } from './pokemon-team.component';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component'
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule,  RouterModule.forChild([
    {
      path: '',
      component: PokemonTeamComponent
    }
  ])],
  declarations: [PokemonTeamComponent, PokemonCardComponent, FooterComponent],
  exports: [PokemonTeamComponent, PokemonCardComponent],
})
export class PokemonTeamModule {}
