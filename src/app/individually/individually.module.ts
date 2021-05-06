import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndividuallyPageRoutingModule } from './individually-routing.module';

import { IndividuallyPage } from './individually.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndividuallyPageRoutingModule
  ],
  declarations: [IndividuallyPage]
})
export class IndividuallyPageModule {}
