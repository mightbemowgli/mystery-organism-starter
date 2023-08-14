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
      let newBase = this.dna[Math.floor(Math.random() * this.dna.length)];
      let index = this.dna.indexOf(newBase);
      let randBase = returnRandBase();

      if (newBase !== randBase) {
        this.dna.splice(index, 1, randBase);
      }
    },
    //compare base sequences and return percentage of similarities
    compareDNA(compArray) {
      let count = 0;
      for (let i = 0; i < compArray.dna.length; i++) {
        if (compArray.dna[i] === this.dna[i]) {
          count++;
        }
      }
      let percentage = (count / compArray.dna.length) * 100;
      console.log(`Specimen #${this.specimenNum} and Specimen #${compArray.specimenNum} have ${percentage.toFixed(0)}% DNA in common.`)
    },
    //if dna array contains > 60% C & G bases
    willLikelySurvive() {
      let count = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'G' || this.dna[i] === 'C') {
          count++;
        }
      }
      let percentage = (count / this.dna.length) * 100;
      return percentage >= 60 ? true : false;
    }
  }
}

const sample = [];
let sampleCount = 0;
while (sample.length < 30) {
  let spec = pAequorFactory(sampleCount, mockUpStrand());
  if (spec.willLikelySurvive()) {
    sample.push(spec);
    sampleCount++;
  }
}

console.log(sample);







