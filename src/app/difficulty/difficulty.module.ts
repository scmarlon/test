import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DifficultyPageRoutingModule } from './difficulty-routing.module';

import { DifficultyPage } from './difficulty.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DifficultyPageRoutingModule
  ],
  declarations: [DifficultyPage]
})
export class DifficultyPageModule {}
