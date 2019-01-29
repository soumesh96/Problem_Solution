farr =[]
array =[1,5,6,10,11,15,16,20,21,25,30,35]  // edit your own array
x=arr
diff = 5; //edit yout own difference
for(let i=0;i<array.length;i++)
{
    a = array[i];

    for(let itr =0;itr<x.length;itr++)
    {
        b=x[itr];

        if( (a-b) == Math.abs(diff) )
        {

            farr.push(([a,b]))

        }
    }
}
console.log('res',farr)
