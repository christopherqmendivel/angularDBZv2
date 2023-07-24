import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
})
export class ListCharactersComponent {

  @Input()
  public characterList: Character[] = [
    {
      name:'Bulma',
      power: 500,
  }
  ]


  @Output()
  public onDeleteID: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {

    if( !id ) return;

    console.log({ id })
    this.onDeleteID.emit( id );
  }
}
