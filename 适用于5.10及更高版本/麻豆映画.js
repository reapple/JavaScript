//封面信息（key、方法名不可更改， "source":"JS"不可缺少）
function coverInfo() {
    var name = "麻豆映画";
    var imageURL = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600599343097&di=614e2a466897ed74ff5f8e751769e940&imgtype=0&src=http%3A%2F%2Fpic1.zhimg.com%2Fv2-2e75a0cb5323db19567e35347e73ed53_im.jpg";
    var online = "10";
    return { "name": name, "logo": imageURL, "source": "JS", "quantity": online };
}

function pageInfo() {
    return { "usePage": "1", "beginPage": "1", "pageKey": "page" }
}

//房间列表（key、方法名不可更改）
function videoListInfo() {
    var url = "http://jk.5apk.cn/api/video_class";
    var method = "POST";
    var param = { "page": 1, "startId":14 };
    var header = {};
    return { "url": url, "method": method, "param": param, "header": header };
}

var url_param = {"method":"POST",
                 "url":"http://jk.5apk.cn/api/play",
                 "param":{},
                 "header":{"token": "OTY2NDY3JjE2MTQ4NTk3NDImMTYxNDk0NjE0MiZiOTMxYTRjZmNjYTU3ZTdhYmYyNzQxNGVjOGY2YzhiZA%3D%3D"}
                };

//处理网络数据，统一格式（key、方法名不可更改）
function handleData(dic) {
    var dataArr = dic["data"]["videoList"];
    var formatArr = new Array();
    for (let i = 0; i < dataArr.length; i++) {
        let subDic = dataArr[i];
        url_param.param = {"uuid": subDic["uuid"], "dl": 1};
        let title = subDic["video_name"];
        let start = title.indexOf("《");
        let end = title.indexOf("》");
        if(end > 0) {
            title = title.substring(start+1, end);
        }
        var formatDic = {
                "name": title,
                "Popularity": subDic["score"],
                "video": subDic["uuid"],
                "cover": subDic["video_cover"],
                "id": subDic["uuid"],
                "tagStr": "",
                "needGetURL" : "1",
                "getUrlParam" : url_param,
                "playerType": "safari",
                "roomTitle": subDic["video_time"]
            };
        
        formatArr.push(formatDic);
        
    }

    return { "data": formatArr };
}

function getPullURL(dic) {
    let quality = dic.data.quality;
    let url = quality[0].url;
    return {"pull_url": url, "playerType": "safari"};
}
