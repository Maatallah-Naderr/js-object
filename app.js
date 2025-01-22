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
// console.log(markMiler.calBmi());



const johnSmith = {
    name : 'jhon Smith',
    masse : 92 ,
    heigh : 1.95 ,
    calBmi : function (masse , heigh) {
        let bmi = this.masse / this.heigh**2 ;
        return bmi ;
    }



}
// console.log(johnSmith.calBmi());

  console.log(`${markMiler.calBmi()}>${johnSmith.calBmi()} ?

  "${markMiler.name} is bmi ${markMiler.calBmi()} heigher than ${johnSmith.name} bmi (${johnSmith.calBmi()})" :


  "${johnSmith.name} is bmi ${johnSmith.calBmi()} heigher than ${markMiler.name} bmi (${markMiler.calBmi()}"
         
  
  `);
  