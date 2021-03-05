import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PineoPageRoutingModule } from './pineo-routing.module';

import { PineoPage } from './pineo.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { PineoService } from '../../services/pineo.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PineoPageRoutingModule,
    SharedModule
  ],
  declarations: [PineoPage],
  providers: [PineoService]
})
export class PineoPageModule { }
