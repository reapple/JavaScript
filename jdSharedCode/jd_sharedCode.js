
/*

[task_local] 
15 2 1,10,20 * * https://raw.githubusercontent.com/reapple/JavaScript/master/jdSharedCode/jd_sharedCode.js, tag=提交互助码, enabled=true

[rewrite_local]
# 互助码获取链接
^http:\/\/api\.turinglabs\.net\/api\/v1\/jd url script-request-header https://raw.githubusercontent.com/reapple/JavaScript/master/jdSharedCode/jd_shareCodeURL.js
 
 */


const reApple = init()
const cookieName_factory = '东东工厂'
const cookieKey_factory = 'ddFactory_url'

const cookieName_jx = '京喜工厂'
const cookieKey_jx = 'jxFactory_url'

const cookieName_bean = '种豆得豆'
const cookieKey_bean = 'bean_url'

const cookieName_pet = '京东萌宠'
const cookieKey_pet = 'pet_url'

var messages = ""
    ; (exec = async () => {
        reApple.log("🔔开始提交京东互助码")
        await commitShareCode(cookieName_factory, cookieKey_factory)
        await commitShareCode(cookieName_jx, cookieKey_jx)
        await commitShareCode(cookieName_bean, cookieKey_bean)
        await commitShareCode(cookieName_pet, cookieKey_pet)
        showMessge()
    })()
        .catch((e) => reApple.log(`❌ 失败: ${e}`))
        .finally(() => reApple.done())

function commitShareCode(cookieName, cookieKey) {
    let urlStr = reApple.getdata(cookieKey)
    let url = { "url":  urlStr}
    if (urlStr && urlStr.length) {
        return new Promise((resolve, reject) => {
            reApple.get(url, (error, response, data) => {
                reApple.log(response)
                reApple.log(data)
                reApple.log(error)
                let reDic = JSON.parse(response.body)
                if (reDic.message == "This ddfactory share code existed") {
                    messages = messages + cookieName + '互助码已提交过⚠️' + '\n'
                } else if (reDic.message == "code error") {
                    messages = messages + cookieName + '互助码错误❎' + '\n'
                } else if (reDic.message == "success") {
                    messages = messages + cookieName + '互助码提交成功✅' + '\n'
                }
            })
            resolve()
        })
    } else {
        messages = messages + '未提供' + cookieName + '的链接⚠️' + '\n'
    }
}

function showMessge() {
    reApple.msg("京东互助码提交", "", messages)
    reApple.log(messages)
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
    valFor = (dic) => {
        for (var item in dic) {
            return dic[item]
        }
    }
    keyFor = (dic) => {
        for (var item in dic) {
            return item
        }
    }
    done = (value = {}) => {
        $done(value)
    }
    return { isSurge, isQuanX, msg, log, getdata, setdata, get, post, done, valFor, keyFor }
}
reApple.done()
