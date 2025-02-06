function today(date){
    
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    return ( year + "-" + month + "-" + day); 
}; 
export default today;