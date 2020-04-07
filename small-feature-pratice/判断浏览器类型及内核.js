//application/vnd.chromium.remoting-viewer 可能为360特有 通过_mine判断是否是360
function isBrowser() {
    var agent = navigator.userAgent.toLowerCase()
    System = function () {
        if (agent.indexOf("Chrome") > -1) {
            // 获取谷歌浏览器版本
            function getChromeVersion() {
                var arr = navigator.userAgent.split(' ');
                var chromeVersion = '';
                for (var i = 0; i < arr.length; i++) {
                    if (/chrome/i.test(arr[i]))
                        chromeVersion = arr[i]
                }
                if (chromeVersion) {
                    return Number(chromeVersion.split('/')[1].split('.')[0]);
                } else {
                    return false;
                }
            }
            if (getChromeVersion()) {
                var version = getChromeVersion();
                if (version < 60) {
                    return false;
                    alert('您使用的谷歌浏览器版本过低，为了更好地体验请将浏览器升级到最新版本！');
                }
            } else {
                return true;
            }

        }
        if (agent.indexOf('qqbrowser') > 0) { //判断是qq浏览器还是其它浏览器
            alert("qq浏览器");
            return false;
        }
        if (agent.indexOf("se 2.x") > 0) {
            alert("搜狗浏览器");
            return false;
        }
        if (agent.indexOf('firefox') > 0) {
            alert("firefox浏览器");
            return false;
        }
        if (agent.indexOf('trident') > 0) {
            alert("IE浏览器");
            return false;
        }
        var is360 = _mime("type", "application/vnd.chromium.remoting-viewer");
        if (is360) {
            alert("360浏览器");
            return false;
        }

        //检测是否是谷歌内核(可排除360及谷歌以外的浏览器)
        //测试mime
        function _mime(option, value) {
            var mimeTypes = navigator.mimeTypes;
            // console.log(mimeTypes)
            for (var mt in mimeTypes) {
                if (mimeTypes[mt][option] == value) {
                    return true;
                }
            }
            return false;
        }

    }
    let bool = System();
    if (!bool) {
        // window.location.href=""
        // 跳转到下载链接
    }
}
isBrowser()