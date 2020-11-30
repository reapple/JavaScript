
/**
 非专业人士制作。
# 互助码获取链接
^http:\/\/api\.turinglabs\.net\/api\/v1\/jd url script-request-header https://raw.githubusercontent.com/reapple/JavaScript/master/jdSharedCode/jd_sharedCode.js
 */

//东东工厂
const url = "";
const method = "GET";
const headers = {};
const data = {};

const myRequest = {
    url: url,
    method: method, // Optional, default GET.
    headers: headers, // Optional.
    body: JSON.stringify(data) // Optional.
};

$task.fetch(myRequest).then(response => {
    // response.statusCode, response.headers, response.body
    console.log(response.body);
    $notify("提交东东工厂互助码", "成功🎉", JSON.parse(response.body).message); // Success!
}, reason => {
    // reason.error
    $notify("提交东东工厂互助码", "失败⚠️", reason.error); // Error!
});


const cookieName = '东东工厂'
const cookieKey = 'ddFactory_url'
const chavy = init()
const cookieVal = $request.url
if (cookieVal) {
    if (cookieVal.indexOf("ddfactory") != -1) {
        if (chavy.setdata(cookieVal, cookieKey)) {
            chavy.msg(`${cookieName}`, '获取东东工厂链接: 成功', cookieVal)
            chavy.log(`[${cookieName}] 获取东东工厂链接: 成功, cookie: ${cookieVal}`)
        }
    }


}
function init() {
    isSurge = () => {
        return undefined === this.$httpClient ? false : true
    }
    isQuanX = () => {
        return undefined === this.$task ? false : true
    }
    getdata = (key) => {
        if (isSurge()) return $persistentStore.read(key)
        if (isQuanX()) return $prefs.valueForKey(key)
    }
    setdata = (key, val) => {
        if (isSurge()) return $persistentStore.write(key, val)
        if (isQuanX()) return $prefs.setValueForKey(key, val)
    }
    msg = (title, subtitle, body) => {
        if (isSurge()) $notification.post(title, subtitle, body)
        if (isQuanX()) $notify(title, subtitle, body)
    }
    log = (message) => console.log(message)
    get = (url, cb) => {
        if (isSurge()) {
            $httpClient.get(url, cb)
        }
        if (isQuanX()) {
            url.method = 'GET'
            $task.fetch(url).then((resp) => cb(null, {}, resp.body))
        }
    }
    post = (url, cb) => {
        if (isSurge()) {
            $httpClient.post(url, cb)
        }
        if (isQuanX()) {
            url.method = 'POST'
            $task.fetch(url).then((resp) => cb(null, {}, resp.body))
        }
    }
    done = (value = {}) => {
        $done(value)
    }
    return { isSurge, isQuanX, msg, log, getdata, setdata, get, post, done }
}
chavy.done()
