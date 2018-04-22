function isEmpty(obj){
    return (Object.getOwnPropertyNames(obj).length === 0);
}

function toQueryString(obj) {
    var parts = [];
    for (var i in obj) {
            parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
    }
    return parts.join("&");
}

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
  else
  	return undefined;
}

module.exports = {
  isEmpty : isEmpty,
  toQueryString : toQueryString,
  getCookie : getCookie,
};