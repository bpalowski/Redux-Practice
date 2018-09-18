// const songLyricsArray = {
//   1:"Don't want to be a fool for you, Just another player in your game for two, You may hate me but it ain't no lie, Baby bye bye bye, Bye bye, I Don't want to make it tough, I just want to tell you that I've had enough, It might sound crazy but it ain't no lie, Baby bye bye bye".split(', '),
//   2:"Twenty-five years and my life is still, Trying to get up that great big hill of hope, For a destination, I realized quickly when I knew I should, That the world was made up of this brotherhood of man, For whatever that means, And so I cry sometimes when I'm lying in bed, Just to get it all out what's in my head, And I, I am feeling a little peculiar, And so I wake in the morning and I step outside, And I take a deep breath and I get real high, and I Scream from the top of my lungs, What's going on?, And I say hey yeah yeah hey yeah yeah, I said hey what's going on?, And I say hey yeah yeah hey yeah yeah,I said hey what's going on?".split(', ')
// };
// // INITIAL REDUX STATE
// const initialState = {
//   //In the code above we set a key called songLyricsArray equal to the value of the songLyricsArray constant. This ensures songLyricsArray is part of our Redux state.
//   songLyricsArray: songLyricsArray,
//   //We also include a key called arrayPosition and set it to 0. This will refer to which lyric in the array the user is on. By setting it to 0 we tell the application it should begin on the first song lyric when it is launched.
//   arrayPosition: 0,
// };
// //Redux Reducer
// const reducer = (state = initialState, action) => {
//   let newState;
//   switch (action.type){
//     case 'NEXT_LYRIC':
//     let newArrayPosition = state.arrayPosition + 1;
//     let newState ={
//       songLyricsArray: state.songLyricsArray,
//       arrayPosition: newArrayPosition,
//     }
//     return newState;
//   case 'RESTART_SONG':
//     newState = initialState;
//     return newState;
//   default:
//     return state;
//   }
// }
//
// // JEST TESTS + SETUP
// const { expect } = window;
//
// expect(reducer(initialState, { type: null })).toEqual(initialState);
//
// expect(reducer(initialState, { type: 'NEXT_LYRIC' })).toEqual({
//   songLyricsArray: songLyricsArray,
//   arrayPosition: 1
// });
//
// expect(reducer({
//     songLyricsArray: songLyricsArray,
//     arrayPosition: 1,
//   },
//   { type: 'RESTART_SONG' })
// ).toEqual(initialState);
//
// const {createStore} = Redux;
// const shoeStore = createStore(reducer);
// console.log(shoeStore.getState)
// // console.log(initialState);
//
// const renderLyrics = () => {
//   // defines a lyricsDisplay const referring to the div with a 'lyrics' ID in index.html
//   const lyricsDisplay = document.getElementById('lyrics');
//   // if there are already lyrics in this div, remove them one-by-one until it is empty
//   while (lyricsDisplay.firstChild){
//     lyricsDisplay.removeChild(lyricsDisplay.firstChild);
//   }
//   // Locates the song lyric at the current arrayPosition:
//   const currentLine = shoeStore.getState().songLyricsArray[shoeStore.getState().arrayPosition];
//   // creats DOM text node containing the song lyrics identified in the line above:
//   const renderedLine = document.createTextNode(currentLine);
//   // Adds text node created in line above to 'lyrics' div in DOM
//   document.getElementById('lyrics').appendChild(renderedLine);
// }
//
// // runs renderLyrics() method from above when page is finished loading
// //window.onload is html5 version of jQuerys $(document).ready()
// window.onload = function(){
//   renderLyrics();
// }
//
// // CLICK LISTENER
// const userClick = () => {
//   console.log('click');
//   const currentState = shoeStore.getState();
//   if(currentState.arrayPosition === currentState.songLyricsArray.length -1){
//     shoeStore.dispatch({type: 'RESTART_SONG' } );
//   }else{
//   shoeStore.dispatch({ type: 'NEXT_LYRIC'} );
//  }
// }
//
// // SUBSCRIBE TO REDUX STORE
// shoeStore.subscribe(renderLyrics);
