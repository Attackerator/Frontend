import { combineReducers } from 'redux';
import auth from './auth-reducer';
import characters from './character-reducer';
import currentCharacter from './currentCharacter-reducer';
import lastChar from './lastCharacter-reducer';

const defaultState = {
  auth: null,
  user: {},
  characters: [{name: 'Horatio Hornblower', characterId: 41},{name: 'Donkey', characterId: 1},{name: 'Sarah', characterId: 12}],
  currentCharacter: {
    name: 'Horatio Hornblower',
    attacks: [{name:'bash', stat: 'strength', damageType: 'squishing', diceType: 6, diceCount: 2, description: 'smoosh', toHitBonus: 4, damageBonus: 1, characterId: 41, userId: 'abc', _id: 124}],
    saves: [{_id: 432901, type: 'fortitude', bonus: -2, stat: 'constitution', characterId: 41, userId: 'abc'}],
    skills: [ {_id: '59f124824ae09b0004c04d4e', name: 'medicine', stat: 'intelligence', bonus: 14, characterId: '59f122d94ae09b0004c04d4d', userId: '59f122b44ae09b0004c04d4c' } ],
    spells: [{name:'I\'m a chargin ma Lazer', stat: 'charisma', damageType: 'zappy', diceType: 20, diceCount: 14, description: 'pew pew lazers shoot all over the place', toHitBonus: 0, damageBonus: 42, characterId: 41, userId: 'abc', _id: 121}],
    stats: [{strength: 50, dexterity: 10, constitution: 3, intelligence: 14, wisdom: 32, charisma: 9001, _id: 123, characterId: 41, userId: 'abc'}],
  }
};

const defaultStateReducer = (state = defaultState) => {
  return state;
};

export default combineReducers({
  defaultStateReducer,
  auth,
  characters,
  currentCharacter,
  lastChar
});
