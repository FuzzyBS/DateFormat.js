/*
	DateFormat.js by Bruce Sedlacek @FuzzyBS
*/

Date.prototype.format = function (strFormat) {
	'use strict';
	var d = new Date(this),
		mon = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		month = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		v = {
			's': String(d.getSeconds()),
			'ss': (d.getSeconds() < 10 ? '0' : '') + d.getSeconds(),
			'm': String(d.getMinutes()),
			'mm': (d.getMinutes() < 10 ? '0' : '') + d.getMinutes(),
			'h': String((((d.getHours() + 11) % 12) + 1)),
			'hh': ((((d.getHours() + 11) % 12) + 1) < 10 ? '0' : '') + (((d.getHours() + 11) % 12) + 1),
			'H': String(d.getHours()),
			'HH': (d.getHours() < 10 ? '0' : '') + d.getHours(),
			'a': (d.getHours() < 12 ? 'am' : 'pm'),
			'aa': (d.getHours() < 12 ? 'a.m.' : 'p.m.'),
			'A': (d.getHours() < 12 ? 'AM' : 'PM'),
			'AA': (d.getHours() < 12 ? 'A.M.' : 'P.M.'),
			'd': String(d.getDate()),
			'dd': (d.getDate() < 10 ? '0' : '') + d.getDate(),
			'ddd': day[d.getDay()],
			'dddd': weekday[d.getDay()],
			'M': String(d.getMonth()),
			'MM': (d.getMonth() < 10 ? '0' : '') + d.getMonth(),
			'MMM': mon[d.getMonth()],
			'MMMM': month[d.getMonth()],
			'yy': String(d.getYear()),
			'yyyy': String(d.getFullYear()),
			'z': (d.getTimezoneOffset() > 0 ? '+' : '') + (Math.int(d.getTimezoneOffset() / 60) < 10 ? '0' : '') + String(Math.int(d.getTimezoneOffset() / 60)) + ((d.getTimezoneOffset() % 60) < 10 ? '0' : '') + String(d.getTimezoneOffset() % 60)
		};
	return strFormat.replace(/(s+|m+|h+|H+|a+|A+|d+|M+|y+|z+)/g, function (key) {
		return v[key] || key;
	});
};
