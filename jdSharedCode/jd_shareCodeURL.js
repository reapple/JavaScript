
const cookieName_factory = '东东工厂'
const cookieKey_factory = 'ddFactory_url'

const cookieName_jx = '京喜工厂'
const cookieKey_jx = 'jxFactory_url'

const cookieName_bean = '种豆得豆'
const cookieKey_bean = 'bean_url'

const cookieName_pet = '京东萌宠'
const cookieKey_pet = 'pet_url'

const cookieName_farm = '京东农场'
const cookieKey_farm = 'farm_url'

const reApple = init()

//获取链接
const cookieVal = $request.url
if (cookieVal) {
    if (cookieVal.indexOf("ddfactory") != -1) {
        if (reApple.setdata(cookieVal, cookieKey_factory)) {
            reApple.msg(`${cookieName_factory}`, '获取东东工厂互助码链接: 成功', cookieVal)
            reApple.log(`[${cookieName_factory}] 获取东东工厂互助码链接: 成功, cookie: ${cookieVal}`)
        }
    }
    else if (cookieVal.indexOf("jxfactory") != -1) {
        if (reApple.setdata(cookieVal, cookieKey_jx)) {
            reApple.msg(`${cookieName_jx}`, '获取京喜工厂互助码链接: 成功', cookieVal)
            reApple.log(`[${cookieName_jx}] 获取京喜工厂互助码链接: 成功, cookie: ${cookieVal}`)
        }
    }
    else if (cookieVal.indexOf("bean") != -1) {
        if (reApple.setdata(cookieVal, cookieKey_bean)) {
            reApple.msg(`${cookieName_bean}`, '获取种豆得豆互助码链接: 成功', cookieVal)
            reApple.log(`[${cookieName_bean}] 获取种豆得豆互助码链接: 成功, cookie: ${cookieVal}`)
        }
    }
    else if (cookieVal.indexOf("pet") != -1) {
        if (reApple.setdata(cookieVal, cookieKey_pet)) {
            reApple.msg(`${cookieName_pet}`, '获取京东萌宠互助码链接: 成功', cookieVal)
            reApple.log(`[${cookieName_pet}] 获取京东萌宠互助码链接: 成功, cookie: ${cookieVal}`)
        }
    }
    else if (cookieVal.indexOf("farm") != -1) {
        if (reApple.setdata(cookieVal, cookieKey_farm)) {
            reApple.msg(`${cookieName_farm}`, '获取京东农场互助码链接: 成功', cookieVal)
            reApple.log(`[${cookieName_farm}] 获取京东农场互助码链接: 成功, cookie: ${cookieVal}`)
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
