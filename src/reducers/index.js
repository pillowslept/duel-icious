import { combineReducers } from 'redux';
import charactersReducers from './characters';
import duelReducers from './duel';
import duelHistoryReducers from './duelHistory';
import specialitiesReducer from './specialities';
import incrementalReducer from './incremental';

const reducers = combineReducers({
  specialities: specialitiesReducer,
  characters: charactersReducers,
  duel: duelReducers,
  duelHistory: duelHistoryReducers,
  incremental: incrementalReducer,
});

export default reducers;
