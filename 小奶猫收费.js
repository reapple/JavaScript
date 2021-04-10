//封面信息（key、方法名不可更改， "source":"JS"不可缺少）
function coverInfo() {
    var name = "小奶猫收费";
    var imageURL = "https://s3.ax1x.com/2021/02/08/yUzoGQ.png";
    var online = "10";
    return { "name": name, "logo": imageURL, "source": "JS", "quantity": online };
}



//房间列表（key、方法名不可更改）
function videoListInfo() {
    var url = "http://lfwmkj.com/api/direct/index";
    var method = "POST";
    var param = { "class": "9", "every": "50", "current":"1" };
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
            "name": subDic["anchor"]["name"],
            "Popularity": subDic["online"],
            "video": subDic["direct_url"],
            "cover": subDic["direct_image"],
            "id": subDic["room_number"]
        };
        formatArr.push(formatDic);
    }
    return { "data": formatArr };
}
