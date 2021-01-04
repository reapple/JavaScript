

//https://raw.githubusercontent.com/reapple/JavaScript/master/花姬可配置.js
//可配置参数

//页数
var pageNum = "1";
//过滤房间类型：1：仅显示密码或收费房；0：显示所有房间
var roomType = "0";


//封面信息（key、方法名不可更改， "source":"JS"不可缺少）
function coverInfo() {
    var name = "花姬配置";
    var imageURL = "https://vx3w6yeuqr.oss-cn-shanghai.aliyuncs.com/logo/huaji.png";
    var online = "50";
    return { "name": name, "logo": imageURL, "source": "JS", "quantity": online };
}

//房间列表（key、方法名不可更改）
function videoListInfo() {
    var url = "http://s40000.0yk75p.com/api/public/?service=Home.getHot";
    var method = "POST";
    var param = { "p": pageNum };
    var header = {};
    return { "url": url, "method": method, "param": param, "header": header };
}

//处理网络数据，统一格式（key、方法名不可更改）
function handleData(dic) {
    var dataArr = dic["data"]["info"][0]["list"];
    var formatArr = new Array();
    for (let i = 0; i < dataArr.length; i++) {
        let subDic = dataArr[i];
        if (subDic["type"] == roomType || roomType == "0") {
            var formatDic = {
                "name": subDic["user_nicename"],
                "Popularity": subDic["nums"],
                "video": subDic["pull"],
                "cover": subDic["avatar"],
                "id": subDic["uid"]
            };
            formatArr.push(formatDic);
        }

    }

    return { "data": formatArr };
}
