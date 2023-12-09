import { combineReducers } from '@reduxjs/toolkit';
import currentSession from './sessionReducer';
import currentStory from './storyReducer';

const reducer = {
    currentSession: currentSession,
    currentStory: currentStory
}

export default combineReducers(reducer);