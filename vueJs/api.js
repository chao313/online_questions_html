var queryBase = "http://127.0.0.1:8000/demomaster/TTitleController/queryBase";
var host = "http://127.0.0.1:8000";

/* 设置后台项目名称 */
var BASE_URL = host + '/demomaster';
var WEBSTROM_BASE_URL = '/static';

/** Session操作 */
var login = BASE_URL + '/SessionController/login';
var adminLogin = BASE_URL + '/SessionController/admin/login';
/* 登出 */
var loginOut = BASE_URL + '/SessionController/loginOut';
/* 获取用户的id */
var getUserId = BASE_URL + '/SessionController/getUserId';
/* 获取用户的Name */
var getUserName = BASE_URL + '/SessionController/getUserName';

/* 配合富文本的文件url */
var uploadFile = BASE_URL + '/EditorController/uploadFile';

/* 获取验证码url */
var getCheckCode = BASE_URL + '/EmailController/getCheckCode';

/* 验证验证码url */
var validCheckCode = BASE_URL + '/EmailController/validCheckCode';

/* 密码找回url */
var forgetPassword = BASE_URL + '/EmailController/forgetPassword';


/** TFollowQuestion */
/** 根据主键更新TFollowQuestion */
var updateTFollowQuestionByPrimaryKey = BASE_URL + '/TFollowQuestionController/updateByPrimaryKey';
/** 单条插入TFollowQuestion */
var insertTFollowQuestion = BASE_URL + '/TFollowQuestionController/insert';
/** 根据主键删除TFollowQuestion */
var deleteTFollowQuestionByPrimaryKey = BASE_URL + '/TFollowQuestionController/deleteByPrimaryKey';
/** 分页查询TFollowQuestion */
var queryBasePageHelperTFollowQuestion = BASE_URL + '/TFollowQuestionController/queryBasePageHelper';
/** 根据主键查询TFollowQuestion */
var queryTFollowQuestionByPrimaryKey = BASE_URL + '/TFollowQuestionController/queryByPrimaryKey';
/** 多条件查询TFollowQuestion */
var queryBaseTFollowQuestion = BASE_URL + '/TFollowQuestionController/queryBase';
/** 批量插入TFollowQuestion */
var insertsTFollowQuestion = BASE_URL + '/TFollowQuestionController/inserts';
/** 多条件更新TFollowQuestion */
var updateBaseTFollowQuestion = BASE_URL + '/TFollowQuestionController/updateBase';

/** TFollowPerson */
/** 根据主键更新TFollowPerson */
var updateTFollowPersonByPrimaryKey = BASE_URL + '/TFollowPersonController/updateByPrimaryKey';
/** 单条插入TFollowPerson */
var insertTFollowPerson = BASE_URL + '/TFollowPersonController/insert';
/** 根据主键删除TFollowPerson */
var deleteTFollowPersonByPrimaryKey = BASE_URL + '/TFollowPersonController/deleteByPrimaryKey';
/** 分页查询TFollowPerson */
var queryBasePageHelperTFollowPerson = BASE_URL + '/TFollowPersonController/queryBasePageHelper';
/** 根据主键查询TFollowPerson */
var queryTFollowPersonByPrimaryKey = BASE_URL + '/TFollowPersonController/queryByPrimaryKey';
/** 多条件查询TFollowPerson */
var queryBaseTFollowPerson = BASE_URL + '/TFollowPersonController/queryBase';
/** 批量插入TFollowPerson */
var insertsTFollowPerson = BASE_URL + '/TFollowPersonController/inserts';
/** 多条件更新TFollowPerson */
var updateBaseTFollowPerson = BASE_URL + '/TFollowPersonController/updateBase';


/** TTag */
/** 根据主键更新TTag */
var updateTTagByPrimaryKey = BASE_URL + '/TTagController/updateByPrimaryKey';
/** 单条插入TTag */
var insertTTag = BASE_URL + '/TTagController/insert';
/** 根据主键删除TTag */
var deleteTTagByPrimaryKey = BASE_URL + '/TTagController/deleteByPrimaryKey';
/** 分页查询TTag */
var queryBasePageHelperTTag = BASE_URL + '/TTagController/queryBasePageHelper';
/** 根据主键查询TTag */
var queryTTagByPrimaryKey = BASE_URL + '/TTagController/queryByPrimaryKey';
/** 多条件查询TTag */
var queryBaseTTag = BASE_URL + '/TTagController/queryBase';
/** 批量插入TTag */
var insertsTTag = BASE_URL + '/TTagController/inserts';
/** 多条件更新TTag */
var updateBaseTTag = BASE_URL + '/TTagController/updateBase';

