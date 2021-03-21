import { Component, OnInit } from '@angular/core';
import { DatasService } from '@app/service/datas.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {

  constructor(private dataService : DatasService) { }

  public characters:any;

  ngOnInit(): void {
    this.getCharacters()
  }
  getCharacters(){
    this.dataService.getCharacters().subscribe(data => {
      this.characters = data.results  ;
      console.log(this.characters);
    });
  }

}
