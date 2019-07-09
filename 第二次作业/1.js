"use strict";  
function format (time, format) {
    var t = new Date(time);
    var tf = function (i) {
        return (i < 10 ? '0' : '') + i
    };
    return format.replace(/YYYY|MM|DD|hh|mm|ss/g, function (a) {
        switch (a) {
        case 'YYYY':
            return tf(t.getFullYear());
            break;
        case 'MM':
            return tf(t.getMonth() + 1);
            break;
        case 'mm':
            return tf(t.getMinutes());
            break;
        case 'DD':
            return tf(t.getDate());
            break;
        case 'hh':
            return tf(t.getHours());
            break;
        case 'ss':
            return tf(t.getSeconds());
            break;
        }
    });
}

function datetimeSort(ddl, arr) {
	ddl = new Date(ddl);
	ddl = ddl.getTime();
	let date_arr = [];
	for (let index in arr)
	{
		let time = new Date(arr[index]);
		date_arr.push(time.getTime()); 	
	}
	date_arr.sort();

	for (let index in date_arr)
	{
    let lateTime = 0;
		if (date_arr[index] <= ddl){lateTime = 0;}
		else{lateTime = Math.floor((date_arr[index]-ddl)/86400000)+1; }
		let new_date = new Date(date_arr[index]);
		new_date = format(new_date.getTime(),'YYYY-MM-DD hh:mm:ss');
		var output = {
			datetime: new_date,
			lateDays: lateTime
		};
		date_arr[index] = output;
	}
	return date_arr;
}

var ddl='2018-05-05 11:22:33'
var arr=['2018-05-04 11:22:33', '2017-05-05 11:22:33', '2018-05-05 11:22:33','2018-05-06 11:22:32','2018-05-06 11:22:33']
console.log(datetimeSort(ddl,arr));