/** TUser */
/** 根据主键更新TUser */
var updateTUserByPrimaryKey = BASE_URL + '/TUserController/updateByPrimaryKey';
/** 单条插入TUser */
var insertTUser = BASE_URL + '/TUserController/insert';
/** 根据主键删除TUser */
var deleteTUserByPrimaryKey = BASE_URL + '/TUserController/deleteByPrimaryKey';
/** 分页查询TUser */
var queryBasePageHelperTUser = BASE_URL + '/TUserController/queryBasePageHelper';
/** 根据主键查询TUser */
var queryTUserByPrimaryKey = BASE_URL + '/TUserController/queryByPrimaryKey';
/** 多条件查询TUser */
var queryBaseTUser = BASE_URL + '/TUserController/queryBase';
/** 批量插入TUser */
var insertsTUser = BASE_URL + '/TUserController/inserts';
/** 多条件更新TUser */
var updateBaseTUser = BASE_URL + '/TUserController/updateBase';

/** TAnswer */
/** 根据主键更新TAnswer */
var updateTAnswerByPrimaryKey = BASE_URL + '/TAnswerController/updateByPrimaryKey';
/** 单条插入TAnswer */
var insertTAnswer = BASE_URL + '/TAnswerController/insert';
/** 根据主键删除TAnswer */
var deleteTAnswerByPrimaryKey = BASE_URL + '/TAnswerController/deleteByPrimaryKey';
/** 分页查询TAnswer */
var queryBasePageHelperTAnswer = BASE_URL + '/TAnswerController/queryBasePageHelper';
/** 根据主键查询TAnswer */
var queryTAnswerByPrimaryKey = BASE_URL + '/TAnswerController/queryByPrimaryKey';
/** 多条件查询TAnswer */
var queryBaseTAnswer = BASE_URL + '/TAnswerController/queryBase';
/** 批量插入TAnswer */
var insertsTAnswer = BASE_URL + '/TAnswerController/inserts';
/** 多条件更新TAnswer */
var updateBaseTAnswer = BASE_URL + '/TAnswerController/updateBase';

/** TQuestions */
/** 根据主键更新TQuestions */
var updateTQuestionsByPrimaryKey = BASE_URL + '/TQuestionsController/updateByPrimaryKey';
/** 单条插入TQuestions */
var insertTQuestions = BASE_URL + '/TQuestionsController/insert';
/** 根据主键删除TQuestions */
var deleteTQuestionsByPrimaryKey = BASE_URL + '/TQuestionsController/deleteByPrimaryKey';
/** 分页查询TQuestions */
var queryBasePageHelperTQuestions = BASE_URL + '/TQuestionsController/queryBasePageHelper';
/** 根据主键查询TQuestions */
var queryTQuestionsByPrimaryKey = BASE_URL + '/TQuestionsController/queryByPrimaryKey';
/** 多条件查询TQuestions */
var queryBaseTQuestions = BASE_URL + '/TQuestionsController/queryBase';
/** 批量插入TQuestions */
var insertsTQuestions = BASE_URL + '/TQuestionsController/inserts';
/** 多条件更新TQuestions */
var updateBaseTQuestions = BASE_URL + '/TQuestionsController/updateBase';

/** TQuestionTag */
/** 根据主键更新TQuestionTag */
var updateTQuestionTagByPrimaryKey = BASE_URL + '/TQuestionTagController/updateByPrimaryKey';
/** 单条插入TQuestionTag */
var insertTQuestionTag = BASE_URL + '/TQuestionTagController/insert';
/** 根据主键删除TQuestionTag */
var deleteTQuestionTagByPrimaryKey = BASE_URL + '/TQuestionTagController/deleteByPrimaryKey';
/** 分页查询TQuestionTag */
var queryBasePageHelperTQuestionTag = BASE_URL + '/TQuestionTagController/queryBasePageHelper';
/** 根据主键查询TQuestionTag */
var queryTQuestionTagByPrimaryKey = BASE_URL + '/TQuestionTagController/queryByPrimaryKey';
/** 多条件查询TQuestionTag */
var queryBaseTQuestionTag = BASE_URL + '/TQuestionTagController/queryBase';
/** 批量插入TQuestionTag */
var insertsTQuestionTag = BASE_URL + '/TQuestionTagController/inserts';
/** 多条件更新TQuestionTag */
var updateBaseTQuestionTag = BASE_URL + '/TQuestionTagController/updateBase';

