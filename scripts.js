//lyric info
const chorusString = "Don't want to be a fool for you, Just another player in your game for two, You may hate me but it ain't no lie, Baby bye bye bye, Bye bye, I Don't want to make it tough, I just want to tell you that I've had enough, It might sound crazy but it ain't no lie, Baby bye bye bye";

const chorusArray = chorusString.split(', ');
console.log(chorusArray)

// initial redux state
const initialState = {
  chorusString: chorusString,
  chorusArray: chorusArray,
  arrayPosition: 0,
  currentPhrase: chorusArray[0],
}

console.log(initialState);

//reducer here
const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case 'NEXT_LYRIC':
      let newPosition = state.arrayPosition +1;
      newState = {
        chorusString: state.chorusString,
        chorusArray: state.chorusArray,
        arrayPosition: newPosition,
        currentPhrase: state.chorusArray[newPosition]
      }
      return newState;
    default:
      return state;
  }
}

// jest tests and setup will go here
const { expect } = window;

expect(
  reducer(initialState, { type: null })
).toEqual(initialState);

expect(
  reducer(initialState, {type: 'NEXT_LYRIC'})
).toEqual({
  chorusString: chorusString,
  chorusArray: chorusArray,
  arrayPosition: 1,
  currentPhrase: chorusArray[1]
});

// redux store
const { createStore } = Redux;
// uses createStore from above
const store = createStore(reducer);
console.log(store.getState());

// click listener
const userClick = () => {
  console.log('click');
}
