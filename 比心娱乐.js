

//https://raw.githubusercontent.com/reapple/JavaScript/master/比心娱乐.js

//封面信息（key、方法名不可更改， "source":"JS"不可缺少）
function coverInfo() {
    var name = "比心娱乐";
    var imageURL = "http://cdn.63a0.com/Uploads/Advertisement/20200814_153625_15973905850266_2414.jpg";
    var online = "40";
    return { "name": name, "logo": imageURL, "source":"JS", "quantity":online };
}

//房间列表（key、方法名不可更改）
function videoListInfo() {
    var url = "https://1008610010.yohui.vip/index.php/Api/LiveApi/getPlatformlist";
    var method = "POST";
    var param = { "id": "31" };
    var header = {};
    return { "url": url, "method": method, "param": param, "header": header };
}

//处理网络数据，统一格式（key、方法名不可更改）
function handleData(dic) {
    //dic 为字典，需经过处理，最终如下,key的名称必须如下所示
    var dataArr = dic["data"];
    var formatArr = new Array();
    for (let i = 0; i < dataArr.length; i++) {
        let subDic = dataArr[i];
        var formatDic = {
            "name": subDic["title"],
            "Popularity": subDic["watch_number"],
            "video": subDic["address"],
            "cover": subDic["header"],
            "id": subDic["room_id"]
        };
        formatArr.push(formatDic);
    }
    return { "data": formatArr };
}
