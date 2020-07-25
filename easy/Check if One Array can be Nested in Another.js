function canNest(arr1, arr2) {
	const minny1 = arr1.map(minArr => Math.min(...arr1))
	const minny2 = arr2.map(minArr2 => Math.min(...arr2))
	const maxxy2 = arr1.map(maxArr2 => Math.max(...arr1))
	const maxxy = arr2.map(maxArr => Math.max(...arr2))
	
	if (minny1 > minny2 && maxxy2 < maxxy){
		return true;
	}else{
		return false;
    }
    
    // I overdid this so much. Just wanted to test some things shorter sol is advisable if you're checking this for an answer 