import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontsizecolorStyleComponent } from './fontsizecolor-style/fontsizecolor-style.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FontsizecolorStyleComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
            FormsModule
  ]
})
export class PracticeModule { }
