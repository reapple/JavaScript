


//封面信息（key、方法名不可更改， "source":"JS"不可缺少）
function coverInfo() {
    var name = "欧美";
    var imageURL = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600599707059&di=3d8ddb297b436782d5c6c354583a86fe&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F00%2F03%2F95%2F59568c7d883ccfd.jpg";
    var online = "40";
    return { "name": name, "logo": imageURL, "source": "JS", "quantity": online };
}

function pageInfo() {
    return { "usePage": "0", "beginPage": "1", "pageKey": "p" }
}

//房间列表（key、方法名不可更改）
function videoListInfo() {
    var url = "https://1008610010.yohui.vip/index.php/Api/LiveApi/getMovielistios";
    var method = "POST";
    var param = { "id": "5" };
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
