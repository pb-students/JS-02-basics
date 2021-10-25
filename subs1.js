 for (let i = 0; i <= 100; i++) {
   if ((i % 2 === 0) && (i % 3 === 0)) {
     console.log("FizBuz")
     continue;
   }

   if ((i % 2 === 0)) {
     console.log("Fiz");
     continue;
   }

   if (i % 3 === 0) {
     console.log("Buz");
     continue;
   }

   console.log(i);
 }
