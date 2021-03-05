
//封面信息（key、方法名不可更改， "source":"JS"不可缺少）
function coverInfo() {
    var name = "香港三级";
    var imageURL = "https://s3.ax1x.com/2020/12/18/rYJQLF.jpg";
    var online = "50";
    return { "name": name, "logo": imageURL, "source": "JS", "quantity": online };
}

function pageInfo() {
    return { "usePage": "1", "beginPage": "1", "pageKey": "page" }
}

//房间列表（key、方法名不可更改）
function videoListInfo() {
    var url = "http://jk.5apk.cn/api/video_class";
    var method = "POST";
    var param = { "page": 1, "limit":10, "class_id":[40, 41, 58] };
    var header = {};
    return { "url": url, "method": method, "param": param, "header": header };
}

var url_param = {"method":"POST", "url":"http://jk.5apk.cn/api/play", "param":{}, "header":{}};

//处理网络数据，统一格式（key、方法名不可更改）
function handleData(dic) {
    var dataArr = dic["data"]["videoList"];
    var formatArr = new Array();
    for (let i = 0; i < dataArr.length; i++) {
        let subDic = dataArr[i];
        url_param.param = {"uuid": subDic["uuid"], "dl": 1};
        var formatDic = {
                "name": subDic["video_name"],
                "Popularity": subDic["score"],
                "video": subDic["uuid"],
                "cover": subDic["video_cover"],
                "id": subDic["uuid"],
                "tagStr": "",
                "needGetUrl" : "1",
                "getUrlParam" : url_param,
                "palyerType":"safari",
                "roomTitle": subDic["video_time"]
            };
        
        formatArr.push(formatDic);
        
    }

    return { "data": formatArr };
}

function getPullURL(dic) {
    let quality = dic.data.quality;
    let url = quality[0].url;
    return {"pull_url": url};
}

