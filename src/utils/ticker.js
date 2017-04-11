let interval = null;

export function subscribeTickerTo(store) {
  store.subscribe(() => {
    if (store.getState().appState !== 'stopped' && interval === null) {
      interval = setInterval(() => {
        store.dispatch({
          type: 'TICK'
        });
      }, 1000);
    }
    if (store.getState().appState === 'stopped' && interval !== null) {
      clearInterval(interval);
      interval = null;
    }
  });
}
