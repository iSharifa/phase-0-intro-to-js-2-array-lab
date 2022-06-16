// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

  function destructivelyAppendCat (Ralph){
    cats.push(Ralph);
    return cats;
  }
  function destructivelyPrependCat (Bob){
    cats.unshift(Bob);
    return cats;
  }
  function destructivelyRemoveLastCat(Garfield){
    cats.pop(Garfield);
    return cats;
  }
  function destructivelyRemoveFirstCat (Milo){
    cats.shift(Milo);
    return cats;
  }
  function appendCat (Broom){
    var Broom_1 = [...cats,Broom];
    return Broom_1;
  }
  function prependCat (Arnold){
    var Arnold_0 = [Arnold, ...cats];
    return Arnold_0;
  }

  function removeLastCat (Garfield){
    var Garfield= cats.slice(0,cats.length-1);
    return Garfield;
  }
  function removeFirstCat (Milo){
    var Milo= cats.slice(1)
    return Milo;
  }
  














   
