// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, baseArray) => {
  return {
    specimenNum: num,
    dna: baseArray,
    //randomly select a base from .dna and change it
    mutate() {
      let newBase = baseArray[Math.floor(Math.random() * baseArray.length)];
      let index = baseArray.indexOf(newBase);
      let randBase = returnRandBase();

      if (newBase !== randBase) {
        baseArray.splice(index, 1, randBase);
      }
    },
    //compare base sequences and return percentage of similarities
    compareDNA(compArray) {
      let count = 0;
      for (let i = 0; i < compArray.length; i++) {
        if (compArray[i] === baseArray[i]) {
          count++;
        }
      }
      let percentage = (count / compArray.length) * 100;
      console.log(`Specimen #1 and specimen #2 have ${percentage.toFixed(0)}% DNA in common.`)
    }
  }
}
  