/** TSystemParam */
/** 根据主键更新TSystemParam */
var updateTSystemParamByPrimaryKey = BASE_URL + '/TSystemParamController/updateByPrimaryKey';
/** 单条插入TSystemParam */
var insertTSystemParam = BASE_URL + '/TSystemParamController/insert';
/** 根据主键删除TSystemParam */
var deleteTSystemParamByPrimaryKey = BASE_URL + '/TSystemParamController/deleteByPrimaryKey';
/** 分页查询TSystemParam */
var queryBasePageHelperTSystemParam = BASE_URL + '/TSystemParamController/queryBasePageHelper';
/** 根据主键查询TSystemParam */
var queryTSystemParamByPrimaryKey = BASE_URL + '/TSystemParamController/queryByPrimaryKey';
/** 多条件查询TSystemParam */
var queryBaseTSystemParam = BASE_URL + '/TSystemParamController/queryBase';
/** 批量插入TSystemParam */
var insertsTSystemParam = BASE_URL + '/TSystemParamController/inserts';
/** 多条件更新TSystemParam */
var updateBaseTSystemParam = BASE_URL + '/TSystemParamController/updateBase';

/** TAdminUser */
/** 根据主键更新TAdminUser */
var updateTAdminUserByPrimaryKey = BASE_URL + '/TAdminUserController/updateByPrimaryKey';
/** 单条插入TAdminUser */
var insertTAdminUser = BASE_URL + '/TAdminUserController/insert';
/** 根据主键删除TAdminUser */
var deleteTAdminUserByPrimaryKey = BASE_URL + '/TAdminUserController/deleteByPrimaryKey';
/** 分页查询TAdminUser */
var queryBasePageHelperTAdminUser = BASE_URL + '/TAdminUserController/queryBasePageHelper';
/** 根据主键查询TAdminUser */
var queryTAdminUserByPrimaryKey = BASE_URL + '/TAdminUserController/queryByPrimaryKey';
/** 多条件查询TAdminUser */
var queryBaseTAdminUser = BASE_URL + '/TAdminUserController/queryBase';
/** 批量插入TAdminUser */
var insertsTAdminUser = BASE_URL + '/TAdminUserController/inserts';
/** 多条件更新TAdminUser */
var updateBaseTAdminUser = BASE_URL + '/TAdminUserController/updateBase';


function uuid() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}

//  先使用encodeURIComponent 将中文转成ANSI
function base64Encode(str) {
    return btoa(encodeURIComponent(str));
}

// 将ANSI转成中文
function base64Decode(str) {
    return decodeURIComponent(atob(str));
}


function queryUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); // 匹配目标参数
    var result = window.location.search.substr(1).match(reg); // 对querystring匹配目标参数
    if (result != null) {
        return decodeURIComponent(result[2]);
    } else {
        return null;
    }
}

/**
 * 补全长度
 * @param milliseconds
 * @returns {*}
 */
function dealMilliseconds(milliseconds) {
    if (milliseconds.length == 1) {
        return milliseconds + '00';
    } else if (milliseconds.length == 2) {
        return milliseconds + '0';
    } else {
        return milliseconds;
    }


}

function dateFormat(fmt, date) {
    let ret;
    const opt = {
        "Y+": date.getFullYear().toString(),        // 年
        "m+": (date.getMonth() + 1).toString(),     // 月
        "d+": date.getDate().toString(),            // 日
        "H+": date.getHours().toString(),           // 时
        "M+": date.getMinutes().toString(),         // 分
        "S+": date.getSeconds().toString(),         // 秒
        "s+": dealMilliseconds(date.getMilliseconds().toString())          // 毫秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        }
        ;
    }
    ;
    return fmt;
}