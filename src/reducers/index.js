import { combineReducers } from 'redux';
import auth from './auth-reducer';
import characters from './character-reducer';
import currentCharacter from './currentCharacter-reducer';
import lastChar from './lastCharacter-reducer';
import modal from './modal-reducer';
import user from './user-reducer';

const appReducer = combineReducers({
  modal,
  auth,
  user,
  characters,
  currentCharacter,
  lastChar
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
