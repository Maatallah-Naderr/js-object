const markMiler = {
    name : 'Mark Miler',
    masse : 78 ,
    heigh : 1.69 ,
    calBmi: function(masse , heigh)
    {
         let bmi = this.masse / this.heigh**2 ;

         return bmi ;
    }
};
console.log(markMiler.calBmi());



const johnSmith = {
    name : 'jhon Smith',
    masse : 92 ,
    heigh : 1.95 ,
    calBmi : function (masse , heigh) {
        let bmi = this.masse / this.heigh**2 ;
        return bmi ;
    }



}
 console.log(johnSmith.calBmi());

// with ternaly  operator

//   console.log(`${markMiler.calBmi()}>${johnSmith.calBmi()} ?

//   "${markMiler.name} is bmi ${markMiler.calBmi()} heigher than ${johnSmith.name} bmi (${johnSmith.calBmi()})" :


//   "${johnSmith.name} is bmi ${johnSmith.calBmi()} heigher than ${markMiler.name} bmi (${markMiler.calBmi()}"
         
  
//   `);

// with if condition

  if (markMiler.calBmi() > johnSmith.calBmi() ) {

    console.log(`${markMiler.name} is bmi ${markMiler.calBmi()}

     heigher than ${johnSmith.name} bmi (${johnSmith.calBmi()})`);

     } else if (johnSmith.calBmi()> markMiler.calBmi()){

        console.log(`${johnSmith.name} is bmi ${johnSmith.calBmi()} 

        heigher than ${markMiler.name} bmi (${markMiler.calBmi()}`);
        }
        else
        console.log(`${markMiler.name} and ${johnSmith.name} have a some bmi (${johnSmith.calBmi()})`);

  