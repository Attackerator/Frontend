import { combineReducers } from 'redux';
import auth from './auth-reducer';
import characters from './character-reducer';
import currentCharacter from './currentCharacter-reducer';

const defaultState = {
  auth: null,
  user: {},
  characters: [{name: 'Horatio Hornblower', characterId: 41},{name: 'Donkey', characterId: 1},{name: 'Sarah', characterId: 12}],
  currentCharacter: {
    name: 'Horatio Hornblower',
    attacks: [{name:'bash', stat: 'strength', damageType: 'squishing', diceType: 6, diceCount: 2, description: 'smoosh', toHitBonus: 4, damageBonus: 1, characterId: 41, userId: 'abc', _id: 124}],
    saves: [{_id: 432901, type: 'fortitude', bonus: -2, stat: 'constitution', characterId: 41, userId: 'abc'}],
    skills: [ {_id: '59f100464ae09b0004c04d42', name: 'medicine', stat: 'intelligence', bonus: 14, characterId: '59f0ff654ae09b0004c04d40', userId: '59f0ab899d0a3d0004276878' } ],
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
  currentCharacter
});
