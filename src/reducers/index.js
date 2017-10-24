import { combineReducers } from 'redux';
import auth from './auth-reducer';
import characters from './character-reducer';
import currentCharacter from './currentCharacter-reducer';

const defaultState = {
  auth: null,
  user: {},
  characters: [],
  currentCharacter: {
    name: 'Horatio Hornblower',
    attacks: [{name:'bash', stat: 'strength', damageType: 'squishing', diceType: 6, diceCount: 2, description: 'smoosh', toHitBonus: 4, damageBonus: 1, characterId: 41, userId: 'abc', _id: 124}],
    saves: [],
    skills: [ {_id: 3198, name: 'medicine', stat: 'intelligence', bonus: 14, characterId: 41, userId: 'abc' } ],
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
