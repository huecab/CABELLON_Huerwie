import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentPageRoutingModule } from './component-routing.module';

import { ComponentPage } from './component.page';
import { ModalComponent } from './modal/modal.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentPageRoutingModule
  ],
  declarations: [ComponentPage, ModalComponent, SliderComponent]
})
export class ComponentPageModule {}
