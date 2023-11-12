import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import subredditReducer from './subreddit/reducer'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  subreddit: subredditReducer,
})

export default persistReducer(persistConfig, rootReducer)
