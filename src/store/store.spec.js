import { createStore } from 'redux';
// import jest from 'jest';
import appReducer, { initialState } from '../reducers/appReducer';
import * as clockActions from '../actions/clockActions';
import * as types from '../actions/actionTypes';

describe('Store', () => {

  describe('with initial state', () => {
    let store;
    beforeEach(() => {
      store = createStore(appReducer, initialState);
    });

    it('should increment work time', () => {
      store.dispatch(clockActions.incrementWorkTime());
      expect(store.getState().workTime).toEqual(initialState.workTime + 1);
    });

    it('should decrement work time', () => {
      store.dispatch(clockActions.decrementWorkTime());
      expect(store.getState().workTime).toEqual(initialState.workTime - 1);
    });

    it('should increment break time', () => {
      store.dispatch(clockActions.incrementBreakTime());
      expect(store.getState().breakTime).toEqual(initialState.breakTime + 1);
    });

    it('should decrement break time', () => {
      store.dispatch(clockActions.decrementBreakTime());
      expect(store.getState().breakTime).toEqual(initialState.breakTime - 1);
    });

    it('should start the timer', () => {
      store.dispatch(clockActions.runTimer());

      expect(store.getState().appState).toEqual('work');
      expect(store.getState().currentTime).toEqual({ minutes: initialState.workTime, seconds: 0 });
    });

    it('should not do anything on stop', () => {
      store.dispatch(clockActions.stopTimer());
      expect(store.getState()).toEqual(initialState);
    });

    it('should not do anything on TICK', () => {
      store.dispatch({ type: types.TICK });
      expect(store.getState()).toEqual(initialState);
    });
  });

  describe('with initial state after start', () => {
    let store;
    let newState;
    beforeEach(() => {
      store = createStore(appReducer, initialState);
      store.dispatch(clockActions.runTimer());
      newState = store.getState();
    });

    it('should not increment work time', () => {
      store.dispatch(clockActions.incrementWorkTime());
      expect(store.getState()).toEqual(newState);
    });

    it('should not decrement work time', () => {
      store.dispatch(clockActions.decrementWorkTime());
      expect(store.getState()).toEqual(newState);
    });

    it('should not increment break time', () => {
      store.dispatch(clockActions.incrementBreakTime());
      expect(store.getState()).toEqual(newState);
    });

    it('should not decrement break time', () => {
      store.dispatch(clockActions.decrementBreakTime());
      expect(store.getState()).toEqual(newState);
    });

    it('should not start the timer', () => {
      store.dispatch(clockActions.runTimer());
      expect(store.getState()).toEqual(newState);
    });

    it('should stop on STOP', () => {
      store.dispatch(clockActions.stopTimer());
      expect(store.getState()).toEqual({
        ...newState,
        appState: 'stopped'
      });
    });

    it('should change current time on TICK', () => {
      store.dispatch({ type: types.TICK });
      expect(store.getState()).toEqual({
        ...newState,
        currentTime: { minutes: 24, seconds: 59 }
      });
    });
  });

  describe('when workTime is up', () => {
    let store;
    beforeEach(() => {
      store = createStore(appReducer, {
        ...initialState,
        workTime: 1
      });
      store.dispatch(clockActions.runTimer());
    });

    it('should switch to BREAK and play audio tag', () => {
      const playMock = jest.fn();
      const spy = jest.spyOn(document, 'getElementById').mockImplementation(() => ({
        volume: 0,
        play: playMock
      }));

      for (let i = 0; i < 60; i++) {
        store.dispatch({ type: types.TICK });
      }
      expect(store.getState().appState).toBe('work');

      store.dispatch({ type: types.TICK });
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith('soundMP3');
      expect(playMock).toHaveBeenCalledTimes(1);
      expect(store.getState().appState).toBe('break');
    });
  });
});
