import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from "uuid";

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public title = 'DBZ Personajes';

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Krillin',
      power: 7500,
    },
    {
      id: uuid(),
      name: 'Roshi',
      power: 8500,
    },
    {
      id: uuid(),
      name: 'Broly',
      power: 10500,
    }
  ];



  addCharacter(character: Character): void {

    const newCharacter: Character = { ...character, id: uuid()    }
    this.characters.push(newCharacter);
  }

  deleteCharacterById( id: string) {
    this.characters = this.characters.filter( character => character.id !== id)
  }
}
