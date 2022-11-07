var data = [];

function initDB(){
    if(localStorage.getItem('data')){
        if(localStorage.getItem('data').length>0){
            data=JSON.parse(localStorage.getItem('data'))
        }
    }
    return data;
}
function insertUser(){
    data=initDB();
    const nameFR=document.getElementById('name').value
    let user = {
        name:nameFR
    };
    data=[];
    data.push(user);
    console.log(data)
    localStorage.setItem('data',JSON.stringify(data));
}
function loadUser(){
    data=initDB();
    console.log(data)

    document.getElementById('nameDB').innerHTML=data.length>0? data[0].name : '';
}
loadUser();