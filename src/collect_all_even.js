'use strict';

function collect_all_even(collection) {
	var nums = [];

 	collection.forEach(function(ele){
 		if(ele % 2 == 0){
 			nums.push(ele);
 		}
 	});

 	return nums;
}
module.exports = collect_all_even;

123456;

