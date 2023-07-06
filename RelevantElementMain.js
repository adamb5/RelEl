//Created by adam on March 3 2021


var elementNameList = getColumn("Periodic Table Elements", "Name");
var elementUseList = getColumn("Periodic Table Elements", "Uses");
var secondElement;
var firstElement;




//1st searchbar input
onEvent("1ste", "change", function( ) {
   firstElement = getText("1ste");
   setText("firstUse", findUse(firstElement));
   playSound("sound://category_transition/airy_gas_unlock_bonus_2.mp3", false);
});

//2nd searchbar input

onEvent("2nde", "change", function( ) {
  secondElement = getText("2nde");
  setText("secondUse", findUse (secondElement));
playSound("sound://category_transition/airy_gas_unlock_bonus_2.mp3", false);
});


//searches dataset for every elements corresponding use
function findUse(doubElementUse) {
  for (var i = 0; i < 118; i++) {
 if (doubElementUse==elementNameList[i]) {
 return (elementUseList[i]);
 }
  }
}
