let tabString = []
tabString.push("Marianczello", "Lingardinho", "Bucefał", "Bonifacy", "Domicela")
for (let i = 0; i < tabString.length; i++) {
  console.log(tabString[i])
}

for (let i = 0; i < tabString.length; i++) {
  tabString[i] = tabString[i].replace(/[aA]/g, 4).replace(/[eE]/g, 3)
  if (tabString[i].length > 6) {
    tabString[i] = (tabString[i].substring(0, 3) + "..." + tabString[i].substring(tabString[i].length - 3));
  }


}


console.log(tabString)
