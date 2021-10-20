// let tab = [];
// tab = randTab();
// tab = findTheSmallest(tab);
// tab = findTheBiggest(tab);
// howManyAppearances(tab);
// moveToEnd(tab);

function randTab() {
  let sum = 0;
  let i = 0;
  let tab = [];
  while (sum < 200) {
    tab[i] = Math.floor(Math.random() * 10) + 1;
    sum += tab[i++];
  }

  return tab;
}

function findTheSmallest(tab) {
  let theSmallestIndex = 0;
  for (let i = 0; i < tab.length; i++) {
    if (tab[theSmallestIndex] > tab[i]) {
      theSmallestIndex = i;
    }
  }

  console.log("3ab")
  for (let i = 0; i < tab.length; i++) {
    console.log(tab[i]);
  }

  console.log("najmniejszy element to " + tab[theSmallestIndex]);
  console.log("indeks tego elementu " + theSmallestIndex);
  tab.splice(theSmallestIndex, 1);
  console.log("wartość dla tego samego indeksu po usunięciu " + tab[theSmallestIndex])
  console.log(theSmallestIndex);

  for (let i = 0; i < tab.length; i++) {
    console.log(tab[i]);
  }

  console.log("---------------------------------------------------------");

  return tab;
}

function findTheBiggest(tab) {
  console.log("3 c")
  let theBiggestIndex = 0;
  for (let i = 0; i < tab.length; i++) {
    if (tab[theBiggestIndex] <= tab[i]) {
      theBiggestIndex = i;
    }
  }

  for (let i = 0; i < tab.length; i++) {
    console.log(tab[i]);
  }

  console.log("Największy element to " + tab[theBiggestIndex]);
  console.log("indeks tego elementu " + theBiggestIndex);
  tab.splice(theBiggestIndex, 1);
  console.log("wartość dla tego samego indeksu po usunięciu " + tab[theBiggestIndex])
  console.log(theBiggestIndex);

  for (let i = 0; i < tab.length; i++) {
    console.log(tab[i]);
  }

  console.log("---------------------------------------------------------");

  return tab;
}

function howManyAppearances(tab) {
  console.log("3d")
  let tab2 = new Array(11);
  tab2.fill(0, 0, 11);

  for (let i = 0; i < tab.length; i++) {
    tab2[tab[i]]++;
  }

  console.table(tab);
  console.table(tab2);

}

function moveToEnd(tab) {
  console.log("3e")
  for (let i = 0; i < tab.length; i++) {
    console.log(tab[i]);
  }

  console.log("---------------------------------------------------------");
  let tab2 = tab.splice(0, 10);
  for (let i = 0; i < tab2.length; i++) {
    console.log(tab2[i]);
  }

  console.log("---------------------------------------------------------");
  tab.push(...tab2);
  for (let i = 0; i < tab.length; i++) {
    console.log(tab[i]);
  }
  // console.log(tab);
  console.log("---------------------------------------------------------");
}
