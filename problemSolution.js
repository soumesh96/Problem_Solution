finalArray =[]
 array =[1,2,3,4,5,6,7,8,9,10]  // create your own array
 x=array
 dif = 1; //create yout own difference
for(let i=0;i<array.length;i++)
{
    a = array[i];

    for(let j =0;j<x.length;j++)
    {
        b=x[j];

        if( (a-b) == Math.abs(dif) )
        {

            finalArray.push(([a,b]))

        }
    }
}
console.log('res',finalArray)
