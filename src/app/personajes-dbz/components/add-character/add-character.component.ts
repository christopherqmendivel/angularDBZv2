import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = 
    {
      name: '',
      power: 0
    }
  
  

  addCharacter() {
    
    if( this.character.name.length === 0 ) return;
    
    this.onNewCharacter.emit( this.character );

    // Reset Form
    this.character = { name: '', power: 0 };
  }
}
