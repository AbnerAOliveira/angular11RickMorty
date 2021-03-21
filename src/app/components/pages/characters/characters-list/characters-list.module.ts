import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersListComponent } from './characters-list.component';
import { CharactersListRoutingModule } from './characters-list-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [CharactersListComponent],
  imports: [
    CommonModule,
    CharactersListRoutingModule,
  ]
})
export class CharactersListModule { }
