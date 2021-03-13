


//封面信息（key、方法名不可更改， "source":"JS"不可缺少）
function coverInfo() {
    var name = "排行";
    var imageURL = "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1209359172,3602879285&fm=26&gp=0.jpg";
    var online = "40";
    return { "name": name, "logo": imageURL, "source": "JS", "quantity": online };
}

function pageInfo() {
    return { "usePage": "1", "beginPage": "1", "pageKey": "page" }
}

//房间列表（key、方法名不可更改）
function videoListInfo() {
    var url = "http://jk.5apk.cn/api/topsData";
    var method = "POST";
    var param = { "page": 1, "id":2 };
    var header = {"token": "OTY2NDY3JjE2MTQ5NDU4NDgmMTYxNTAzMjI0OCY5MTM1ZTYwZTA0MDc5M2UyZjBmNTFmMTk4YzMwNGMyZg%3D%3D"};
    return { "url": url, "method": method, "param": param, "header": header };
}

//处理网络数据，统一格式（key、方法名不可更改）
function handleData(dic) {
    var dataArr = dic["data"];
    var formatArr = new Array();
    for (let i = 0; i < dataArr.length; i++) {
        let subDic = dataArr[i];
        var url_param = {"method":"POST",
                 "url":"http://jk.5apk.cn/api/play",
                 "param":{"uuid": subDic["uuid"], "dl": 1},
                 "header":{"token": "OTY2NDY3JjE2MTQ5NDk2NjAmMTYxNTAzNjA2MCY4MTViZDBiNjE1MzBmYjNmZTBlZTFiYWY2OGEzYWRiZg%3D%3D"}
                };
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
