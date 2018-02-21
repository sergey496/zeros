module.exports = function getZerosCount(number) {
	var sum=0;
	var kol;
	for (var i=1;i<12;i++)
		{	
			kol=Math.floor(number/Math.pow(5,i));
			sum+=kol;
		}
return sum;
}
