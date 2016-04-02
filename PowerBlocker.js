/*fetch gpa and grade data from powerschool
along with courses*/
/*regularly refresh until criteria (grade) met*/

var SM = (function () {

    var my = {};

    my.get = function (key) {
        return localStorage.getItem(key);
    }
    my.put = function (key, value) {
        return localStorage.setItem(key, value);
    }
    my.delete = function (key) {
        return localStorage.removeItem(key);
    }
    
    return my;

}());

var PB = (function (SM){
    
    
    
    
    
}(SM)));