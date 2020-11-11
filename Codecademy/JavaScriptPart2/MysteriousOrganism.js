// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

// a factory function

function pAequorFactory(specimenNum, dna) {
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate() {
      let mutateBase = Math.floor(Math.random() * 15);
      let newDna = returnRandBase();
        if(this.dna[mutateBase] !== newDna) {
          this.dna[mutateBase] = newDna;
          } else {
          this.mutate();
          }
          return this.dna;
      },

      compareDNA(organism) {
        let sameDNA = 0;
          for (let i = 0; i < 15; i++) {
            if (this.dna[i] === organism.dna[i]) {
              sameDNA++;
            }
          }
      sameDNA /= 0.15;
      sameDNA = sameDNA.toFixed(2);
      console.log(`Specimen #${this.specimenNum} and specimen #${organism.specimenNum} have ${sameDNA}% DNA in common`);
      },

    willLikelySurvive() {
      let cgVals = [];
        this.dna.forEach(element => { 
          if (element=== 'C' || element === 'G') cgVals.push(element)
          }
        );
      let cgNum = cgVals.length;
      let survival = cgNum / .15;
            survival = survival.toFixed(2);   
        if (survival >= 60) {
        console.log(`The number of C and G bases is: ${cgNum} and the percentage is ${survival} %`);
        return true;
      } else {
        return false;
      }
    }
  }
};

let pAequor = []

    for (i = 0; i < 30; i++) {
      pAequor[i] = pAequorFactory(i + 1, mockUpStrand());

    if (pAequor[i].willLikelySurvive()) {
      console.log(`Specimen number: ${pAequor[i].specimenNum}, DNA is as follow: `, pAequor[i].dna);
      console.log(' ');
      } else {
        i--;
        pAequor[i] = pAequorFactory(i + 1, mockUpStrand());
      }
    };
