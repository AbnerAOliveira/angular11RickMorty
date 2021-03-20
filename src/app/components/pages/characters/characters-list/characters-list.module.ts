import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersListComponent } from './characters-list.component';
import { CharactersListRoutingModule } from './characters-list-routing.module';



@NgModule({
  declarations: [CharactersListComponent],
  imports: [
    CommonModule,
    CharactersListRoutingModule,
  ]
})
export class CharactersListModule { }
