const getSleepHours= day =>
{
  if(day==='sunday')
    return 8;
  else if(day==='monday')
	{
          return 1;
	}
    else if(day==='tuesday')
	{
          return 9;
	}          
    else if(day==='wednesday')
	{
          return 2;
	}          
    else if(day==='thursday')
	{
          return 3;
	}          
  else if(day==='friday')
	{
          return 5;
	}          
  else if(day==='saturday')
	{
          return 7;
	}          
}
const getActualSleepHours = ()=>
{return getSleepHours('sunday')+getSleepHours('monday')+  getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday');}
const getIdealSleepHours=()=>
{
  const idealHours= 7.5;
  return idealHours*7;
}

console.log(getActualSleepHours());
console.log(getIdealSleepHours());

const calculateSleepDebt= ()=>
{
  let actualSleepHours=getActualSleepHours();
  let idealSleepHours=getIdealSleepHours();
  if((idealSleepHours - idealSleepHours)==0)
    return console.log('you got perfect amount of sleep');
  if(actualSleepHours==idealSleepHours)
    console.log('you got perfect amount of sleep');
  else if(actualSleepHours>idealSleepHours)
    console.log('you got more sleep than usual by '+(idealSleepHours - idealSleepHours)+' hours');
  else
    console.log('you need some rest because you need to sleep '+ (idealSleepHours - idealSleepHours)+ ' more');
}
calculateSleepDebt();
