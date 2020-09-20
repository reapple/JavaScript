//封面信息（key、方法名不可更改， "source":"JS"不可缺少）
function coverInfo() {
    var name = "大神看片儿";
    var imageURL = "https://img.9a34b7.com:9008/article/20/08/20/2020-08-20-13-43-18-5f3e0d767bc4a.jpg";
    var online = "40";
    return { "name": name, "logo": imageURL, "source": "JS", "quantity": online };
}
//分页信息
function pageInfo() {
    return { "usePage": "0", "beginPage": "1", "pageKey": "p" }
}

//房间列表（key、方法名不可更改）
function videoListInfo() {
    var url = "https://1008610010.yohui.vip/index.php/Api/LiveApi/getMovielistios";
    var method = "POST";
    var param = { "id": "2" };
    var header = {};
    return { "url": url, "method": method, "param": param, "header": header };
}

//处理网络数据，统一格式（key、方法名不可更改）
function handleData(dic) {
    var dataArr = dic["data"];
    var formatArr = new Array();
    for (let i = 0; i < dataArr.length; i++) {
        let subDic = dataArr[i];

        var formatDic = {
            "name": subDic["name"],
            "Popularity": "9",
            "video": subDic["shiping"],
            "cover": subDic["img"],
            "id": "0"
        };
        formatArr.push(formatDic);

    }

    return { "data": formatArr };
}
