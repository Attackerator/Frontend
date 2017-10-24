import { combineReducers } from 'redux';
import auth from './auth-reducer';

console.log(auth);

const defaultState = {
  auth: null,
  user: {},
  characters: [],
  currentCharacter: {
    name: 'Horatio Hornblower',
    attacks: [{name:'bash', stat: 'strength', damageType: 'squishing', diceType: 6, diceCount: 2, description: 'smoosh', toHitBonus: 4, damageBonus: 1, characterId: 41, userId: 'abc', _id: 124}],
    saves: [],
    skills: [],
    spells: [],
    stats: [{strength: 50, dexterity: 10, constitution: 3, intelligence: 14, wisdom: 32, charisma: 9001, _id: 123, characterId: 41, userId: 'abc'}],
  }
};

const defaultStateReducer = (state = defaultState) => {
  return state;
};

export default combineReducers({ defaultStateReducer,auth });
