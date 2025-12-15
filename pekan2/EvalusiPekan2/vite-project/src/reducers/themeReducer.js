export const themeInitialState = { theme: 'light' };

export function themeReducer(state = themeInitialState, action) {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    default:
      return state;
  }
}
