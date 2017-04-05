export default function workTimeReducer(state = 25, action) {
  switch(action.type) {
    case 'INCREMENT_WORK_TIME':
      return (state += 1);

    default:
      return state;
  }
}
