
//可配置参数

//页数
var pageNum = "1";
//过滤房间类型：1：仅显示密码或收费房；0：显示所有房间
var roomType = "0";


//封面信息（key、方法名不可更改， "source":"JS"不可缺少）
function coverInfo() {
    var name = "花姬配置";
    var imageURL = "http://cdn.63a0.com/Uploads/Advertisement/20200717_152741_15949708617555_1660.jpg";
    var online = "50";
    return { "name": name, "logo": imageURL, "source": "JS", "quantity": online };
}

//房间列表（key、方法名不可更改）
function videoListInfo() {
    var url = "http://s.huaji-b.com:57769/api/public/?service=Home.getHot";
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
