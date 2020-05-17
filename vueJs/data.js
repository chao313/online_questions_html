var queryBase = "http://127.0.0.1:8000/demomaster/TTitleController/queryBase";
var host = "http://127.0.0.1:8000/";

/** 设置后台项目名称 */
var BASE_URL = host+ '/demomaster';


function queryUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); // 匹配目标参数
    var result = window.location.search.substr(1).match(reg); // 对querystring匹配目标参数
    if (result != null) {
        return decodeURIComponent(result[2]);
    } else {
        return null;
    }
}

/** 后台的URL */

/**  */
/** 根据主键更新 */
var updateByPrimaryKey = BASE_URL + '/Controller/updateByPrimaryKey';
/** 单条插入 */
var insert = BASE_URL + '/Controller/insert';
/** 根据主键删除 */
var deleteByPrimaryKey = BASE_URL + '/Controller/deleteByPrimaryKey';
/** 分页查询 */
var queryBasePageHelper = BASE_URL + '/Controller/queryBasePageHelper';
/** 根据主键查询 */
var queryByPrimaryKey = BASE_URL + '/Controller/queryByPrimaryKey';
/** 多条件查询 */
var queryBase = BASE_URL + '/Controller/queryBase';
/** 批量插入 */
var inserts = BASE_URL + '/Controller/inserts';
/** 多条件更新 */
var updateBase = BASE_URL + '/Controller/updateBase';

/** VQuestionUserAnswerFollow */
/** 根据主键更新VQuestionUserAnswerFollow */
var updateVQuestionUserAnswerFollowByPrimaryKey = BASE_URL + '/VQuestionUserAnswerFollowController/updateByPrimaryKey';
/** 单条插入VQuestionUserAnswerFollow */
var insertVQuestionUserAnswerFollow = BASE_URL + '/VQuestionUserAnswerFollowController/insert';
/** 根据主键删除VQuestionUserAnswerFollow */
var deleteVQuestionUserAnswerFollowByPrimaryKey = BASE_URL + '/VQuestionUserAnswerFollowController/deleteByPrimaryKey';
/** 分页查询VQuestionUserAnswerFollow */
var queryBasePageHelperVQuestionUserAnswerFollow = BASE_URL + '/VQuestionUserAnswerFollowController/queryBasePageHelper';
/** 根据主键查询VQuestionUserAnswerFollow */
var queryVQuestionUserAnswerFollowByPrimaryKey = BASE_URL + '/VQuestionUserAnswerFollowController/queryByPrimaryKey';
/** 多条件查询VQuestionUserAnswerFollow */
var queryBaseVQuestionUserAnswerFollow = BASE_URL + '/VQuestionUserAnswerFollowController/queryBase';
/** 批量插入VQuestionUserAnswerFollow */
var insertsVQuestionUserAnswerFollow = BASE_URL + '/VQuestionUserAnswerFollowController/inserts';
/** 多条件更新VQuestionUserAnswerFollow */
var updateBaseVQuestionUserAnswerFollow = BASE_URL + '/VQuestionUserAnswerFollowController/updateBase';

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

/** VReportUserUser */
/** 根据主键更新VReportUserUser */
var updateVReportUserUserByPrimaryKey = BASE_URL + '/VReportUserUserController/updateByPrimaryKey';
/** 单条插入VReportUserUser */
var insertVReportUserUser = BASE_URL + '/VReportUserUserController/insert';
/** 根据主键删除VReportUserUser */
var deleteVReportUserUserByPrimaryKey = BASE_URL + '/VReportUserUserController/deleteByPrimaryKey';
/** 分页查询VReportUserUser */
var queryBasePageHelperVReportUserUser = BASE_URL + '/VReportUserUserController/queryBasePageHelper';
/** 根据主键查询VReportUserUser */
var queryVReportUserUserByPrimaryKey = BASE_URL + '/VReportUserUserController/queryByPrimaryKey';
/** 多条件查询VReportUserUser */
var queryBaseVReportUserUser = BASE_URL + '/VReportUserUserController/queryBase';
/** 批量插入VReportUserUser */
var insertsVReportUserUser = BASE_URL + '/VReportUserUserController/inserts';
/** 多条件更新VReportUserUser */
var updateBaseVReportUserUser = BASE_URL + '/VReportUserUserController/updateBase';

/** VQuestionAnswerSum */
/** 根据主键更新VQuestionAnswerSum */
var updateVQuestionAnswerSumByPrimaryKey = BASE_URL + '/VQuestionAnswerSumController/updateByPrimaryKey';
/** 单条插入VQuestionAnswerSum */
var insertVQuestionAnswerSum = BASE_URL + '/VQuestionAnswerSumController/insert';
/** 根据主键删除VQuestionAnswerSum */
var deleteVQuestionAnswerSumByPrimaryKey = BASE_URL + '/VQuestionAnswerSumController/deleteByPrimaryKey';
/** 分页查询VQuestionAnswerSum */
var queryBasePageHelperVQuestionAnswerSum = BASE_URL + '/VQuestionAnswerSumController/queryBasePageHelper';
/** 根据主键查询VQuestionAnswerSum */
var queryVQuestionAnswerSumByPrimaryKey = BASE_URL + '/VQuestionAnswerSumController/queryByPrimaryKey';
/** 多条件查询VQuestionAnswerSum */
var queryBaseVQuestionAnswerSum = BASE_URL + '/VQuestionAnswerSumController/queryBase';
/** 批量插入VQuestionAnswerSum */
var insertsVQuestionAnswerSum = BASE_URL + '/VQuestionAnswerSumController/inserts';
/** 多条件更新VQuestionAnswerSum */
var updateBaseVQuestionAnswerSum = BASE_URL + '/VQuestionAnswerSumController/updateBase';

/** VReportQuestionQuestition */
/** 根据主键更新VReportQuestionQuestition */
var updateVReportQuestionQuestitionByPrimaryKey = BASE_URL + '/VReportQuestionQuestitionController/updateByPrimaryKey';
/** 单条插入VReportQuestionQuestition */
var insertVReportQuestionQuestition = BASE_URL + '/VReportQuestionQuestitionController/insert';
/** 根据主键删除VReportQuestionQuestition */
var deleteVReportQuestionQuestitionByPrimaryKey = BASE_URL + '/VReportQuestionQuestitionController/deleteByPrimaryKey';
/** 分页查询VReportQuestionQuestition */
var queryBasePageHelperVReportQuestionQuestition = BASE_URL + '/VReportQuestionQuestitionController/queryBasePageHelper';
/** 根据主键查询VReportQuestionQuestition */
var queryVReportQuestionQuestitionByPrimaryKey = BASE_URL + '/VReportQuestionQuestitionController/queryByPrimaryKey';
/** 多条件查询VReportQuestionQuestition */
var queryBaseVReportQuestionQuestition = BASE_URL + '/VReportQuestionQuestitionController/queryBase';
/** 批量插入VReportQuestionQuestition */
var insertsVReportQuestionQuestition = BASE_URL + '/VReportQuestionQuestitionController/inserts';
/** 多条件更新VReportQuestionQuestition */
var updateBaseVReportQuestionQuestition = BASE_URL + '/VReportQuestionQuestitionController/updateBase';

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

/** TReportUser */
/** 根据主键更新TReportUser */
var updateTReportUserByPrimaryKey = BASE_URL + '/TReportUserController/updateByPrimaryKey';
/** 单条插入TReportUser */
var insertTReportUser = BASE_URL + '/TReportUserController/insert';
/** 根据主键删除TReportUser */
var deleteTReportUserByPrimaryKey = BASE_URL + '/TReportUserController/deleteByPrimaryKey';
/** 分页查询TReportUser */
var queryBasePageHelperTReportUser = BASE_URL + '/TReportUserController/queryBasePageHelper';
/** 根据主键查询TReportUser */
var queryTReportUserByPrimaryKey = BASE_URL + '/TReportUserController/queryByPrimaryKey';
/** 多条件查询TReportUser */
var queryBaseTReportUser = BASE_URL + '/TReportUserController/queryBase';
/** 批量插入TReportUser */
var insertsTReportUser = BASE_URL + '/TReportUserController/inserts';
/** 多条件更新TReportUser */
var updateBaseTReportUser = BASE_URL + '/TReportUserController/updateBase';

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

/** VAnswerUser */
/** 根据主键更新VAnswerUser */
var updateVAnswerUserByPrimaryKey = BASE_URL + '/VAnswerUserController/updateByPrimaryKey';
/** 单条插入VAnswerUser */
var insertVAnswerUser = BASE_URL + '/VAnswerUserController/insert';
/** 根据主键删除VAnswerUser */
var deleteVAnswerUserByPrimaryKey = BASE_URL + '/VAnswerUserController/deleteByPrimaryKey';
/** 分页查询VAnswerUser */
var queryBasePageHelperVAnswerUser = BASE_URL + '/VAnswerUserController/queryBasePageHelper';
/** 根据主键查询VAnswerUser */
var queryVAnswerUserByPrimaryKey = BASE_URL + '/VAnswerUserController/queryByPrimaryKey';
/** 多条件查询VAnswerUser */
var queryBaseVAnswerUser = BASE_URL + '/VAnswerUserController/queryBase';
/** 批量插入VAnswerUser */
var insertsVAnswerUser = BASE_URL + '/VAnswerUserController/inserts';
/** 多条件更新VAnswerUser */
var updateBaseVAnswerUser = BASE_URL + '/VAnswerUserController/updateBase';

/** VQuestionUser */
/** 根据主键更新VQuestionUser */
var updateVQuestionUserByPrimaryKey = BASE_URL + '/VQuestionUserController/updateByPrimaryKey';
/** 单条插入VQuestionUser */
var insertVQuestionUser = BASE_URL + '/VQuestionUserController/insert';
/** 根据主键删除VQuestionUser */
var deleteVQuestionUserByPrimaryKey = BASE_URL + '/VQuestionUserController/deleteByPrimaryKey';
/** 分页查询VQuestionUser */
var queryBasePageHelperVQuestionUser = BASE_URL + '/VQuestionUserController/queryBasePageHelper';
/** 根据主键查询VQuestionUser */
var queryVQuestionUserByPrimaryKey = BASE_URL + '/VQuestionUserController/queryByPrimaryKey';
/** 多条件查询VQuestionUser */
var queryBaseVQuestionUser = BASE_URL + '/VQuestionUserController/queryBase';
/** 批量插入VQuestionUser */
var insertsVQuestionUser = BASE_URL + '/VQuestionUserController/inserts';
/** 多条件更新VQuestionUser */
var updateBaseVQuestionUser = BASE_URL + '/VQuestionUserController/updateBase';

/** VReportAnswerAnswer */
/** 根据主键更新VReportAnswerAnswer */
var updateVReportAnswerAnswerByPrimaryKey = BASE_URL + '/VReportAnswerAnswerController/updateByPrimaryKey';
/** 单条插入VReportAnswerAnswer */
var insertVReportAnswerAnswer = BASE_URL + '/VReportAnswerAnswerController/insert';
/** 根据主键删除VReportAnswerAnswer */
var deleteVReportAnswerAnswerByPrimaryKey = BASE_URL + '/VReportAnswerAnswerController/deleteByPrimaryKey';
/** 分页查询VReportAnswerAnswer */
var queryBasePageHelperVReportAnswerAnswer = BASE_URL + '/VReportAnswerAnswerController/queryBasePageHelper';
/** 根据主键查询VReportAnswerAnswer */
var queryVReportAnswerAnswerByPrimaryKey = BASE_URL + '/VReportAnswerAnswerController/queryByPrimaryKey';
/** 多条件查询VReportAnswerAnswer */
var queryBaseVReportAnswerAnswer = BASE_URL + '/VReportAnswerAnswerController/queryBase';
/** 批量插入VReportAnswerAnswer */
var insertsVReportAnswerAnswer = BASE_URL + '/VReportAnswerAnswerController/inserts';
/** 多条件更新VReportAnswerAnswer */
var updateBaseVReportAnswerAnswer = BASE_URL + '/VReportAnswerAnswerController/updateBase';

/** VHotQuestion */
/** 根据主键更新VHotQuestion */
var updateVHotQuestionByPrimaryKey = BASE_URL + '/VHotQuestionController/updateByPrimaryKey';
/** 单条插入VHotQuestion */
var insertVHotQuestion = BASE_URL + '/VHotQuestionController/insert';
/** 根据主键删除VHotQuestion */
var deleteVHotQuestionByPrimaryKey = BASE_URL + '/VHotQuestionController/deleteByPrimaryKey';
/** 分页查询VHotQuestion */
var queryBasePageHelperVHotQuestion = BASE_URL + '/VHotQuestionController/queryBasePageHelper';
/** 根据主键查询VHotQuestion */
var queryVHotQuestionByPrimaryKey = BASE_URL + '/VHotQuestionController/queryByPrimaryKey';
/** 多条件查询VHotQuestion */
var queryBaseVHotQuestion = BASE_URL + '/VHotQuestionController/queryBase';
/** 批量插入VHotQuestion */
var insertsVHotQuestion = BASE_URL + '/VHotQuestionController/inserts';
/** 多条件更新VHotQuestion */
var updateBaseVHotQuestion = BASE_URL + '/VHotQuestionController/updateBase';

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

/** TAnswerSecond */
/** 根据主键更新TAnswerSecond */
var updateTAnswerSecondByPrimaryKey = BASE_URL + '/TAnswerSecondController/updateByPrimaryKey';
/** 单条插入TAnswerSecond */
var insertTAnswerSecond = BASE_URL + '/TAnswerSecondController/insert';
/** 根据主键删除TAnswerSecond */
var deleteTAnswerSecondByPrimaryKey = BASE_URL + '/TAnswerSecondController/deleteByPrimaryKey';
/** 分页查询TAnswerSecond */
var queryBasePageHelperTAnswerSecond = BASE_URL + '/TAnswerSecondController/queryBasePageHelper';
/** 根据主键查询TAnswerSecond */
var queryTAnswerSecondByPrimaryKey = BASE_URL + '/TAnswerSecondController/queryByPrimaryKey';
/** 多条件查询TAnswerSecond */
var queryBaseTAnswerSecond = BASE_URL + '/TAnswerSecondController/queryBase';
/** 批量插入TAnswerSecond */
var insertsTAnswerSecond = BASE_URL + '/TAnswerSecondController/inserts';
/** 多条件更新TAnswerSecond */
var updateBaseTAnswerSecond = BASE_URL + '/TAnswerSecondController/updateBase';

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

/** TReportAnswer */
/** 根据主键更新TReportAnswer */
var updateTReportAnswerByPrimaryKey = BASE_URL + '/TReportAnswerController/updateByPrimaryKey';
/** 单条插入TReportAnswer */
var insertTReportAnswer = BASE_URL + '/TReportAnswerController/insert';
/** 根据主键删除TReportAnswer */
var deleteTReportAnswerByPrimaryKey = BASE_URL + '/TReportAnswerController/deleteByPrimaryKey';
/** 分页查询TReportAnswer */
var queryBasePageHelperTReportAnswer = BASE_URL + '/TReportAnswerController/queryBasePageHelper';
/** 根据主键查询TReportAnswer */
var queryTReportAnswerByPrimaryKey = BASE_URL + '/TReportAnswerController/queryByPrimaryKey';
/** 多条件查询TReportAnswer */
var queryBaseTReportAnswer = BASE_URL + '/TReportAnswerController/queryBase';
/** 批量插入TReportAnswer */
var insertsTReportAnswer = BASE_URL + '/TReportAnswerController/inserts';
/** 多条件更新TReportAnswer */
var updateBaseTReportAnswer = BASE_URL + '/TReportAnswerController/updateBase';

/** VQuestionFollowSum */
/** 根据主键更新VQuestionFollowSum */
var updateVQuestionFollowSumByPrimaryKey = BASE_URL + '/VQuestionFollowSumController/updateByPrimaryKey';
/** 单条插入VQuestionFollowSum */
var insertVQuestionFollowSum = BASE_URL + '/VQuestionFollowSumController/insert';
/** 根据主键删除VQuestionFollowSum */
var deleteVQuestionFollowSumByPrimaryKey = BASE_URL + '/VQuestionFollowSumController/deleteByPrimaryKey';
/** 分页查询VQuestionFollowSum */
var queryBasePageHelperVQuestionFollowSum = BASE_URL + '/VQuestionFollowSumController/queryBasePageHelper';
/** 根据主键查询VQuestionFollowSum */
var queryVQuestionFollowSumByPrimaryKey = BASE_URL + '/VQuestionFollowSumController/queryByPrimaryKey';
/** 多条件查询VQuestionFollowSum */
var queryBaseVQuestionFollowSum = BASE_URL + '/VQuestionFollowSumController/queryBase';
/** 批量插入VQuestionFollowSum */
var insertsVQuestionFollowSum = BASE_URL + '/VQuestionFollowSumController/inserts';
/** 多条件更新VQuestionFollowSum */
var updateBaseVQuestionFollowSum = BASE_URL + '/VQuestionFollowSumController/updateBase';

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

/** TReportQuestion */
/** 根据主键更新TReportQuestion */
var updateTReportQuestionByPrimaryKey = BASE_URL + '/TReportQuestionController/updateByPrimaryKey';
/** 单条插入TReportQuestion */
var insertTReportQuestion = BASE_URL + '/TReportQuestionController/insert';
/** 根据主键删除TReportQuestion */
var deleteTReportQuestionByPrimaryKey = BASE_URL + '/TReportQuestionController/deleteByPrimaryKey';
/** 分页查询TReportQuestion */
var queryBasePageHelperTReportQuestion = BASE_URL + '/TReportQuestionController/queryBasePageHelper';
/** 根据主键查询TReportQuestion */
var queryTReportQuestionByPrimaryKey = BASE_URL + '/TReportQuestionController/queryByPrimaryKey';
/** 多条件查询TReportQuestion */
var queryBaseTReportQuestion = BASE_URL + '/TReportQuestionController/queryBase';
/** 批量插入TReportQuestion */
var insertsTReportQuestion = BASE_URL + '/TReportQuestionController/inserts';
/** 多条件更新TReportQuestion */
var updateBaseTReportQuestion = BASE_URL + '/TReportQuestionController/updateBase';

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


var vue = new Vue({
    el: "#body",
    data: {
        alertError: "系统错误，请联系管理员！",
        alertSuccess: "操作成功",

        BASE_URL:BASE_URL,

        host:host,
        /** 存储多个结果*/
        Results:[{
        }]
        ,
        /** 存储单个结果*/
        Result:{
        }
        ,
        /** 存储插入结果*/
        InsertParam:{
        }
        ,
       /** 存储主键更新*/
       UpdateByPrimaryKeyParam:{
         source:{
         }
         ,
         target:{
         }
       }
       ,
       /** 存储更新*/
       UpdateBaseParam:{
         source:{
         }
         ,
         target:{
         }
       }
       ,
       /** 存储多条件查询条件*/
       QueryBaseParam:{
       }
       ,
       /** 存储多条件查询条件(分页，去除分页的num和size)*/
       QueryBasePageHelperParam:{
       }
       ,
       /** 存储存储多条件查询结果(分页，去除分页的num和size)*/
       QueryBasePageHelperResult:{
          pageNum: null,
          pageSize: null,
          size: null,
          orderBy: null,
          startRow: null,
          endRow: null,
          total: null,
          pages: null,
          list: [{
          }],
          firstPage: null,
          prePage: 0,
          nextPage: null,
          lastPage: null,
          isFirstPage: true,
          isLastPage: null,
          hasPreviousPage: null,
          hasNextPage: null,
          navigatePages: null,
          navigatepageNums: []
        }
    ,
        /** 存储VQuestionUserAnswerFollow多个结果*/
        VQuestionUserAnswerFollowResults:[{
           id: null,
           userName: null,
           title: null,
           content: null,
           isTop: null,
           pvCount: null,
           updateTime: null,
           createTime: null,
           blackFlag: null,
           deleteFlag: null,
           status: null,
           isSave: null,
           tag: null,
           id0: null,
           name: null,
           status0: null,
           deleteFlag0: null,
           approveStatus: null,
           blackListUser: null,
           logo: null,
           pvCount0: null,
           followSum: null,
           answerSum: null
        }]
        ,
        /** 存储VQuestionUserAnswerFollow单个结果*/
        VQuestionUserAnswerFollowResult:{
          id: null,
          userName: null,
          title: null,
          content: null,
          isTop: null,
          pvCount: null,
          updateTime: null,
          createTime: null,
          blackFlag: null,
          deleteFlag: null,
          status: null,
          isSave: null,
          tag: null,
          id0: null,
          name: null,
          status0: null,
          deleteFlag0: null,
          approveStatus: null,
          blackListUser: null,
          logo: null,
          pvCount0: null,
          followSum: null,
          answerSum: null
        }
        ,
        /** 存储VQuestionUserAnswerFollow插入结果*/
        VQuestionUserAnswerFollowInsertParam:{
          id: null,
          userName: null,
          title: null,
          content: null,
          isTop: null,
          pvCount: null,
          updateTime: null,
          createTime: null,
          blackFlag: null,
          deleteFlag: null,
          status: null,
          isSave: null,
          tag: null,
          id0: null,
          name: null,
          status0: null,
          deleteFlag0: null,
          approveStatus: null,
          blackListUser: null,
          logo: null,
          pvCount0: null,
          followSum: null,
          answerSum: null
        }
        ,
       /** 存储VQuestionUserAnswerFollow主键更新*/
       VQuestionUserAnswerFollowUpdateByPrimaryKeyParam:{
         source:{
            id: null,
            userName: null,
            title: null,
            content: null,
            isTop: null,
            pvCount: null,
            updateTime: null,
            createTime: null,
            blackFlag: null,
            deleteFlag: null,
            status: null,
            isSave: null,
            tag: null,
            id0: null,
            name: null,
            status0: null,
            deleteFlag0: null,
            approveStatus: null,
            blackListUser: null,
            logo: null,
            pvCount0: null,
            followSum: null,
            answerSum: null
         }
         ,
         target:{
         }
       }
       ,
       /** 存储VQuestionUserAnswerFollow更新*/
       VQuestionUserAnswerFollowUpdateBaseParam:{
         source:{
           id: null,
           userName: null,
           title: null,
           content: null,
           isTop: null,
           pvCount: null,
           updateTime: null,
           createTime: null,
           blackFlag: null,
           deleteFlag: null,
           status: null,
           isSave: null,
           tag: null,
           id0: null,
           name: null,
           status0: null,
           deleteFlag0: null,
           approveStatus: null,
           blackListUser: null,
           logo: null,
           pvCount0: null,
           followSum: null,
           answerSum: null
         }
         ,
         target:{
          id: null,
          userName: null,
          title: null,
          content: null,
          isTop: null,
          pvCount: null,
          updateTime: null,
          createTime: null,
          blackFlag: null,
          deleteFlag: null,
          status: null,
          isSave: null,
          tag: null,
          id0: null,
          name: null,
          status0: null,
          deleteFlag0: null,
          approveStatus: null,
          blackListUser: null,
          logo: null,
          pvCount0: null,
          followSum: null,
          answerSum: null
         }
       }
       ,
       /** 存储VQuestionUserAnswerFollow多条件查询条件*/
       VQuestionUserAnswerFollowQueryBaseParam:{
          id: null,
          userName: null,
          title: null,
          content: null,
          isTop: null,
          pvCount: null,
          updateTime: null,
          createTime: null,
          blackFlag: null,
          deleteFlag: null,
          status: null,
          isSave: null,
          tag: null,
          id0: null,
          name: null,
          status0: null,
          deleteFlag0: null,
          approveStatus: null,
          blackListUser: null,
          logo: null,
          pvCount0: null,
          followSum: null,
          answerSum: null
       }
       ,
       /** 存储VQuestionUserAnswerFollow多条件查询条件(分页，去除分页的num和size)*/
       VQuestionUserAnswerFollowQueryBasePageHelperParam:{
          id: null,
          userName: null,
          title: null,
          content: null,
          isTop: null,
          pvCount: null,
          updateTime: null,
          createTime: null,
          blackFlag: null,
          deleteFlag: null,
          status: null,
          isSave: null,
          tag: null,
          id0: null,
          name: null,
          status0: null,
          deleteFlag0: null,
          approveStatus: null,
          blackListUser: null,
          logo: null,
          pvCount0: null,
          followSum: null,
          answerSum: null
       }
       ,
       /** 存储VQuestionUserAnswerFollow存储多条件查询结果(分页，去除分页的num和size)*/
       VQuestionUserAnswerFollowQueryBasePageHelperResult:{
          pageNum: null,
          pageSize: null,
          size: null,
          orderBy: null,
          startRow: null,
          endRow: null,
          total: null,
          pages: null,
          list: [{
            id: null,
            userName: null,
            title: null,
            content: null,
            isTop: null,
            pvCount: null,
            updateTime: null,
            createTime: null,
            blackFlag: null,
            deleteFlag: null,
            status: null,
            isSave: null,
            tag: null,
            id0: null,
            name: null,
            status0: null,
            deleteFlag0: null,
            approveStatus: null,
            blackListUser: null,
            logo: null,
            pvCount0: null,
            followSum: null,
            answerSum: null
          }],
          firstPage: null,
          prePage: 0,
          nextPage: null,
          lastPage: null,
          isFirstPage: true,
          isLastPage: null,
          hasPreviousPage: null,
          hasNextPage: null,
          navigatePages: null,
          navigatepageNums: []
        }
    ,
        /** 存储TTag多个结果*/
        TTagResults:[{
           id: null,
           tag: null
        }]
        ,
        /** 存储TTag单个结果*/
        TTagResult:{
          id: null,
          tag: null
        }
        ,
        /** 存储TTag插入结果*/
        TTagInsertParam:{
          id: null,
          tag: null
        }
        ,
       /** 存储TTag主键更新*/
       TTagUpdateByPrimaryKeyParam:{
         source:{
            tag: null
         }
         ,
         target:{
            id: null,
         }
       }
       ,
       /** 存储TTag更新*/
       TTagUpdateBaseParam:{
         source:{
           id: null,
           tag: null
         }
         ,
         target:{
          id: null,
          tag: null
         }
       }
       ,
       /** 存储TTag多条件查询条件*/
       TTagQueryBaseParam:{
          id: null,
          tag: null
       }
       ,
       /** 存储TTag多条件查询条件(分页，去除分页的num和size)*/
       TTagQueryBasePageHelperParam:{
          id: null,
          tag: null
       }
       ,
       /** 存储TTag存储多条件查询结果(分页，去除分页的num和size)*/
       TTagQueryBasePageHelperResult:{
          pageNum: null,
          pageSize: null,
          size: null,
          orderBy: null,
          startRow: null,
          endRow: null,
          total: null,
          pages: null,
          list: [{
            id: null,
            tag: null
          }],
          firstPage: null,
          prePage: 0,
          nextPage: null,
          lastPage: null,
          isFirstPage: true,
          isLastPage: null,
          hasPreviousPage: null,
          hasNextPage: null,
          navigatePages: null,
          navigatepageNums: []
        }
    ,
        /** 存储VReportUserUser多个结果*/
        VReportUserUserResults:[{
           id: null,
           userName: null,
           reason: null,
           name: null,
           createTime: null,
           updateTime: null,
           deleteFlag: null,
           approveStatus: null,
           blackListUser: null,
           logo: null,
           pvCount: null,
           status: null,
           email: null,
           phone: null
        }]
        ,
        /** 存储VReportUserUser单个结果*/
        VReportUserUserResult:{
          id: null,
          userName: null,
          reason: null,
          name: null,
          createTime: null,
          updateTime: null,
          deleteFlag: null,
          approveStatus: null,
          blackListUser: null,
          logo: null,
          pvCount: null,
          status: null,
          email: null,
          phone: null
        }
        ,
        /** 存储VReportUserUser插入结果*/
        VReportUserUserInsertParam:{
          id: null,
          userName: null,
          reason: null,
          name: null,
          createTime: null,
          updateTime: null,
          deleteFlag: null,
          approveStatus: null,
          blackListUser: null,
          logo: null,
          pvCount: null,
          status: null,
          email: null,
          phone: null
        }
        ,
       /** 存储VReportUserUser主键更新*/
       VReportUserUserUpdateByPrimaryKeyParam:{
         source:{
            id: null,
            userName: null,
            reason: null,
            name: null,
            createTime: null,
            updateTime: null,
            deleteFlag: null,
            approveStatus: null,
            blackListUser: null,
            logo: null,
            pvCount: null,
            status: null,
            email: null,
            phone: null
         }
         ,
         target:{
         }
       }
       ,
       /** 存储VReportUserUser更新*/
       VReportUserUserUpdateBaseParam:{
         source:{
           id: null,
           userName: null,
           reason: null,
           name: null,
           createTime: null,
           updateTime: null,
           deleteFlag: null,
           approveStatus: null,
           blackListUser: null,
           logo: null,
           pvCount: null,
           status: null,
           email: null,
           phone: null
         }
         ,
         target:{
          id: null,
          userName: null,
          reason: null,
          name: null,
          createTime: null,
          updateTime: null,
          deleteFlag: null,
          approveStatus: null,
          blackListUser: null,
          logo: null,
          pvCount: null,
          status: null,
          email: null,
          phone: null
         }
       }
       ,
       /** 存储VReportUserUser多条件查询条件*/
       VReportUserUserQueryBaseParam:{
          id: null,
          userName: null,
          reason: null,
          name: null,
          createTime: null,
          updateTime: null,
          deleteFlag: null,
          approveStatus: null,
          blackListUser: null,
          logo: null,
          pvCount: null,
          status: null,
          email: null,
          phone: null
       }
       ,
       /** 存储VReportUserUser多条件查询条件(分页，去除分页的num和size)*/
       VReportUserUserQueryBasePageHelperParam:{
          id: null,
          userName: null,
          reason: null,
          name: null,
          createTime: null,
          updateTime: null,
          deleteFlag: null,
          approveStatus: null,
          blackListUser: null,
          logo: null,
          pvCount: null,
          status: null,
          email: null,
          phone: null
       }
       ,
       /** 存储VReportUserUser存储多条件查询结果(分页，去除分页的num和size)*/
       VReportUserUserQueryBasePageHelperResult:{
          pageNum: null,
          pageSize: null,
          size: null,
          orderBy: null,
          startRow: null,
          endRow: null,
          total: null,
          pages: null,
          list: [{
            id: null,
            userName: null,
            reason: null,
            name: null,
            createTime: null,
            updateTime: null,
            deleteFlag: null,
            approveStatus: null,
            blackListUser: null,
            logo: null,
            pvCount: null,
            status: null,
            email: null,
            phone: null
          }],
          firstPage: null,
          prePage: 0,
          nextPage: null,
          lastPage: null,
          isFirstPage: true,
          isLastPage: null,
          hasPreviousPage: null,
          hasNextPage: null,
          navigatePages: null,
          navigatepageNums: []
        }
    ,
        /** 存储VQuestionAnswerSum多个结果*/
        VQuestionAnswerSumResults:[{
           answerSum: null,
           questionId: null
        }]
        ,
        /** 存储VQuestionAnswerSum单个结果*/
        VQuestionAnswerSumResult:{
          answerSum: null,
          questionId: null
        }
        ,
        /** 存储VQuestionAnswerSum插入结果*/
        VQuestionAnswerSumInsertParam:{
          answerSum: null,
          questionId: null
        }
        ,
       /** 存储VQuestionAnswerSum主键更新*/
       VQuestionAnswerSumUpdateByPrimaryKeyParam:{
         source:{
            answerSum: null,
            questionId: null
         }
         ,
         target:{
         }
       }
       ,
       /** 存储VQuestionAnswerSum更新*/
       VQuestionAnswerSumUpdateBaseParam:{
         source:{
           answerSum: null,
           questionId: null
         }
         ,
         target:{
          answerSum: null,
          questionId: null
         }
       }
       ,
       /** 存储VQuestionAnswerSum多条件查询条件*/
       VQuestionAnswerSumQueryBaseParam:{
          answerSum: null,
          questionId: null
       }
       ,
       /** 存储VQuestionAnswerSum多条件查询条件(分页，去除分页的num和size)*/
       VQuestionAnswerSumQueryBasePageHelperParam:{
          answerSum: null,
          questionId: null
       }
       ,
       /** 存储VQuestionAnswerSum存储多条件查询结果(分页，去除分页的num和size)*/
       VQuestionAnswerSumQueryBasePageHelperResult:{
          pageNum: null,
          pageSize: null,
          size: null,
          orderBy: null,
          startRow: null,
          endRow: null,
          total: null,
          pages: null,
          list: [{
            answerSum: null,
            questionId: null
          }],
          firstPage: null,
          prePage: 0,
          nextPage: null,
          lastPage: null,
          isFirstPage: true,
          isLastPage: null,
          hasPreviousPage: null,
          hasNextPage: null,
          navigatePages: null,
          navigatepageNums: []
        }
    ,
        /** 存储VReportQuestionQuestition多个结果*/
        VReportQuestionQuestitionResults:[{
           id: null,
           questionId: null,
           questionName: null,
           reason: null,
           id0: null,
           userName: null,
           title: null,
           content: null,
           tag: null,
           isSave: null,
           deleteFlag: null,
           status: null,
           blackFlag: null,
           createTime: null,
           updateTime: null,
           pvCount: null,
           isTop: null
        }]
        ,
        /** 存储VReportQuestionQuestition单个结果*/
        VReportQuestionQuestitionResult:{
          id: null,
          questionId: null,
          questionName: null,
          reason: null,
          id0: null,
          userName: null,
          title: null,
          content: null,
          tag: null,
          isSave: null,
          deleteFlag: null,
          status: null,
          blackFlag: null,
          createTime: null,
          updateTime: null,
          pvCount: null,
          isTop: null
        }
        ,
        /** 存储VReportQuestionQuestition插入结果*/
        VReportQuestionQuestitionInsertParam:{
          id: null,
          questionId: null,
          questionName: null,
          reason: null,
          id0: null,
          userName: null,
          title: null,
          content: null,
          tag: null,
          isSave: null,
          deleteFlag: null,
          status: null,
          blackFlag: null,
          createTime: null,
          updateTime: null,
          pvCount: null,
          isTop: null
        }
        ,
       /** 存储VReportQuestionQuestition主键更新*/
       VReportQuestionQuestitionUpdateByPrimaryKeyParam:{
         source:{
            id: null,
            questionId: null,
            questionName: null,
            reason: null,
            id0: null,
            userName: null,
            title: null,
            content: null,
            tag: null,
            isSave: null,
            deleteFlag: null,
            status: null,
            blackFlag: null,
            createTime: null,
            updateTime: null,
            pvCount: null,
            isTop: null
         }
         ,
         target:{
         }
       }
       ,
       /** 存储VReportQuestionQuestition更新*/
       VReportQuestionQuestitionUpdateBaseParam:{
         source:{
           id: null,
           questionId: null,
           questionName: null,
           reason: null,
           id0: null,
           userName: null,
           title: null,
           content: null,
           tag: null,
           isSave: null,
           deleteFlag: null,
           status: null,
           blackFlag: null,
           createTime: null,
           updateTime: null,
           pvCount: null,
           isTop: null
         }
         ,
         target:{
          id: null,
          questionId: null,
          questionName: null,
          reason: null,
          id0: null,
          userName: null,
          title: null,
          content: null,
          tag: null,
          isSave: null,
          deleteFlag: null,
          status: null,
          blackFlag: null,
          createTime: null,
          updateTime: null,
          pvCount: null,
          isTop: null
         }
       }
       ,
       /** 存储VReportQuestionQuestition多条件查询条件*/
       VReportQuestionQuestitionQueryBaseParam:{
          id: null,
          questionId: null,
          questionName: null,
          reason: null,
          id0: null,
          userName: null,
          title: null,
          content: null,
          tag: null,
          isSave: null,
          deleteFlag: null,
          status: null,
          blackFlag: null,
          createTime: null,
          updateTime: null,
          pvCount: null,
          isTop: null
       }
       ,
       /** 存储VReportQuestionQuestition多条件查询条件(分页，去除分页的num和size)*/
       VReportQuestionQuestitionQueryBasePageHelperParam:{
          id: null,
          questionId: null,
          questionName: null,
          reason: null,
          id0: null,
          userName: null,
          title: null,
          content: null,
          tag: null,
          isSave: null,
          deleteFlag: null,
          status: null,
          blackFlag: null,
          createTime: null,
          updateTime: null,
          pvCount: null,
          isTop: null
       }
       ,
       /** 存储VReportQuestionQuestition存储多条件查询结果(分页，去除分页的num和size)*/
       VReportQuestionQuestitionQueryBasePageHelperResult:{
          pageNum: null,
          pageSize: null,
          size: null,
          orderBy: null,
          startRow: null,
          endRow: null,
          total: null,
          pages: null,
          list: [{
            id: null,
            questionId: null,
            questionName: null,
            reason: null,
            id0: null,
            userName: null,
            title: null,
            content: null,
            tag: null,
            isSave: null,
            deleteFlag: null,
            status: null,
            blackFlag: null,
            createTime: null,
            updateTime: null,
            pvCount: null,
            isTop: null
          }],
          firstPage: null,
          prePage: 0,
          nextPage: null,
          lastPage: null,
          isFirstPage: true,
          isLastPage: null,
          hasPreviousPage: null,
          hasNextPage: null,
          navigatePages: null,
          navigatepageNums: []
        }
    ,
        /** 存储TAnswer多个结果*/
        TAnswerResults:[{
           id: null,
           userName: null,
           questionId: null,
           questionTitle: null,
           content: null,
           deleteFlag: null,
           status: null,
           blackFlag: null,
           time: null,
           answerId: null
        }]
        ,
        /** 存储TAnswer单个结果*/
        TAnswerResult:{
          id: null,
          userName: null,
          questionId: null,
          questionTitle: null,
          content: null,
          deleteFlag: null,
          status: null,
          blackFlag: null,
          time: null,
          answerId: null
        }
        ,
        /** 存储TAnswer插入结果*/
        TAnswerInsertParam:{
          id: null,
          userName: null,
          questionId: null,
          questionTitle: null,
          content: null,
          deleteFlag: null,
          status: null,
          blackFlag: null,
          time: null,
          answerId: null
        }
        ,
       /** 存储TAnswer主键更新*/
       TAnswerUpdateByPrimaryKeyParam:{
         source:{
            userName: null,
            questionId: null,
            questionTitle: null,
            content: null,
            deleteFlag: null,
            status: null,
            blackFlag: null,
            time: null,
            answerId: null
         }
         ,
         target:{
            id: null,
         }
       }
       ,
       /** 存储TAnswer更新*/
       TAnswerUpdateBaseParam:{
         source:{
           id: null,
           userName: null,
           questionId: null,
           questionTitle: null,
           content: null,
           deleteFlag: null,
           status: null,
           blackFlag: null,
           time: null,
           answerId: null
         }
         ,
         target:{
          id: null,
          userName: null,
          questionId: null,
          questionTitle: null,
          content: null,
          deleteFlag: null,
          status: null,
          blackFlag: null,
          time: null,
          answerId: null
         }
       }
       ,
       /** 存储TAnswer多条件查询条件*/
       TAnswerQueryBaseParam:{
          id: null,
          userName: null,
          questionId: null,
          questionTitle: null,
          content: null,
          deleteFlag: null,
          status: null,
          blackFlag: null,
          time: null,
          answerId: null
       }
       ,
       /** 存储TAnswer多条件查询条件(分页，去除分页的num和size)*/
       TAnswerQueryBasePageHelperParam:{
          id: null,
          userName: null,
          questionId: null,
          questionTitle: null,
          content: null,
          deleteFlag: null,
          status: null,
          blackFlag: null,
          time: null,
          answerId: null
       }
       ,
       /** 存储TAnswer存储多条件查询结果(分页，去除分页的num和size)*/
       TAnswerQueryBasePageHelperResult:{
          pageNum: null,
          pageSize: null,
          size: null,
          orderBy: null,
          startRow: null,
          endRow: null,
          total: null,
          pages: null,
          list: [{
            id: null,
            userName: null,
            questionId: null,
            questionTitle: null,
            content: null,
            deleteFlag: null,
            status: null,
            blackFlag: null,
            time: null,
            answerId: null
          }],
          firstPage: null,
          prePage: 0,
          nextPage: null,
          lastPage: null,
          isFirstPage: true,
          isLastPage: null,
          hasPreviousPage: null,
          hasNextPage: null,
          navigatePages: null,
          navigatepageNums: []
        }
    ,
        /** 存储TReportUser多个结果*/
        TReportUserResults:[{
           id: null,
           userName: null,
           reason: null
        }]
        ,
        /** 存储TReportUser单个结果*/
        TReportUserResult:{
          id: null,
          userName: null,
          reason: null
        }
        ,
        /** 存储TReportUser插入结果*/
        TReportUserInsertParam:{
          id: null,
          userName: null,
          reason: null
        }
        ,
       /** 存储TReportUser主键更新*/
       TReportUserUpdateByPrimaryKeyParam:{
         source:{
            userName: null,
            reason: null
         }
         ,
         target:{
            id: null,
         }
       }
       ,
       /** 存储TReportUser更新*/
       TReportUserUpdateBaseParam:{
         source:{
           id: null,
           userName: null,
           reason: null
         }
         ,
         target:{
          id: null,
          userName: null,
          reason: null
         }
       }
       ,
       /** 存储TReportUser多条件查询条件*/
       TReportUserQueryBaseParam:{
          id: null,
          userName: null,
          reason: null
       }
       ,
       /** 存储TReportUser多条件查询条件(分页，去除分页的num和size)*/
       TReportUserQueryBasePageHelperParam:{
          id: null,
          userName: null,
          reason: null
       }
       ,
       /** 存储TReportUser存储多条件查询结果(分页，去除分页的num和size)*/
       TReportUserQueryBasePageHelperResult:{
          pageNum: null,
          pageSize: null,
          size: null,
          orderBy: null,
          startRow: null,
          endRow: null,
          total: null,
          pages: null,
          list: [{
            id: null,
            userName: null,
            reason: null
          }],
          firstPage: null,
          prePage: 0,
          nextPage: null,
          lastPage: null,
          isFirstPage: true,
          isLastPage: null,
          hasPreviousPage: null,
          hasNextPage: null,
          navigatePages: null,
          navigatepageNums: []
        }
    ,
        /** 存储TQuestions多个结果*/
        TQuestionsResults:[{
           id: null,
           userName: null,
           title: null,
           content: null,
           tag: null,
           isSave: null,
           status: null,
           deleteFlag: null,
           blackFlag: null,
           createTime: null,
           updateTime: null,
           pvCount: null,
           isTop: null
        }]
        ,
        /** 存储TQuestions单个结果*/
        TQuestionsResult:{
          id: null,
          userName: null,
          title: null,
          content: null,
          tag: null,
          isSave: null,
          status: null,
          deleteFlag: null,
          blackFlag: null,
          createTime: null,
          updateTime: null,
          pvCount: null,
          isTop: null
        }
        ,
        /** 存储TQuestions插入结果*/
        TQuestionsInsertParam:{
          id: null,
          userName: null,
          title: null,
          content: null,
          tag: null,
          isSave: null,
          status: null,
          deleteFlag: null,
          blackFlag: null,
          createTime: null,
          updateTime: null,
          pvCount: null,
          isTop: null
        }
        ,
       /** 存储TQuestions主键更新*/
       TQuestionsUpdateByPrimaryKeyParam:{
         source:{
            userName: null,
            title: null,
            content: null,
            tag: null,
            isSave: null,
            status: null,
            deleteFlag: null,
            blackFlag: null,
            createTime: null,
            updateTime: null,
            pvCount: null,
            isTop: null
         }
         ,
         target:{
            id: null,
         }
       }
       ,
       /** 存储TQuestions更新*/
       TQuestionsUpdateBaseParam:{
         source:{
           id: null,
           userName: null,
           title: null,
           content: null,
           tag: null,
           isSave: null,
           status: null,
           deleteFlag: null,
           blackFlag: null,
           createTime: null,
           updateTime: null,
           pvCount: null,
           isTop: null
         }
         ,
         target:{
          id: null,
          userName: null,
          title: null,
          content: null,
          tag: null,
          isSave: null,
          status: null,
          deleteFlag: null,
          blackFlag: null,
          createTime: null,
          updateTime: null,
          pvCount: null,
          isTop: null
         }
       }
       ,
       /** 存储TQuestions多条件查询条件*/
       TQuestionsQueryBaseParam:{
          id: null,
          userName: null,
          title: null,
          content: null,
          tag: null,
          isSave: null,
          status: null,
          deleteFlag: null,
          blackFlag: null,
          createTime: null,
          updateTime: null,
          pvCount: null,
          isTop: null
       }
       ,
       /** 存储TQuestions多条件查询条件(分页，去除分页的num和size)*/
       TQuestionsQueryBasePageHelperParam:{
          id: null,
          userName: null,
          title: null,
          content: null,
          tag: null,
          isSave: null,
          status: null,
          deleteFlag: null,
          blackFlag: null,
          createTime: null,
          updateTime: null,
          pvCount: null,
          isTop: null
       }
       ,
       /** 存储TQuestions存储多条件查询结果(分页，去除分页的num和size)*/
       TQuestionsQueryBasePageHelperResult:{
          pageNum: null,
          pageSize: null,
          size: null,
          orderBy: null,
          startRow: null,
          endRow: null,
          total: null,
          pages: null,
          list: [{
            id: null,
            userName: null,
            title: null,
            content: null,
            tag: null,
            isSave: null,
            status: null,
            deleteFlag: null,
            blackFlag: null,
            createTime: null,
            updateTime: null,
            pvCount: null,
            isTop: null
          }],
          firstPage: null,
          prePage: 0,
          nextPage: null,
          lastPage: null,
          isFirstPage: true,
          isLastPage: null,
          hasPreviousPage: null,
          hasNextPage: null,
          navigatePages: null,
          navigatepageNums: []
        }
    ,
        /** 存储VAnswerUser多个结果*/
        VAnswerUserResults:[{
           userName: null,
           questionId: null,
           questionTitle: null,
           answerContent: null,
           deleteFlag: null,
           id: null,
           status: null,
           approveStatus: null,
           userDeleteFlag: null,
           blackListUser: null,
           logo: null,
           pvCount: null,
           userId: null
        }]
        ,
        /** 存储VAnswerUser单个结果*/
        VAnswerUserResult:{
          userName: null,
          questionId: null,
          questionTitle: null,
          answerContent: null,
          deleteFlag: null,
          id: null,
          status: null,
          approveStatus: null,
          userDeleteFlag: null,
          blackListUser: null,
          logo: null,
          pvCount: null,
          userId: null
        }
        ,
        /** 存储VAnswerUser插入结果*/
        VAnswerUserInsertParam:{
          userName: null,
          questionId: null,
          questionTitle: null,
          answerContent: null,
          deleteFlag: null,
          id: null,
          status: null,
          approveStatus: null,
          userDeleteFlag: null,
          blackListUser: null,
          logo: null,
          pvCount: null,
          userId: null
        }
        ,
       /** 存储VAnswerUser主键更新*/
       VAnswerUserUpdateByPrimaryKeyParam:{
         source:{
            userName: null,
            questionId: null,
            questionTitle: null,
            answerContent: null,
            deleteFlag: null,
            id: null,
            status: null,
            approveStatus: null,
            userDeleteFlag: null,
            blackListUser: null,
            logo: null,
            pvCount: null,
            userId: null
         }
         ,
         target:{
         }
       }
       ,
       /** 存储VAnswerUser更新*/
       VAnswerUserUpdateBaseParam:{
         source:{
           userName: null,
           questionId: null,
           questionTitle: null,
           answerContent: null,
           deleteFlag: null,
           id: null,
           status: null,
           approveStatus: null,
           userDeleteFlag: null,
           blackListUser: null,
           logo: null,
           pvCount: null,
           userId: null
         }
         ,
         target:{
          userName: null,
          questionId: null,
          questionTitle: null,
          answerContent: null,
          deleteFlag: null,
          id: null,
          status: null,
          approveStatus: null,
          userDeleteFlag: null,
          blackListUser: null,
          logo: null,
          pvCount: null,
          userId: null
         }
       }
       ,
       /** 存储VAnswerUser多条件查询条件*/
       VAnswerUserQueryBaseParam:{
          userName: null,
          questionId: null,
          questionTitle: null,
          answerContent: null,
          deleteFlag: null,
          id: null,
          status: null,
          approveStatus: null,
          userDeleteFlag: null,
          blackListUser: null,
          logo: null,
          pvCount: null,
          userId: null
       }
       ,
       /** 存储VAnswerUser多条件查询条件(分页，去除分页的num和size)*/
       VAnswerUserQueryBasePageHelperParam:{
          userName: null,
          questionId: null,
          questionTitle: null,
          answerContent: null,
          deleteFlag: null,
          id: null,
          status: null,
          approveStatus: null,
          userDeleteFlag: null,
          blackListUser: null,
          logo: null,
          pvCount: null,
          userId: null
       }
       ,
       /** 存储VAnswerUser存储多条件查询结果(分页，去除分页的num和size)*/
       VAnswerUserQueryBasePageHelperResult:{
          pageNum: null,
          pageSize: null,
          size: null,
          orderBy: null,
          startRow: null,
          endRow: null,
          total: null,
          pages: null,
          list: [{
            userName: null,
            questionId: null,
            questionTitle: null,
            answerContent: null,
            deleteFlag: null,
            id: null,
            status: null,
            approveStatus: null,
            userDeleteFlag: null,
            blackListUser: null,
            logo: null,
            pvCount: null,
            userId: null
          }],
          firstPage: null,
          prePage: 0,
          nextPage: null,
          lastPage: null,
          isFirstPage: true,
          isLastPage: null,
          hasPreviousPage: null,
          hasNextPage: null,
          navigatePages: null,
          navigatepageNums: []
        }
    ,
        /** 存储VQuestionUser多个结果*/
        VQuestionUserResults:[{
           id: null,
           userName: null,
           title: null,
           content: null,
           isTop: null,
           pvCount: null,
           updateTime: null,
           createTime: null,
           blackFlag: null,
           deleteFlag: null,
           status: null,
           isSave: null,
           tag: null,
           id0: null,
           name: null,
           status0: null,
           deleteFlag0: null,
           approveStatus: null,
           blackListUser: null,
           logo: null,
           pvCount0: null
        }]
        ,
        /** 存储VQuestionUser单个结果*/
        VQuestionUserResult:{
          id: null,
          userName: null,
          title: null,
          content: null,
          isTop: null,
          pvCount: null,
          updateTime: null,
          createTime: null,
          blackFlag: null,
          deleteFlag: null,
          status: null,
          isSave: null,
          tag: null,
          id0: null,
          name: null,
          status0: null,
          deleteFlag0: null,
          approveStatus: null,
          blackListUser: null,
          logo: null,
          pvCount0: null
        }
        ,
        /** 存储VQuestionUser插入结果*/
        VQuestionUserInsertParam:{
          id: null,
          userName: null,
          title: null,
          content: null,
          isTop: null,
          pvCount: null,
          updateTime: null,
          createTime: null,
          blackFlag: null,
          deleteFlag: null,
          status: null,
          isSave: null,
          tag: null,
          id0: null,
          name: null,
          status0: null,
          deleteFlag0: null,
          approveStatus: null,
          blackListUser: null,
          logo: null,
          pvCount0: null
        }
        ,
       /** 存储VQuestionUser主键更新*/
       VQuestionUserUpdateByPrimaryKeyParam:{
         source:{
            id: null,
            userName: null,
            title: null,
            content: null,
            isTop: null,
            pvCount: null,
            updateTime: null,
            createTime: null,
            blackFlag: null,
            deleteFlag: null,
            status: null,
            isSave: null,
            tag: null,
            id0: null,
            name: null,
            status0: null,
            deleteFlag0: null,
            approveStatus: null,
            blackListUser: null,
            logo: null,
            pvCount0: null
         }
         ,
         target:{
         }
       }
       ,
       /** 存储VQuestionUser更新*/
       VQuestionUserUpdateBaseParam:{
         source:{
           id: null,
           userName: null,
           title: null,
           content: null,
           isTop: null,
           pvCount: null,
           updateTime: null,
           createTime: null,
           blackFlag: null,
           deleteFlag: null,
           status: null,
           isSave: null,
           tag: null,
           id0: null,
           name: null,
           status0: null,
           deleteFlag0: null,
           approveStatus: null,
           blackListUser: null,
           logo: null,
           pvCount0: null
         }
         ,
         target:{
          id: null,
          userName: null,
          title: null,
          content: null,
          isTop: null,
          pvCount: null,
          updateTime: null,
          createTime: null,
          blackFlag: null,
          deleteFlag: null,
          status: null,
          isSave: null,
          tag: null,
          id0: null,
          name: null,
          status0: null,
          deleteFlag0: null,
          approveStatus: null,
          blackListUser: null,
          logo: null,
          pvCount0: null
         }
       }
       ,
       /** 存储VQuestionUser多条件查询条件*/
       VQuestionUserQueryBaseParam:{
          id: null,
          userName: null,
          title: null,
          content: null,
          isTop: null,
          pvCount: null,
          updateTime: null,
          createTime: null,
          blackFlag: null,
          deleteFlag: null,
          status: null,
          isSave: null,
          tag: null,
          id0: null,
          name: null,
          status0: null,
          deleteFlag0: null,
          approveStatus: null,
          blackListUser: null,
          logo: null,
          pvCount0: null
       }
       ,
       /** 存储VQuestionUser多条件查询条件(分页，去除分页的num和size)*/
       VQuestionUserQueryBasePageHelperParam:{
          id: null,
          userName: null,
          title: null,
          content: null,
          isTop: null,
          pvCount: null,
          updateTime: null,
          createTime: null,
          blackFlag: null,
          deleteFlag: null,
          status: null,
          isSave: null,
          tag: null,
          id0: null,
          name: null,
          status0: null,
          deleteFlag0: null,
          approveStatus: null,
          blackListUser: null,
          logo: null,
          pvCount0: null
       }
       ,
       /** 存储VQuestionUser存储多条件查询结果(分页，去除分页的num和size)*/
       VQuestionUserQueryBasePageHelperResult:{
          pageNum: null,
          pageSize: null,
          size: null,
          orderBy: null,
          startRow: null,
          endRow: null,
          total: null,
          pages: null,
          list: [{
            id: null,
            userName: null,
            title: null,
            content: null,
            isTop: null,
            pvCount: null,
            updateTime: null,
            createTime: null,
            blackFlag: null,
            deleteFlag: null,
            status: null,
            isSave: null,
            tag: null,
            id0: null,
            name: null,
            status0: null,
            deleteFlag0: null,
            approveStatus: null,
            blackListUser: null,
            logo: null,
            pvCount0: null
          }],
          firstPage: null,
          prePage: 0,
          nextPage: null,
          lastPage: null,
          isFirstPage: true,
          isLastPage: null,
          hasPreviousPage: null,
          hasNextPage: null,
          navigatePages: null,
          navigatepageNums: []
        }
    ,
        /** 存储VReportAnswerAnswer多个结果*/
        VReportAnswerAnswerResults:[{
           id: null,
           answerId: null,
           reason: null,
           id0: null,
           userName: null,
           questionId: null,
           questionTitle: null,
           content: null,
           deleteFlag: null,
           status: null,
           blackFlag: null,
           time: null,
           answerId0: null
        }]
        ,
        /** 存储VReportAnswerAnswer单个结果*/
        VReportAnswerAnswerResult:{
          id: null,
          answerId: null,
          reason: null,
          id0: null,
          userName: null,
          questionId: null,
          questionTitle: null,
          content: null,
          deleteFlag: null,
          status: null,
          blackFlag: null,
          time: null,
          answerId0: null
        }
        ,
        /** 存储VReportAnswerAnswer插入结果*/
        VReportAnswerAnswerInsertParam:{
          id: null,
          answerId: null,
          reason: null,
          id0: null,
          userName: null,
          questionId: null,
          questionTitle: null,
          content: null,
          deleteFlag: null,
          status: null,
          blackFlag: null,
          time: null,
          answerId0: null
        }
        ,
       /** 存储VReportAnswerAnswer主键更新*/
       VReportAnswerAnswerUpdateByPrimaryKeyParam:{
         source:{
            id: null,
            answerId: null,
            reason: null,
            id0: null,
            userName: null,
            questionId: null,
            questionTitle: null,
            content: null,
            deleteFlag: null,
            status: null,
            blackFlag: null,
            time: null,
            answerId0: null
         }
         ,
         target:{
         }
       }
       ,
       /** 存储VReportAnswerAnswer更新*/
       VReportAnswerAnswerUpdateBaseParam:{
         source:{
           id: null,
           answerId: null,
           reason: null,
           id0: null,
           userName: null,
           questionId: null,
           questionTitle: null,
           content: null,
           deleteFlag: null,
           status: null,
           blackFlag: null,
           time: null,
           answerId0: null
         }
         ,
         target:{
          id: null,
          answerId: null,
          reason: null,
          id0: null,
          userName: null,
          questionId: null,
          questionTitle: null,
          content: null,
          deleteFlag: null,
          status: null,
          blackFlag: null,
          time: null,
          answerId0: null
         }
       }
       ,
       /** 存储VReportAnswerAnswer多条件查询条件*/
       VReportAnswerAnswerQueryBaseParam:{
          id: null,
          answerId: null,
          reason: null,
          id0: null,
          userName: null,
          questionId: null,
          questionTitle: null,
          content: null,
          deleteFlag: null,
          status: null,
          blackFlag: null,
          time: null,
          answerId0: null
       }
       ,
       /** 存储VReportAnswerAnswer多条件查询条件(分页，去除分页的num和size)*/
       VReportAnswerAnswerQueryBasePageHelperParam:{
          id: null,
          answerId: null,
          reason: null,
          id0: null,
          userName: null,
          questionId: null,
          questionTitle: null,
          content: null,
          deleteFlag: null,
          status: null,
          blackFlag: null,
          time: null,
          answerId0: null
       }
       ,
       /** 存储VReportAnswerAnswer存储多条件查询结果(分页，去除分页的num和size)*/
       VReportAnswerAnswerQueryBasePageHelperResult:{
          pageNum: null,
          pageSize: null,
          size: null,
          orderBy: null,
          startRow: null,
          endRow: null,
          total: null,
          pages: null,
          list: [{
            id: null,
            answerId: null,
            reason: null,
            id0: null,
            userName: null,
            questionId: null,
            questionTitle: null,
            content: null,
            deleteFlag: null,
            status: null,
            blackFlag: null,
            time: null,
            answerId0: null
          }],
          firstPage: null,
          prePage: 0,
          nextPage: null,
          lastPage: null,
          isFirstPage: true,
          isLastPage: null,
          hasPreviousPage: null,
          hasNextPage: null,
          navigatePages: null,
          navigatepageNums: []
        }
    ,
        /** 存储VHotQuestion多个结果*/
        VHotQuestionResults:[{
           id: null,
           userName: null,
           title: null,
           content: null,
           isTop: null,
           pvCount: null,
           updateTime: null,
           createTime: null,
           blackFlag: null,
           deleteFlag: null,
           status: null,
           isSave: null,
           tag: null,
           followSum: null,
           answerSum: null,
           lastAnswerTime: null
        }]
        ,
        /** 存储VHotQuestion单个结果*/
        VHotQuestionResult:{
          id: null,
          userName: null,
          title: null,
          content: null,
          isTop: null,
          pvCount: null,
          updateTime: null,
          createTime: null,
          blackFlag: null,
          deleteFlag: null,
          status: null,
          isSave: null,
          tag: null,
          followSum: null,
          answerSum: null,
          lastAnswerTime: null
        }
        ,
        /** 存储VHotQuestion插入结果*/
        VHotQuestionInsertParam:{
          id: null,
          userName: null,
          title: null,
          content: null,
          isTop: null,
          pvCount: null,
          updateTime: null,
          createTime: null,
          blackFlag: null,
          deleteFlag: null,
          status: null,
          isSave: null,
          tag: null,
          followSum: null,
          answerSum: null,
          lastAnswerTime: null
        }
        ,
       /** 存储VHotQuestion主键更新*/
       VHotQuestionUpdateByPrimaryKeyParam:{
         source:{
            id: null,
            userName: null,
            title: null,
            content: null,
            isTop: null,
            pvCount: null,
            updateTime: null,
            createTime: null,
            blackFlag: null,
            deleteFlag: null,
            status: null,
            isSave: null,
            tag: null,
            followSum: null,
            answerSum: null,
            lastAnswerTime: null
         }
         ,
         target:{
         }
       }
       ,
       /** 存储VHotQuestion更新*/
       VHotQuestionUpdateBaseParam:{
         source:{
           id: null,
           userName: null,
           title: null,
           content: null,
           isTop: null,
           pvCount: null,
           updateTime: null,
           createTime: null,
           blackFlag: null,
           deleteFlag: null,
           status: null,
           isSave: null,
           tag: null,
           followSum: null,
           answerSum: null,
           lastAnswerTime: null
         }
         ,
         target:{
          id: null,
          userName: null,
          title: null,
          content: null,
          isTop: null,
          pvCount: null,
          updateTime: null,
          createTime: null,
          blackFlag: null,
          deleteFlag: null,
          status: null,
          isSave: null,
          tag: null,
          followSum: null,
          answerSum: null,
          lastAnswerTime: null
         }
       }
       ,
       /** 存储VHotQuestion多条件查询条件*/
       VHotQuestionQueryBaseParam:{
          id: null,
          userName: null,
          title: null,
          content: null,
          isTop: null,
          pvCount: null,
          updateTime: null,
          createTime: null,
          blackFlag: null,
          deleteFlag: null,
          status: null,
          isSave: null,
          tag: null,
          followSum: null,
          answerSum: null,
          lastAnswerTime: null
       }
       ,
       /** 存储VHotQuestion多条件查询条件(分页，去除分页的num和size)*/
       VHotQuestionQueryBasePageHelperParam:{
          id: null,
          userName: null,
          title: null,
          content: null,
          isTop: null,
          pvCount: null,
          updateTime: null,
          createTime: null,
          blackFlag: null,
          deleteFlag: null,
          status: null,
          isSave: null,
          tag: null,
          followSum: null,
          answerSum: null,
          lastAnswerTime: null
       }
       ,
       /** 存储VHotQuestion存储多条件查询结果(分页，去除分页的num和size)*/
       VHotQuestionQueryBasePageHelperResult:{
          pageNum: null,
          pageSize: null,
          size: null,
          orderBy: null,
          startRow: null,
          endRow: null,
          total: null,
          pages: null,
          list: [{
            id: null,
            userName: null,
            title: null,
            content: null,
            isTop: null,
            pvCount: null,
            updateTime: null,
            createTime: null,
            blackFlag: null,
            deleteFlag: null,
            status: null,
            isSave: null,
            tag: null,
            followSum: null,
            answerSum: null,
            lastAnswerTime: null
          }],
          firstPage: null,
          prePage: 0,
          nextPage: null,
          lastPage: null,
          isFirstPage: true,
          isLastPage: null,
          hasPreviousPage: null,
          hasNextPage: null,
          navigatePages: null,
          navigatepageNums: []
        }
    ,
        /** 存储TQuestionTag多个结果*/
        TQuestionTagResults:[{
           id: null,
           questionId: null,
           tagId: null
        }]
        ,
        /** 存储TQuestionTag单个结果*/
        TQuestionTagResult:{
          id: null,
          questionId: null,
          tagId: null
        }
        ,
        /** 存储TQuestionTag插入结果*/
        TQuestionTagInsertParam:{
          id: null,
          questionId: null,
          tagId: null
        }
        ,
       /** 存储TQuestionTag主键更新*/
       TQuestionTagUpdateByPrimaryKeyParam:{
         source:{
            questionId: null,
            tagId: null
         }
         ,
         target:{
            id: null,
         }
       }
       ,
       /** 存储TQuestionTag更新*/
       TQuestionTagUpdateBaseParam:{
         source:{
           id: null,
           questionId: null,
           tagId: null
         }
         ,
         target:{
          id: null,
          questionId: null,
          tagId: null
         }
       }
       ,
       /** 存储TQuestionTag多条件查询条件*/
       TQuestionTagQueryBaseParam:{
          id: null,
          questionId: null,
          tagId: null
       }
       ,
       /** 存储TQuestionTag多条件查询条件(分页，去除分页的num和size)*/
       TQuestionTagQueryBasePageHelperParam:{
          id: null,
          questionId: null,
          tagId: null
       }
       ,
       /** 存储TQuestionTag存储多条件查询结果(分页，去除分页的num和size)*/
       TQuestionTagQueryBasePageHelperResult:{
          pageNum: null,
          pageSize: null,
          size: null,
          orderBy: null,
          startRow: null,
          endRow: null,
          total: null,
          pages: null,
          list: [{
            id: null,
            questionId: null,
            tagId: null
          }],
          firstPage: null,
          prePage: 0,
          nextPage: null,
          lastPage: null,
          isFirstPage: true,
          isLastPage: null,
          hasPreviousPage: null,
          hasNextPage: null,
          navigatePages: null,
          navigatepageNums: []
        }
    ,
        /** 存储TAnswerSecond多个结果*/
        TAnswerSecondResults:[{
           id: null,
           userName: null,
           questionId: null,
           questionTitle: null,
           content: null,
           deleteFlag: null,
           status: null,
           blackFlag: null,
           time: null,
           answerId: null
        }]
        ,
        /** 存储TAnswerSecond单个结果*/
        TAnswerSecondResult:{
          id: null,
          userName: null,
          questionId: null,
          questionTitle: null,
          content: null,
          deleteFlag: null,
          status: null,
          blackFlag: null,
          time: null,
          answerId: null
        }
        ,
        /** 存储TAnswerSecond插入结果*/
        TAnswerSecondInsertParam:{
          id: null,
          userName: null,
          questionId: null,
          questionTitle: null,
          content: null,
          deleteFlag: null,
          status: null,
          blackFlag: null,
          time: null,
          answerId: null
        }
        ,
       /** 存储TAnswerSecond主键更新*/
       TAnswerSecondUpdateByPrimaryKeyParam:{
         source:{
            userName: null,
            questionId: null,
            questionTitle: null,
            content: null,
            deleteFlag: null,
            status: null,
            blackFlag: null,
            time: null,
            answerId: null
         }
         ,
         target:{
            id: null,
         }
       }
       ,
       /** 存储TAnswerSecond更新*/
       TAnswerSecondUpdateBaseParam:{
         source:{
           id: null,
           userName: null,
           questionId: null,
           questionTitle: null,
           content: null,
           deleteFlag: null,
           status: null,
           blackFlag: null,
           time: null,
           answerId: null
         }
         ,
         target:{
          id: null,
          userName: null,
          questionId: null,
          questionTitle: null,
          content: null,
          deleteFlag: null,
          status: null,
          blackFlag: null,
          time: null,
          answerId: null
         }
       }
       ,
       /** 存储TAnswerSecond多条件查询条件*/
       TAnswerSecondQueryBaseParam:{
          id: null,
          userName: null,
          questionId: null,
          questionTitle: null,
          content: null,
          deleteFlag: null,
          status: null,
          blackFlag: null,
          time: null,
          answerId: null
       }
       ,
       /** 存储TAnswerSecond多条件查询条件(分页，去除分页的num和size)*/
       TAnswerSecondQueryBasePageHelperParam:{
          id: null,
          userName: null,
          questionId: null,
          questionTitle: null,
          content: null,
          deleteFlag: null,
          status: null,
          blackFlag: null,
          time: null,
          answerId: null
       }
       ,
       /** 存储TAnswerSecond存储多条件查询结果(分页，去除分页的num和size)*/
       TAnswerSecondQueryBasePageHelperResult:{
          pageNum: null,
          pageSize: null,
          size: null,
          orderBy: null,
          startRow: null,
          endRow: null,
          total: null,
          pages: null,
          list: [{
            id: null,
            userName: null,
            questionId: null,
            questionTitle: null,
            content: null,
            deleteFlag: null,
            status: null,
            blackFlag: null,
            time: null,
            answerId: null
          }],
          firstPage: null,
          prePage: 0,
          nextPage: null,
          lastPage: null,
          isFirstPage: true,
          isLastPage: null,
          hasPreviousPage: null,
          hasNextPage: null,
          navigatePages: null,
          navigatepageNums: []
        }
    ,
        /** 存储TFollowQuestion多个结果*/
        TFollowQuestionResults:[{
           questionId: null,
           userName: null,
           cteateTime: null
        }]
        ,
        /** 存储TFollowQuestion单个结果*/
        TFollowQuestionResult:{
          questionId: null,
          userName: null,
          cteateTime: null
        }
        ,
        /** 存储TFollowQuestion插入结果*/
        TFollowQuestionInsertParam:{
          questionId: null,
          userName: null,
          cteateTime: null
        }
        ,
       /** 存储TFollowQuestion主键更新*/
       TFollowQuestionUpdateByPrimaryKeyParam:{
         source:{
            cteateTime: null
         }
         ,
         target:{
            questionId: null,
            userName: null,
         }
       }
       ,
       /** 存储TFollowQuestion更新*/
       TFollowQuestionUpdateBaseParam:{
         source:{
           questionId: null,
           userName: null,
           cteateTime: null
         }
         ,
         target:{
          questionId: null,
          userName: null,
          cteateTime: null
         }
       }
       ,
       /** 存储TFollowQuestion多条件查询条件*/
       TFollowQuestionQueryBaseParam:{
          questionId: null,
          userName: null,
          cteateTime: null
       }
       ,
       /** 存储TFollowQuestion多条件查询条件(分页，去除分页的num和size)*/
       TFollowQuestionQueryBasePageHelperParam:{
          questionId: null,
          userName: null,
          cteateTime: null
       }
       ,
       /** 存储TFollowQuestion存储多条件查询结果(分页，去除分页的num和size)*/
       TFollowQuestionQueryBasePageHelperResult:{
          pageNum: null,
          pageSize: null,
          size: null,
          orderBy: null,
          startRow: null,
          endRow: null,
          total: null,
          pages: null,
          list: [{
            questionId: null,
            userName: null,
            cteateTime: null
          }],
          firstPage: null,
          prePage: 0,
          nextPage: null,
          lastPage: null,
          isFirstPage: true,
          isLastPage: null,
          hasPreviousPage: null,
          hasNextPage: null,
          navigatePages: null,
          navigatepageNums: []
        }
    ,
        /** 存储TReportAnswer多个结果*/
        TReportAnswerResults:[{
           id: null,
           answerId: null,
           reason: null
        }]
        ,
        /** 存储TReportAnswer单个结果*/
        TReportAnswerResult:{
          id: null,
          answerId: null,
          reason: null
        }
        ,
        /** 存储TReportAnswer插入结果*/
        TReportAnswerInsertParam:{
          id: null,
          answerId: null,
          reason: null
        }
        ,
       /** 存储TReportAnswer主键更新*/
       TReportAnswerUpdateByPrimaryKeyParam:{
         source:{
            answerId: null,
            reason: null
         }
         ,
         target:{
            id: null,
         }
       }
       ,
       /** 存储TReportAnswer更新*/
       TReportAnswerUpdateBaseParam:{
         source:{
           id: null,
           answerId: null,
           reason: null
         }
         ,
         target:{
          id: null,
          answerId: null,
          reason: null
         }
       }
       ,
       /** 存储TReportAnswer多条件查询条件*/
       TReportAnswerQueryBaseParam:{
          id: null,
          answerId: null,
          reason: null
       }
       ,
       /** 存储TReportAnswer多条件查询条件(分页，去除分页的num和size)*/
       TReportAnswerQueryBasePageHelperParam:{
          id: null,
          answerId: null,
          reason: null
       }
       ,
       /** 存储TReportAnswer存储多条件查询结果(分页，去除分页的num和size)*/
       TReportAnswerQueryBasePageHelperResult:{
          pageNum: null,
          pageSize: null,
          size: null,
          orderBy: null,
          startRow: null,
          endRow: null,
          total: null,
          pages: null,
          list: [{
            id: null,
            answerId: null,
            reason: null
          }],
          firstPage: null,
          prePage: 0,
          nextPage: null,
          lastPage: null,
          isFirstPage: true,
          isLastPage: null,
          hasPreviousPage: null,
          hasNextPage: null,
          navigatePages: null,
          navigatepageNums: []
        }
    ,
        /** 存储VQuestionFollowSum多个结果*/
        VQuestionFollowSumResults:[{
           followSum: null,
           questionId: null
        }]
        ,
        /** 存储VQuestionFollowSum单个结果*/
        VQuestionFollowSumResult:{
          followSum: null,
          questionId: null
        }
        ,
        /** 存储VQuestionFollowSum插入结果*/
        VQuestionFollowSumInsertParam:{
          followSum: null,
          questionId: null
        }
        ,
       /** 存储VQuestionFollowSum主键更新*/
       VQuestionFollowSumUpdateByPrimaryKeyParam:{
         source:{
            followSum: null,
            questionId: null
         }
         ,
         target:{
         }
       }
       ,
       /** 存储VQuestionFollowSum更新*/
       VQuestionFollowSumUpdateBaseParam:{
         source:{
           followSum: null,
           questionId: null
         }
         ,
         target:{
          followSum: null,
          questionId: null
         }
       }
       ,
       /** 存储VQuestionFollowSum多条件查询条件*/
       VQuestionFollowSumQueryBaseParam:{
          followSum: null,
          questionId: null
       }
       ,
       /** 存储VQuestionFollowSum多条件查询条件(分页，去除分页的num和size)*/
       VQuestionFollowSumQueryBasePageHelperParam:{
          followSum: null,
          questionId: null
       }
       ,
       /** 存储VQuestionFollowSum存储多条件查询结果(分页，去除分页的num和size)*/
       VQuestionFollowSumQueryBasePageHelperResult:{
          pageNum: null,
          pageSize: null,
          size: null,
          orderBy: null,
          startRow: null,
          endRow: null,
          total: null,
          pages: null,
          list: [{
            followSum: null,
            questionId: null
          }],
          firstPage: null,
          prePage: 0,
          nextPage: null,
          lastPage: null,
          isFirstPage: true,
          isLastPage: null,
          hasPreviousPage: null,
          hasNextPage: null,
          navigatePages: null,
          navigatepageNums: []
        }
    ,
        /** 存储TUser多个结果*/
        TUserResults:[{
           id: null,
           name: null,
           password: null,
           salt: null,
           phone: null,
           email: null,
           status: null,
           createTime: null,
           updateTime: null,
           deleteFlag: null,
           approveStatus: null,
           blackListUser: null,
           logo: null,
           pvCount: null,
           signature: null
        }]
        ,
        /** 存储TUser单个结果*/
        TUserResult:{
          id: null,
          name: null,
          password: null,
          salt: null,
          phone: null,
          email: null,
          status: null,
          createTime: null,
          updateTime: null,
          deleteFlag: null,
          approveStatus: null,
          blackListUser: null,
          logo: null,
          pvCount: null,
          signature: null
        }
        ,
        /** 存储TUser插入结果*/
        TUserInsertParam:{
          id: null,
          name: null,
          password: null,
          salt: null,
          phone: null,
          email: null,
          status: null,
          createTime: null,
          updateTime: null,
          deleteFlag: null,
          approveStatus: null,
          blackListUser: null,
          logo: null,
          pvCount: null,
          signature: null
        }
        ,
       /** 存储TUser主键更新*/
       TUserUpdateByPrimaryKeyParam:{
         source:{
            id: null,
            password: null,
            salt: null,
            phone: null,
            email: null,
            status: null,
            createTime: null,
            updateTime: null,
            deleteFlag: null,
            approveStatus: null,
            blackListUser: null,
            logo: null,
            pvCount: null,
            signature: null
         }
         ,
         target:{
            name: null,
         }
       }
       ,
       /** 存储TUser更新*/
       TUserUpdateBaseParam:{
         source:{
           id: null,
           name: null,
           password: null,
           salt: null,
           phone: null,
           email: null,
           status: null,
           createTime: null,
           updateTime: null,
           deleteFlag: null,
           approveStatus: null,
           blackListUser: null,
           logo: null,
           pvCount: null,
           signature: null
         }
         ,
         target:{
          id: null,
          name: null,
          password: null,
          salt: null,
          phone: null,
          email: null,
          status: null,
          createTime: null,
          updateTime: null,
          deleteFlag: null,
          approveStatus: null,
          blackListUser: null,
          logo: null,
          pvCount: null,
          signature: null
         }
       }
       ,
       /** 存储TUser多条件查询条件*/
       TUserQueryBaseParam:{
          id: null,
          name: null,
          password: null,
          salt: null,
          phone: null,
          email: null,
          status: null,
          createTime: null,
          updateTime: null,
          deleteFlag: null,
          approveStatus: null,
          blackListUser: null,
          logo: null,
          pvCount: null,
          signature: null
       }
       ,
       /** 存储TUser多条件查询条件(分页，去除分页的num和size)*/
       TUserQueryBasePageHelperParam:{
          id: null,
          name: null,
          password: null,
          salt: null,
          phone: null,
          email: null,
          status: null,
          createTime: null,
          updateTime: null,
          deleteFlag: null,
          approveStatus: null,
          blackListUser: null,
          logo: null,
          pvCount: null,
          signature: null
       }
       ,
       /** 存储TUser存储多条件查询结果(分页，去除分页的num和size)*/
       TUserQueryBasePageHelperResult:{
          pageNum: null,
          pageSize: null,
          size: null,
          orderBy: null,
          startRow: null,
          endRow: null,
          total: null,
          pages: null,
          list: [{
            id: null,
            name: null,
            password: null,
            salt: null,
            phone: null,
            email: null,
            status: null,
            createTime: null,
            updateTime: null,
            deleteFlag: null,
            approveStatus: null,
            blackListUser: null,
            logo: null,
            pvCount: null,
            signature: null
          }],
          firstPage: null,
          prePage: 0,
          nextPage: null,
          lastPage: null,
          isFirstPage: true,
          isLastPage: null,
          hasPreviousPage: null,
          hasNextPage: null,
          navigatePages: null,
          navigatepageNums: []
        }
    ,
        /** 存储TSystemParam多个结果*/
        TSystemParamResults:[{
           paramId: null,
           paramValue: null,
           paramDesc: null
        }]
        ,
        /** 存储TSystemParam单个结果*/
        TSystemParamResult:{
          paramId: null,
          paramValue: null,
          paramDesc: null
        }
        ,
        /** 存储TSystemParam插入结果*/
        TSystemParamInsertParam:{
          paramId: null,
          paramValue: null,
          paramDesc: null
        }
        ,
       /** 存储TSystemParam主键更新*/
       TSystemParamUpdateByPrimaryKeyParam:{
         source:{
            paramValue: null,
            paramDesc: null
         }
         ,
         target:{
            paramId: null,
         }
       }
       ,
       /** 存储TSystemParam更新*/
       TSystemParamUpdateBaseParam:{
         source:{
           paramId: null,
           paramValue: null,
           paramDesc: null
         }
         ,
         target:{
          paramId: null,
          paramValue: null,
          paramDesc: null
         }
       }
       ,
       /** 存储TSystemParam多条件查询条件*/
       TSystemParamQueryBaseParam:{
          paramId: null,
          paramValue: null,
          paramDesc: null
       }
       ,
       /** 存储TSystemParam多条件查询条件(分页，去除分页的num和size)*/
       TSystemParamQueryBasePageHelperParam:{
          paramId: null,
          paramValue: null,
          paramDesc: null
       }
       ,
       /** 存储TSystemParam存储多条件查询结果(分页，去除分页的num和size)*/
       TSystemParamQueryBasePageHelperResult:{
          pageNum: null,
          pageSize: null,
          size: null,
          orderBy: null,
          startRow: null,
          endRow: null,
          total: null,
          pages: null,
          list: [{
            paramId: null,
            paramValue: null,
            paramDesc: null
          }],
          firstPage: null,
          prePage: 0,
          nextPage: null,
          lastPage: null,
          isFirstPage: true,
          isLastPage: null,
          hasPreviousPage: null,
          hasNextPage: null,
          navigatePages: null,
          navigatepageNums: []
        }
    ,
        /** 存储TReportQuestion多个结果*/
        TReportQuestionResults:[{
           id: null,
           questionId: null,
           questionName: null,
           reason: null
        }]
        ,
        /** 存储TReportQuestion单个结果*/
        TReportQuestionResult:{
          id: null,
          questionId: null,
          questionName: null,
          reason: null
        }
        ,
        /** 存储TReportQuestion插入结果*/
        TReportQuestionInsertParam:{
          id: null,
          questionId: null,
          questionName: null,
          reason: null
        }
        ,
       /** 存储TReportQuestion主键更新*/
       TReportQuestionUpdateByPrimaryKeyParam:{
         source:{
            questionId: null,
            questionName: null,
            reason: null
         }
         ,
         target:{
            id: null,
         }
       }
       ,
       /** 存储TReportQuestion更新*/
       TReportQuestionUpdateBaseParam:{
         source:{
           id: null,
           questionId: null,
           questionName: null,
           reason: null
         }
         ,
         target:{
          id: null,
          questionId: null,
          questionName: null,
          reason: null
         }
       }
       ,
       /** 存储TReportQuestion多条件查询条件*/
       TReportQuestionQueryBaseParam:{
          id: null,
          questionId: null,
          questionName: null,
          reason: null
       }
       ,
       /** 存储TReportQuestion多条件查询条件(分页，去除分页的num和size)*/
       TReportQuestionQueryBasePageHelperParam:{
          id: null,
          questionId: null,
          questionName: null,
          reason: null
       }
       ,
       /** 存储TReportQuestion存储多条件查询结果(分页，去除分页的num和size)*/
       TReportQuestionQueryBasePageHelperResult:{
          pageNum: null,
          pageSize: null,
          size: null,
          orderBy: null,
          startRow: null,
          endRow: null,
          total: null,
          pages: null,
          list: [{
            id: null,
            questionId: null,
            questionName: null,
            reason: null
          }],
          firstPage: null,
          prePage: 0,
          nextPage: null,
          lastPage: null,
          isFirstPage: true,
          isLastPage: null,
          hasPreviousPage: null,
          hasNextPage: null,
          navigatePages: null,
          navigatepageNums: []
        }
    ,
        /** 存储TAdminUser多个结果*/
        TAdminUserResults:[{
           id: null,
           name: null,
           password: null,
           salt: null,
           phone: null,
           email: null,
           status: null,
           createTime: null,
           updateTime: null
        }]
        ,
        /** 存储TAdminUser单个结果*/
        TAdminUserResult:{
          id: null,
          name: null,
          password: null,
          salt: null,
          phone: null,
          email: null,
          status: null,
          createTime: null,
          updateTime: null
        }
        ,
        /** 存储TAdminUser插入结果*/
        TAdminUserInsertParam:{
          id: null,
          name: null,
          password: null,
          salt: null,
          phone: null,
          email: null,
          status: null,
          createTime: null,
          updateTime: null
        }
        ,
       /** 存储TAdminUser主键更新*/
       TAdminUserUpdateByPrimaryKeyParam:{
         source:{
            name: null,
            password: null,
            salt: null,
            phone: null,
            email: null,
            status: null,
            createTime: null,
            updateTime: null
         }
         ,
         target:{
            id: null,
         }
       }
       ,
       /** 存储TAdminUser更新*/
       TAdminUserUpdateBaseParam:{
         source:{
           id: null,
           name: null,
           password: null,
           salt: null,
           phone: null,
           email: null,
           status: null,
           createTime: null,
           updateTime: null
         }
         ,
         target:{
          id: null,
          name: null,
          password: null,
          salt: null,
          phone: null,
          email: null,
          status: null,
          createTime: null,
          updateTime: null
         }
       }
       ,
       /** 存储TAdminUser多条件查询条件*/
       TAdminUserQueryBaseParam:{
          id: null,
          name: null,
          password: null,
          salt: null,
          phone: null,
          email: null,
          status: null,
          createTime: null,
          updateTime: null
       }
       ,
       /** 存储TAdminUser多条件查询条件(分页，去除分页的num和size)*/
       TAdminUserQueryBasePageHelperParam:{
          id: null,
          name: null,
          password: null,
          salt: null,
          phone: null,
          email: null,
          status: null,
          createTime: null,
          updateTime: null
       }
       ,
       /** 存储TAdminUser存储多条件查询结果(分页，去除分页的num和size)*/
       TAdminUserQueryBasePageHelperResult:{
          pageNum: null,
          pageSize: null,
          size: null,
          orderBy: null,
          startRow: null,
          endRow: null,
          total: null,
          pages: null,
          list: [{
            id: null,
            name: null,
            password: null,
            salt: null,
            phone: null,
            email: null,
            status: null,
            createTime: null,
            updateTime: null
          }],
          firstPage: null,
          prePage: 0,
          nextPage: null,
          lastPage: null,
          isFirstPage: true,
          isLastPage: null,
          hasPreviousPage: null,
          hasNextPage: null,
          navigatePages: null,
          navigatepageNums: []
        }
    ,
        /** 存储TFollowPerson多个结果*/
        TFollowPersonResults:[{
           userNameFollow: null,
           userName: null,
           cteateTime: null
        }]
        ,
        /** 存储TFollowPerson单个结果*/
        TFollowPersonResult:{
          userNameFollow: null,
          userName: null,
          cteateTime: null
        }
        ,
        /** 存储TFollowPerson插入结果*/
        TFollowPersonInsertParam:{
          userNameFollow: null,
          userName: null,
          cteateTime: null
        }
        ,
       /** 存储TFollowPerson主键更新*/
       TFollowPersonUpdateByPrimaryKeyParam:{
         source:{
            cteateTime: null
         }
         ,
         target:{
            userNameFollow: null,
            userName: null,
         }
       }
       ,
       /** 存储TFollowPerson更新*/
       TFollowPersonUpdateBaseParam:{
         source:{
           userNameFollow: null,
           userName: null,
           cteateTime: null
         }
         ,
         target:{
          userNameFollow: null,
          userName: null,
          cteateTime: null
         }
       }
       ,
       /** 存储TFollowPerson多条件查询条件*/
       TFollowPersonQueryBaseParam:{
          userNameFollow: null,
          userName: null,
          cteateTime: null
       }
       ,
       /** 存储TFollowPerson多条件查询条件(分页，去除分页的num和size)*/
       TFollowPersonQueryBasePageHelperParam:{
          userNameFollow: null,
          userName: null,
          cteateTime: null
       }
       ,
       /** 存储TFollowPerson存储多条件查询结果(分页，去除分页的num和size)*/
       TFollowPersonQueryBasePageHelperResult:{
          pageNum: null,
          pageSize: null,
          size: null,
          orderBy: null,
          startRow: null,
          endRow: null,
          total: null,
          pages: null,
          list: [{
            userNameFollow: null,
            userName: null,
            cteateTime: null
          }],
          firstPage: null,
          prePage: 0,
          nextPage: null,
          lastPage: null,
          isFirstPage: true,
          isLastPage: null,
          hasPreviousPage: null,
          hasNextPage: null,
          navigatePages: null,
          navigatepageNums: []
        }
    
    },
    created() {
     /** 初始化 */
    },
    methods: {
            /** 处理queryByPrimaryKey */

            /** 主键更新 */
            updateByPrimaryKey() {
              let self = this;
              axios.post(updateByPrimaryKey, self.UpdateByPrimaryKeyParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 插入 */
            insert() {
              let self = this;
              axios.post(insert, self.InsertParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("insert 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 主键删除 */
            deleteByPrimaryKey() {
              let self = this;
              axios.post(deleteByPrimaryKey,  {
                  params: {
                  }
             }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 分页查询 -- 存放的是默认的data */
            queryBasePageHelper(pageNum,pageSize) {
              let self = this;
              axios.post(queryBasePageHelper+"?pageNum="+pageNum+"&pageSize="+pageSize, self.QueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.QueryBasePageHelperResult = data.content;
                        console.log(self.QueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },

           /** 分页查询  --  存放的是指定的data.sub */
            queryBasePageHelperSub(pageNum,pageSize,sub) {
              let self = this;
              axios.post(queryBasePageHelper+"?pageNum="+pageNum+"&pageSize="+pageSize, self.QueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.$set(self.QueryBasePageHelperResult,sub,data.content);
                        console.log(self.QueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },


            /** 主键查询 */
            queryByPrimaryKey() {
              let self = this;
              axios.get(queryByPrimaryKey, {
                  params: {
                  }
              }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.Result = data.content;
                        console.log(self.Result);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
                    function (response) {
                    //失败回调
                     alert(self.alertError);
              })
            },


            /** 多条件查询 */
            queryBase() {
              let self = this;
              axios.post(queryBase, self.QueryBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.Results = data.content;
                        console.log(self.Results);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },



            /** 多条件更新 */
            updateBase() {
              let self = this;
              axios.post(updateBase, self.UpdateBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
           },


            /** 主键更新VQuestionUserAnswerFollow */
            updateVQuestionUserAnswerFollowByPrimaryKey() {
              let self = this;
              axios.post(updateVQuestionUserAnswerFollowByPrimaryKey, self.VQuestionUserAnswerFollowUpdateByPrimaryKeyParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 插入VQuestionUserAnswerFollow */
            insertVQuestionUserAnswerFollow() {
              let self = this;
              axios.post(insertVQuestionUserAnswerFollow, self.VQuestionUserAnswerFollowInsertParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("insert 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 主键删除VQuestionUserAnswerFollow */
            deleteVQuestionUserAnswerFollowByPrimaryKey() {
              let self = this;
              axios.post(deleteVQuestionUserAnswerFollowByPrimaryKey,  {
                  params: {
                  }
             }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 分页查询VQuestionUserAnswerFollow -- 存放的是默认的data */
            queryBasePageHelperVQuestionUserAnswerFollow(pageNum,pageSize) {
              let self = this;
              axios.post(queryBasePageHelperVQuestionUserAnswerFollow+"?pageNum="+pageNum+"&pageSize="+pageSize, self.VQuestionUserAnswerFollowQueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.VQuestionUserAnswerFollowQueryBasePageHelperResult = data.content;
                        console.log(self.VQuestionUserAnswerFollowQueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },

           /** 分页查询VQuestionUserAnswerFollow  --  存放的是指定的data.sub */
            queryBasePageHelperVQuestionUserAnswerFollowSub(pageNum,pageSize,sub) {
              let self = this;
              axios.post(queryBasePageHelperVQuestionUserAnswerFollow+"?pageNum="+pageNum+"&pageSize="+pageSize, self.VQuestionUserAnswerFollowQueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.$set(self.VQuestionUserAnswerFollowQueryBasePageHelperResult,sub,data.content);
                        console.log(self.VQuestionUserAnswerFollowQueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },


            /** 主键查询VQuestionUserAnswerFollow */
            queryVQuestionUserAnswerFollowByPrimaryKey() {
              let self = this;
              axios.get(queryVQuestionUserAnswerFollowByPrimaryKey, {
                  params: {
                  }
              }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.VQuestionUserAnswerFollowResult = data.content;
                        console.log(self.VQuestionUserAnswerFollowResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
                    function (response) {
                    //失败回调
                     alert(self.alertError);
              })
            },


            /** 多条件查询VQuestionUserAnswerFollow */
            queryBaseVQuestionUserAnswerFollow() {
              let self = this;
              axios.post(queryBaseVQuestionUserAnswerFollow, self.VQuestionUserAnswerFollowQueryBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.VQuestionUserAnswerFollowResults = data.content;
                        console.log(self.VQuestionUserAnswerFollowResults);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },



            /** 多条件更新VQuestionUserAnswerFollow */
            updateBaseVQuestionUserAnswerFollow() {
              let self = this;
              axios.post(updateBaseVQuestionUserAnswerFollow, self.VQuestionUserAnswerFollowUpdateBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
           },


            /** 主键更新TTag */
            updateTTagByPrimaryKey() {
              let self = this;
              axios.post(updateTTagByPrimaryKey, self.TTagUpdateByPrimaryKeyParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 插入TTag */
            insertTTag() {
              let self = this;
              axios.post(insertTTag, self.TTagInsertParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("insert 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 主键删除TTag */
            deleteTTagByPrimaryKey(id) {
              let self = this;
              axios.post(deleteTTagByPrimaryKey,  {
                  params: {
                id:id
                  }
             }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 分页查询TTag -- 存放的是默认的data */
            queryBasePageHelperTTag(pageNum,pageSize) {
              let self = this;
              axios.post(queryBasePageHelperTTag+"?pageNum="+pageNum+"&pageSize="+pageSize, self.TTagQueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.TTagQueryBasePageHelperResult = data.content;
                        console.log(self.TTagQueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },

           /** 分页查询TTag  --  存放的是指定的data.sub */
            queryBasePageHelperTTagSub(pageNum,pageSize,sub) {
              let self = this;
              axios.post(queryBasePageHelperTTag+"?pageNum="+pageNum+"&pageSize="+pageSize, self.TTagQueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.$set(self.TTagQueryBasePageHelperResult,sub,data.content);
                        console.log(self.TTagQueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },


            /** 主键查询TTag */
            queryTTagByPrimaryKey(id) {
              let self = this;
              axios.get(queryTTagByPrimaryKey, {
                  params: {
                id:id
                  }
              }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.TTagResult = data.content;
                        console.log(self.TTagResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
                    function (response) {
                    //失败回调
                     alert(self.alertError);
              })
            },


            /** 多条件查询TTag */
            queryBaseTTag() {
              let self = this;
              axios.post(queryBaseTTag, self.TTagQueryBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.TTagResults = data.content;
                        console.log(self.TTagResults);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },



            /** 多条件更新TTag */
            updateBaseTTag() {
              let self = this;
              axios.post(updateBaseTTag, self.TTagUpdateBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
           },


            /** 主键更新VReportUserUser */
            updateVReportUserUserByPrimaryKey() {
              let self = this;
              axios.post(updateVReportUserUserByPrimaryKey, self.VReportUserUserUpdateByPrimaryKeyParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 插入VReportUserUser */
            insertVReportUserUser() {
              let self = this;
              axios.post(insertVReportUserUser, self.VReportUserUserInsertParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("insert 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 主键删除VReportUserUser */
            deleteVReportUserUserByPrimaryKey() {
              let self = this;
              axios.post(deleteVReportUserUserByPrimaryKey,  {
                  params: {
                  }
             }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 分页查询VReportUserUser -- 存放的是默认的data */
            queryBasePageHelperVReportUserUser(pageNum,pageSize) {
              let self = this;
              axios.post(queryBasePageHelperVReportUserUser+"?pageNum="+pageNum+"&pageSize="+pageSize, self.VReportUserUserQueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.VReportUserUserQueryBasePageHelperResult = data.content;
                        console.log(self.VReportUserUserQueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },

           /** 分页查询VReportUserUser  --  存放的是指定的data.sub */
            queryBasePageHelperVReportUserUserSub(pageNum,pageSize,sub) {
              let self = this;
              axios.post(queryBasePageHelperVReportUserUser+"?pageNum="+pageNum+"&pageSize="+pageSize, self.VReportUserUserQueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.$set(self.VReportUserUserQueryBasePageHelperResult,sub,data.content);
                        console.log(self.VReportUserUserQueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },


            /** 主键查询VReportUserUser */
            queryVReportUserUserByPrimaryKey() {
              let self = this;
              axios.get(queryVReportUserUserByPrimaryKey, {
                  params: {
                  }
              }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.VReportUserUserResult = data.content;
                        console.log(self.VReportUserUserResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
                    function (response) {
                    //失败回调
                     alert(self.alertError);
              })
            },


            /** 多条件查询VReportUserUser */
            queryBaseVReportUserUser() {
              let self = this;
              axios.post(queryBaseVReportUserUser, self.VReportUserUserQueryBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.VReportUserUserResults = data.content;
                        console.log(self.VReportUserUserResults);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },



            /** 多条件更新VReportUserUser */
            updateBaseVReportUserUser() {
              let self = this;
              axios.post(updateBaseVReportUserUser, self.VReportUserUserUpdateBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
           },


            /** 主键更新VQuestionAnswerSum */
            updateVQuestionAnswerSumByPrimaryKey() {
              let self = this;
              axios.post(updateVQuestionAnswerSumByPrimaryKey, self.VQuestionAnswerSumUpdateByPrimaryKeyParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 插入VQuestionAnswerSum */
            insertVQuestionAnswerSum() {
              let self = this;
              axios.post(insertVQuestionAnswerSum, self.VQuestionAnswerSumInsertParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("insert 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 主键删除VQuestionAnswerSum */
            deleteVQuestionAnswerSumByPrimaryKey() {
              let self = this;
              axios.post(deleteVQuestionAnswerSumByPrimaryKey,  {
                  params: {
                  }
             }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 分页查询VQuestionAnswerSum -- 存放的是默认的data */
            queryBasePageHelperVQuestionAnswerSum(pageNum,pageSize) {
              let self = this;
              axios.post(queryBasePageHelperVQuestionAnswerSum+"?pageNum="+pageNum+"&pageSize="+pageSize, self.VQuestionAnswerSumQueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.VQuestionAnswerSumQueryBasePageHelperResult = data.content;
                        console.log(self.VQuestionAnswerSumQueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },

           /** 分页查询VQuestionAnswerSum  --  存放的是指定的data.sub */
            queryBasePageHelperVQuestionAnswerSumSub(pageNum,pageSize,sub) {
              let self = this;
              axios.post(queryBasePageHelperVQuestionAnswerSum+"?pageNum="+pageNum+"&pageSize="+pageSize, self.VQuestionAnswerSumQueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.$set(self.VQuestionAnswerSumQueryBasePageHelperResult,sub,data.content);
                        console.log(self.VQuestionAnswerSumQueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },


            /** 主键查询VQuestionAnswerSum */
            queryVQuestionAnswerSumByPrimaryKey() {
              let self = this;
              axios.get(queryVQuestionAnswerSumByPrimaryKey, {
                  params: {
                  }
              }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.VQuestionAnswerSumResult = data.content;
                        console.log(self.VQuestionAnswerSumResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
                    function (response) {
                    //失败回调
                     alert(self.alertError);
              })
            },


            /** 多条件查询VQuestionAnswerSum */
            queryBaseVQuestionAnswerSum() {
              let self = this;
              axios.post(queryBaseVQuestionAnswerSum, self.VQuestionAnswerSumQueryBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.VQuestionAnswerSumResults = data.content;
                        console.log(self.VQuestionAnswerSumResults);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },



            /** 多条件更新VQuestionAnswerSum */
            updateBaseVQuestionAnswerSum() {
              let self = this;
              axios.post(updateBaseVQuestionAnswerSum, self.VQuestionAnswerSumUpdateBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
           },


            /** 主键更新VReportQuestionQuestition */
            updateVReportQuestionQuestitionByPrimaryKey() {
              let self = this;
              axios.post(updateVReportQuestionQuestitionByPrimaryKey, self.VReportQuestionQuestitionUpdateByPrimaryKeyParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 插入VReportQuestionQuestition */
            insertVReportQuestionQuestition() {
              let self = this;
              axios.post(insertVReportQuestionQuestition, self.VReportQuestionQuestitionInsertParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("insert 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 主键删除VReportQuestionQuestition */
            deleteVReportQuestionQuestitionByPrimaryKey() {
              let self = this;
              axios.post(deleteVReportQuestionQuestitionByPrimaryKey,  {
                  params: {
                  }
             }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 分页查询VReportQuestionQuestition -- 存放的是默认的data */
            queryBasePageHelperVReportQuestionQuestition(pageNum,pageSize) {
              let self = this;
              axios.post(queryBasePageHelperVReportQuestionQuestition+"?pageNum="+pageNum+"&pageSize="+pageSize, self.VReportQuestionQuestitionQueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.VReportQuestionQuestitionQueryBasePageHelperResult = data.content;
                        console.log(self.VReportQuestionQuestitionQueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },

           /** 分页查询VReportQuestionQuestition  --  存放的是指定的data.sub */
            queryBasePageHelperVReportQuestionQuestitionSub(pageNum,pageSize,sub) {
              let self = this;
              axios.post(queryBasePageHelperVReportQuestionQuestition+"?pageNum="+pageNum+"&pageSize="+pageSize, self.VReportQuestionQuestitionQueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.$set(self.VReportQuestionQuestitionQueryBasePageHelperResult,sub,data.content);
                        console.log(self.VReportQuestionQuestitionQueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },


            /** 主键查询VReportQuestionQuestition */
            queryVReportQuestionQuestitionByPrimaryKey() {
              let self = this;
              axios.get(queryVReportQuestionQuestitionByPrimaryKey, {
                  params: {
                  }
              }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.VReportQuestionQuestitionResult = data.content;
                        console.log(self.VReportQuestionQuestitionResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
                    function (response) {
                    //失败回调
                     alert(self.alertError);
              })
            },


            /** 多条件查询VReportQuestionQuestition */
            queryBaseVReportQuestionQuestition() {
              let self = this;
              axios.post(queryBaseVReportQuestionQuestition, self.VReportQuestionQuestitionQueryBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.VReportQuestionQuestitionResults = data.content;
                        console.log(self.VReportQuestionQuestitionResults);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },



            /** 多条件更新VReportQuestionQuestition */
            updateBaseVReportQuestionQuestition() {
              let self = this;
              axios.post(updateBaseVReportQuestionQuestition, self.VReportQuestionQuestitionUpdateBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
           },


            /** 主键更新TAnswer */
            updateTAnswerByPrimaryKey() {
              let self = this;
              axios.post(updateTAnswerByPrimaryKey, self.TAnswerUpdateByPrimaryKeyParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 插入TAnswer */
            insertTAnswer() {
              let self = this;
              axios.post(insertTAnswer, self.TAnswerInsertParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("insert 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 主键删除TAnswer */
            deleteTAnswerByPrimaryKey(id) {
              let self = this;
              axios.post(deleteTAnswerByPrimaryKey,  {
                  params: {
                id:id
                  }
             }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 分页查询TAnswer -- 存放的是默认的data */
            queryBasePageHelperTAnswer(pageNum,pageSize) {
              let self = this;
              axios.post(queryBasePageHelperTAnswer+"?pageNum="+pageNum+"&pageSize="+pageSize, self.TAnswerQueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.TAnswerQueryBasePageHelperResult = data.content;
                        console.log(self.TAnswerQueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },

           /** 分页查询TAnswer  --  存放的是指定的data.sub */
            queryBasePageHelperTAnswerSub(pageNum,pageSize,sub) {
              let self = this;
              axios.post(queryBasePageHelperTAnswer+"?pageNum="+pageNum+"&pageSize="+pageSize, self.TAnswerQueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.$set(self.TAnswerQueryBasePageHelperResult,sub,data.content);
                        console.log(self.TAnswerQueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },


            /** 主键查询TAnswer */
            queryTAnswerByPrimaryKey(id) {
              let self = this;
              axios.get(queryTAnswerByPrimaryKey, {
                  params: {
                id:id
                  }
              }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.TAnswerResult = data.content;
                        console.log(self.TAnswerResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
                    function (response) {
                    //失败回调
                     alert(self.alertError);
              })
            },


            /** 多条件查询TAnswer */
            queryBaseTAnswer() {
              let self = this;
              axios.post(queryBaseTAnswer, self.TAnswerQueryBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.TAnswerResults = data.content;
                        console.log(self.TAnswerResults);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },



            /** 多条件更新TAnswer */
            updateBaseTAnswer() {
              let self = this;
              axios.post(updateBaseTAnswer, self.TAnswerUpdateBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
           },


            /** 主键更新TReportUser */
            updateTReportUserByPrimaryKey() {
              let self = this;
              axios.post(updateTReportUserByPrimaryKey, self.TReportUserUpdateByPrimaryKeyParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 插入TReportUser */
            insertTReportUser() {
              let self = this;
              axios.post(insertTReportUser, self.TReportUserInsertParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("insert 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 主键删除TReportUser */
            deleteTReportUserByPrimaryKey(id) {
              let self = this;
              axios.post(deleteTReportUserByPrimaryKey,  {
                  params: {
                id:id
                  }
             }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 分页查询TReportUser -- 存放的是默认的data */
            queryBasePageHelperTReportUser(pageNum,pageSize) {
              let self = this;
              axios.post(queryBasePageHelperTReportUser+"?pageNum="+pageNum+"&pageSize="+pageSize, self.TReportUserQueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.TReportUserQueryBasePageHelperResult = data.content;
                        console.log(self.TReportUserQueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },

           /** 分页查询TReportUser  --  存放的是指定的data.sub */
            queryBasePageHelperTReportUserSub(pageNum,pageSize,sub) {
              let self = this;
              axios.post(queryBasePageHelperTReportUser+"?pageNum="+pageNum+"&pageSize="+pageSize, self.TReportUserQueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.$set(self.TReportUserQueryBasePageHelperResult,sub,data.content);
                        console.log(self.TReportUserQueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },


            /** 主键查询TReportUser */
            queryTReportUserByPrimaryKey(id) {
              let self = this;
              axios.get(queryTReportUserByPrimaryKey, {
                  params: {
                id:id
                  }
              }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.TReportUserResult = data.content;
                        console.log(self.TReportUserResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
                    function (response) {
                    //失败回调
                     alert(self.alertError);
              })
            },


            /** 多条件查询TReportUser */
            queryBaseTReportUser() {
              let self = this;
              axios.post(queryBaseTReportUser, self.TReportUserQueryBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.TReportUserResults = data.content;
                        console.log(self.TReportUserResults);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },



            /** 多条件更新TReportUser */
            updateBaseTReportUser() {
              let self = this;
              axios.post(updateBaseTReportUser, self.TReportUserUpdateBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
           },


            /** 主键更新TQuestions */
            updateTQuestionsByPrimaryKey() {
              let self = this;
              axios.post(updateTQuestionsByPrimaryKey, self.TQuestionsUpdateByPrimaryKeyParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 插入TQuestions */
            insertTQuestions() {
              let self = this;
              axios.post(insertTQuestions, self.TQuestionsInsertParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("insert 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 主键删除TQuestions */
            deleteTQuestionsByPrimaryKey(id) {
              let self = this;
              axios.post(deleteTQuestionsByPrimaryKey,  {
                  params: {
                id:id
                  }
             }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 分页查询TQuestions -- 存放的是默认的data */
            queryBasePageHelperTQuestions(pageNum,pageSize) {
              let self = this;
              axios.post(queryBasePageHelperTQuestions+"?pageNum="+pageNum+"&pageSize="+pageSize, self.TQuestionsQueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.TQuestionsQueryBasePageHelperResult = data.content;
                        console.log(self.TQuestionsQueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },

           /** 分页查询TQuestions  --  存放的是指定的data.sub */
            queryBasePageHelperTQuestionsSub(pageNum,pageSize,sub) {
              let self = this;
              axios.post(queryBasePageHelperTQuestions+"?pageNum="+pageNum+"&pageSize="+pageSize, self.TQuestionsQueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.$set(self.TQuestionsQueryBasePageHelperResult,sub,data.content);
                        console.log(self.TQuestionsQueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },


            /** 主键查询TQuestions */
            queryTQuestionsByPrimaryKey(id) {
              let self = this;
              axios.get(queryTQuestionsByPrimaryKey, {
                  params: {
                id:id
                  }
              }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.TQuestionsResult = data.content;
                        console.log(self.TQuestionsResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
                    function (response) {
                    //失败回调
                     alert(self.alertError);
              })
            },


            /** 多条件查询TQuestions */
            queryBaseTQuestions() {
              let self = this;
              axios.post(queryBaseTQuestions, self.TQuestionsQueryBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.TQuestionsResults = data.content;
                        console.log(self.TQuestionsResults);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },



            /** 多条件更新TQuestions */
            updateBaseTQuestions() {
              let self = this;
              axios.post(updateBaseTQuestions, self.TQuestionsUpdateBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
           },


            /** 主键更新VAnswerUser */
            updateVAnswerUserByPrimaryKey() {
              let self = this;
              axios.post(updateVAnswerUserByPrimaryKey, self.VAnswerUserUpdateByPrimaryKeyParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 插入VAnswerUser */
            insertVAnswerUser() {
              let self = this;
              axios.post(insertVAnswerUser, self.VAnswerUserInsertParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("insert 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 主键删除VAnswerUser */
            deleteVAnswerUserByPrimaryKey() {
              let self = this;
              axios.post(deleteVAnswerUserByPrimaryKey,  {
                  params: {
                  }
             }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 分页查询VAnswerUser -- 存放的是默认的data */
            queryBasePageHelperVAnswerUser(pageNum,pageSize) {
              let self = this;
              axios.post(queryBasePageHelperVAnswerUser+"?pageNum="+pageNum+"&pageSize="+pageSize, self.VAnswerUserQueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.VAnswerUserQueryBasePageHelperResult = data.content;
                        console.log(self.VAnswerUserQueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },

           /** 分页查询VAnswerUser  --  存放的是指定的data.sub */
            queryBasePageHelperVAnswerUserSub(pageNum,pageSize,sub) {
              let self = this;
              axios.post(queryBasePageHelperVAnswerUser+"?pageNum="+pageNum+"&pageSize="+pageSize, self.VAnswerUserQueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.$set(self.VAnswerUserQueryBasePageHelperResult,sub,data.content);
                        console.log(self.VAnswerUserQueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },


            /** 主键查询VAnswerUser */
            queryVAnswerUserByPrimaryKey() {
              let self = this;
              axios.get(queryVAnswerUserByPrimaryKey, {
                  params: {
                  }
              }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.VAnswerUserResult = data.content;
                        console.log(self.VAnswerUserResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
                    function (response) {
                    //失败回调
                     alert(self.alertError);
              })
            },


            /** 多条件查询VAnswerUser */
            queryBaseVAnswerUser() {
              let self = this;
              axios.post(queryBaseVAnswerUser, self.VAnswerUserQueryBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.VAnswerUserResults = data.content;
                        console.log(self.VAnswerUserResults);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },



            /** 多条件更新VAnswerUser */
            updateBaseVAnswerUser() {
              let self = this;
              axios.post(updateBaseVAnswerUser, self.VAnswerUserUpdateBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
           },


            /** 主键更新VQuestionUser */
            updateVQuestionUserByPrimaryKey() {
              let self = this;
              axios.post(updateVQuestionUserByPrimaryKey, self.VQuestionUserUpdateByPrimaryKeyParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 插入VQuestionUser */
            insertVQuestionUser() {
              let self = this;
              axios.post(insertVQuestionUser, self.VQuestionUserInsertParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("insert 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 主键删除VQuestionUser */
            deleteVQuestionUserByPrimaryKey() {
              let self = this;
              axios.post(deleteVQuestionUserByPrimaryKey,  {
                  params: {
                  }
             }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 分页查询VQuestionUser -- 存放的是默认的data */
            queryBasePageHelperVQuestionUser(pageNum,pageSize) {
              let self = this;
              axios.post(queryBasePageHelperVQuestionUser+"?pageNum="+pageNum+"&pageSize="+pageSize, self.VQuestionUserQueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.VQuestionUserQueryBasePageHelperResult = data.content;
                        console.log(self.VQuestionUserQueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },

           /** 分页查询VQuestionUser  --  存放的是指定的data.sub */
            queryBasePageHelperVQuestionUserSub(pageNum,pageSize,sub) {
              let self = this;
              axios.post(queryBasePageHelperVQuestionUser+"?pageNum="+pageNum+"&pageSize="+pageSize, self.VQuestionUserQueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.$set(self.VQuestionUserQueryBasePageHelperResult,sub,data.content);
                        console.log(self.VQuestionUserQueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },


            /** 主键查询VQuestionUser */
            queryVQuestionUserByPrimaryKey() {
              let self = this;
              axios.get(queryVQuestionUserByPrimaryKey, {
                  params: {
                  }
              }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.VQuestionUserResult = data.content;
                        console.log(self.VQuestionUserResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
                    function (response) {
                    //失败回调
                     alert(self.alertError);
              })
            },


            /** 多条件查询VQuestionUser */
            queryBaseVQuestionUser() {
              let self = this;
              axios.post(queryBaseVQuestionUser, self.VQuestionUserQueryBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.VQuestionUserResults = data.content;
                        console.log(self.VQuestionUserResults);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },



            /** 多条件更新VQuestionUser */
            updateBaseVQuestionUser() {
              let self = this;
              axios.post(updateBaseVQuestionUser, self.VQuestionUserUpdateBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
           },


            /** 主键更新VReportAnswerAnswer */
            updateVReportAnswerAnswerByPrimaryKey() {
              let self = this;
              axios.post(updateVReportAnswerAnswerByPrimaryKey, self.VReportAnswerAnswerUpdateByPrimaryKeyParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 插入VReportAnswerAnswer */
            insertVReportAnswerAnswer() {
              let self = this;
              axios.post(insertVReportAnswerAnswer, self.VReportAnswerAnswerInsertParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("insert 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 主键删除VReportAnswerAnswer */
            deleteVReportAnswerAnswerByPrimaryKey() {
              let self = this;
              axios.post(deleteVReportAnswerAnswerByPrimaryKey,  {
                  params: {
                  }
             }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 分页查询VReportAnswerAnswer -- 存放的是默认的data */
            queryBasePageHelperVReportAnswerAnswer(pageNum,pageSize) {
              let self = this;
              axios.post(queryBasePageHelperVReportAnswerAnswer+"?pageNum="+pageNum+"&pageSize="+pageSize, self.VReportAnswerAnswerQueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.VReportAnswerAnswerQueryBasePageHelperResult = data.content;
                        console.log(self.VReportAnswerAnswerQueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },

           /** 分页查询VReportAnswerAnswer  --  存放的是指定的data.sub */
            queryBasePageHelperVReportAnswerAnswerSub(pageNum,pageSize,sub) {
              let self = this;
              axios.post(queryBasePageHelperVReportAnswerAnswer+"?pageNum="+pageNum+"&pageSize="+pageSize, self.VReportAnswerAnswerQueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.$set(self.VReportAnswerAnswerQueryBasePageHelperResult,sub,data.content);
                        console.log(self.VReportAnswerAnswerQueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },


            /** 主键查询VReportAnswerAnswer */
            queryVReportAnswerAnswerByPrimaryKey() {
              let self = this;
              axios.get(queryVReportAnswerAnswerByPrimaryKey, {
                  params: {
                  }
              }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.VReportAnswerAnswerResult = data.content;
                        console.log(self.VReportAnswerAnswerResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
                    function (response) {
                    //失败回调
                     alert(self.alertError);
              })
            },


            /** 多条件查询VReportAnswerAnswer */
            queryBaseVReportAnswerAnswer() {
              let self = this;
              axios.post(queryBaseVReportAnswerAnswer, self.VReportAnswerAnswerQueryBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.VReportAnswerAnswerResults = data.content;
                        console.log(self.VReportAnswerAnswerResults);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },



            /** 多条件更新VReportAnswerAnswer */
            updateBaseVReportAnswerAnswer() {
              let self = this;
              axios.post(updateBaseVReportAnswerAnswer, self.VReportAnswerAnswerUpdateBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
           },


            /** 主键更新VHotQuestion */
            updateVHotQuestionByPrimaryKey() {
              let self = this;
              axios.post(updateVHotQuestionByPrimaryKey, self.VHotQuestionUpdateByPrimaryKeyParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 插入VHotQuestion */
            insertVHotQuestion() {
              let self = this;
              axios.post(insertVHotQuestion, self.VHotQuestionInsertParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("insert 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 主键删除VHotQuestion */
            deleteVHotQuestionByPrimaryKey() {
              let self = this;
              axios.post(deleteVHotQuestionByPrimaryKey,  {
                  params: {
                  }
             }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 分页查询VHotQuestion -- 存放的是默认的data */
            queryBasePageHelperVHotQuestion(pageNum,pageSize) {
              let self = this;
              axios.post(queryBasePageHelperVHotQuestion+"?pageNum="+pageNum+"&pageSize="+pageSize, self.VHotQuestionQueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.VHotQuestionQueryBasePageHelperResult = data.content;
                        console.log(self.VHotQuestionQueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },

           /** 分页查询VHotQuestion  --  存放的是指定的data.sub */
            queryBasePageHelperVHotQuestionSub(pageNum,pageSize,sub) {
              let self = this;
              axios.post(queryBasePageHelperVHotQuestion+"?pageNum="+pageNum+"&pageSize="+pageSize, self.VHotQuestionQueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.$set(self.VHotQuestionQueryBasePageHelperResult,sub,data.content);
                        console.log(self.VHotQuestionQueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },


            /** 主键查询VHotQuestion */
            queryVHotQuestionByPrimaryKey() {
              let self = this;
              axios.get(queryVHotQuestionByPrimaryKey, {
                  params: {
                  }
              }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.VHotQuestionResult = data.content;
                        console.log(self.VHotQuestionResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
                    function (response) {
                    //失败回调
                     alert(self.alertError);
              })
            },


            /** 多条件查询VHotQuestion */
            queryBaseVHotQuestion() {
              let self = this;
              axios.post(queryBaseVHotQuestion, self.VHotQuestionQueryBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.VHotQuestionResults = data.content;
                        console.log(self.VHotQuestionResults);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },



            /** 多条件更新VHotQuestion */
            updateBaseVHotQuestion() {
              let self = this;
              axios.post(updateBaseVHotQuestion, self.VHotQuestionUpdateBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
           },


            /** 主键更新TQuestionTag */
            updateTQuestionTagByPrimaryKey() {
              let self = this;
              axios.post(updateTQuestionTagByPrimaryKey, self.TQuestionTagUpdateByPrimaryKeyParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 插入TQuestionTag */
            insertTQuestionTag() {
              let self = this;
              axios.post(insertTQuestionTag, self.TQuestionTagInsertParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("insert 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 主键删除TQuestionTag */
            deleteTQuestionTagByPrimaryKey(id) {
              let self = this;
              axios.post(deleteTQuestionTagByPrimaryKey,  {
                  params: {
                id:id
                  }
             }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 分页查询TQuestionTag -- 存放的是默认的data */
            queryBasePageHelperTQuestionTag(pageNum,pageSize) {
              let self = this;
              axios.post(queryBasePageHelperTQuestionTag+"?pageNum="+pageNum+"&pageSize="+pageSize, self.TQuestionTagQueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.TQuestionTagQueryBasePageHelperResult = data.content;
                        console.log(self.TQuestionTagQueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },

           /** 分页查询TQuestionTag  --  存放的是指定的data.sub */
            queryBasePageHelperTQuestionTagSub(pageNum,pageSize,sub) {
              let self = this;
              axios.post(queryBasePageHelperTQuestionTag+"?pageNum="+pageNum+"&pageSize="+pageSize, self.TQuestionTagQueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.$set(self.TQuestionTagQueryBasePageHelperResult,sub,data.content);
                        console.log(self.TQuestionTagQueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },


            /** 主键查询TQuestionTag */
            queryTQuestionTagByPrimaryKey(id) {
              let self = this;
              axios.get(queryTQuestionTagByPrimaryKey, {
                  params: {
                id:id
                  }
              }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.TQuestionTagResult = data.content;
                        console.log(self.TQuestionTagResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
                    function (response) {
                    //失败回调
                     alert(self.alertError);
              })
            },


            /** 多条件查询TQuestionTag */
            queryBaseTQuestionTag() {
              let self = this;
              axios.post(queryBaseTQuestionTag, self.TQuestionTagQueryBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.TQuestionTagResults = data.content;
                        console.log(self.TQuestionTagResults);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },



            /** 多条件更新TQuestionTag */
            updateBaseTQuestionTag() {
              let self = this;
              axios.post(updateBaseTQuestionTag, self.TQuestionTagUpdateBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
           },


            /** 主键更新TAnswerSecond */
            updateTAnswerSecondByPrimaryKey() {
              let self = this;
              axios.post(updateTAnswerSecondByPrimaryKey, self.TAnswerSecondUpdateByPrimaryKeyParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 插入TAnswerSecond */
            insertTAnswerSecond() {
              let self = this;
              axios.post(insertTAnswerSecond, self.TAnswerSecondInsertParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("insert 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 主键删除TAnswerSecond */
            deleteTAnswerSecondByPrimaryKey(id) {
              let self = this;
              axios.post(deleteTAnswerSecondByPrimaryKey,  {
                  params: {
                id:id
                  }
             }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 分页查询TAnswerSecond -- 存放的是默认的data */
            queryBasePageHelperTAnswerSecond(pageNum,pageSize) {
              let self = this;
              axios.post(queryBasePageHelperTAnswerSecond+"?pageNum="+pageNum+"&pageSize="+pageSize, self.TAnswerSecondQueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.TAnswerSecondQueryBasePageHelperResult = data.content;
                        console.log(self.TAnswerSecondQueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },

           /** 分页查询TAnswerSecond  --  存放的是指定的data.sub */
            queryBasePageHelperTAnswerSecondSub(pageNum,pageSize,sub) {
              let self = this;
              axios.post(queryBasePageHelperTAnswerSecond+"?pageNum="+pageNum+"&pageSize="+pageSize, self.TAnswerSecondQueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.$set(self.TAnswerSecondQueryBasePageHelperResult,sub,data.content);
                        console.log(self.TAnswerSecondQueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },


            /** 主键查询TAnswerSecond */
            queryTAnswerSecondByPrimaryKey(id) {
              let self = this;
              axios.get(queryTAnswerSecondByPrimaryKey, {
                  params: {
                id:id
                  }
              }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.TAnswerSecondResult = data.content;
                        console.log(self.TAnswerSecondResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
                    function (response) {
                    //失败回调
                     alert(self.alertError);
              })
            },


            /** 多条件查询TAnswerSecond */
            queryBaseTAnswerSecond() {
              let self = this;
              axios.post(queryBaseTAnswerSecond, self.TAnswerSecondQueryBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.TAnswerSecondResults = data.content;
                        console.log(self.TAnswerSecondResults);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },



            /** 多条件更新TAnswerSecond */
            updateBaseTAnswerSecond() {
              let self = this;
              axios.post(updateBaseTAnswerSecond, self.TAnswerSecondUpdateBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
           },


            /** 主键更新TFollowQuestion */
            updateTFollowQuestionByPrimaryKey() {
              let self = this;
              axios.post(updateTFollowQuestionByPrimaryKey, self.TFollowQuestionUpdateByPrimaryKeyParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 插入TFollowQuestion */
            insertTFollowQuestion() {
              let self = this;
              axios.post(insertTFollowQuestion, self.TFollowQuestionInsertParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("insert 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 主键删除TFollowQuestion */
            deleteTFollowQuestionByPrimaryKey(questionId,userName) {
              let self = this;
              axios.post(deleteTFollowQuestionByPrimaryKey,  {
                  params: {
                questionId:questionId,
                userName:userName
                  }
             }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 分页查询TFollowQuestion -- 存放的是默认的data */
            queryBasePageHelperTFollowQuestion(pageNum,pageSize) {
              let self = this;
              axios.post(queryBasePageHelperTFollowQuestion+"?pageNum="+pageNum+"&pageSize="+pageSize, self.TFollowQuestionQueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.TFollowQuestionQueryBasePageHelperResult = data.content;
                        console.log(self.TFollowQuestionQueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },

           /** 分页查询TFollowQuestion  --  存放的是指定的data.sub */
            queryBasePageHelperTFollowQuestionSub(pageNum,pageSize,sub) {
              let self = this;
              axios.post(queryBasePageHelperTFollowQuestion+"?pageNum="+pageNum+"&pageSize="+pageSize, self.TFollowQuestionQueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.$set(self.TFollowQuestionQueryBasePageHelperResult,sub,data.content);
                        console.log(self.TFollowQuestionQueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },


            /** 主键查询TFollowQuestion */
            queryTFollowQuestionByPrimaryKey(questionId,userName) {
              let self = this;
              axios.get(queryTFollowQuestionByPrimaryKey, {
                  params: {
                questionId:questionId,
                userName:userName
                  }
              }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.TFollowQuestionResult = data.content;
                        console.log(self.TFollowQuestionResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
                    function (response) {
                    //失败回调
                     alert(self.alertError);
              })
            },


            /** 多条件查询TFollowQuestion */
            queryBaseTFollowQuestion() {
              let self = this;
              axios.post(queryBaseTFollowQuestion, self.TFollowQuestionQueryBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.TFollowQuestionResults = data.content;
                        console.log(self.TFollowQuestionResults);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },



            /** 多条件更新TFollowQuestion */
            updateBaseTFollowQuestion() {
              let self = this;
              axios.post(updateBaseTFollowQuestion, self.TFollowQuestionUpdateBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
           },


            /** 主键更新TReportAnswer */
            updateTReportAnswerByPrimaryKey() {
              let self = this;
              axios.post(updateTReportAnswerByPrimaryKey, self.TReportAnswerUpdateByPrimaryKeyParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 插入TReportAnswer */
            insertTReportAnswer() {
              let self = this;
              axios.post(insertTReportAnswer, self.TReportAnswerInsertParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("insert 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 主键删除TReportAnswer */
            deleteTReportAnswerByPrimaryKey(id) {
              let self = this;
              axios.post(deleteTReportAnswerByPrimaryKey,  {
                  params: {
                id:id
                  }
             }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 分页查询TReportAnswer -- 存放的是默认的data */
            queryBasePageHelperTReportAnswer(pageNum,pageSize) {
              let self = this;
              axios.post(queryBasePageHelperTReportAnswer+"?pageNum="+pageNum+"&pageSize="+pageSize, self.TReportAnswerQueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.TReportAnswerQueryBasePageHelperResult = data.content;
                        console.log(self.TReportAnswerQueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },

           /** 分页查询TReportAnswer  --  存放的是指定的data.sub */
            queryBasePageHelperTReportAnswerSub(pageNum,pageSize,sub) {
              let self = this;
              axios.post(queryBasePageHelperTReportAnswer+"?pageNum="+pageNum+"&pageSize="+pageSize, self.TReportAnswerQueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.$set(self.TReportAnswerQueryBasePageHelperResult,sub,data.content);
                        console.log(self.TReportAnswerQueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },


            /** 主键查询TReportAnswer */
            queryTReportAnswerByPrimaryKey(id) {
              let self = this;
              axios.get(queryTReportAnswerByPrimaryKey, {
                  params: {
                id:id
                  }
              }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.TReportAnswerResult = data.content;
                        console.log(self.TReportAnswerResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
                    function (response) {
                    //失败回调
                     alert(self.alertError);
              })
            },


            /** 多条件查询TReportAnswer */
            queryBaseTReportAnswer() {
              let self = this;
              axios.post(queryBaseTReportAnswer, self.TReportAnswerQueryBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.TReportAnswerResults = data.content;
                        console.log(self.TReportAnswerResults);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },



            /** 多条件更新TReportAnswer */
            updateBaseTReportAnswer() {
              let self = this;
              axios.post(updateBaseTReportAnswer, self.TReportAnswerUpdateBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
           },


            /** 主键更新VQuestionFollowSum */
            updateVQuestionFollowSumByPrimaryKey() {
              let self = this;
              axios.post(updateVQuestionFollowSumByPrimaryKey, self.VQuestionFollowSumUpdateByPrimaryKeyParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 插入VQuestionFollowSum */
            insertVQuestionFollowSum() {
              let self = this;
              axios.post(insertVQuestionFollowSum, self.VQuestionFollowSumInsertParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("insert 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 主键删除VQuestionFollowSum */
            deleteVQuestionFollowSumByPrimaryKey() {
              let self = this;
              axios.post(deleteVQuestionFollowSumByPrimaryKey,  {
                  params: {
                  }
             }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 分页查询VQuestionFollowSum -- 存放的是默认的data */
            queryBasePageHelperVQuestionFollowSum(pageNum,pageSize) {
              let self = this;
              axios.post(queryBasePageHelperVQuestionFollowSum+"?pageNum="+pageNum+"&pageSize="+pageSize, self.VQuestionFollowSumQueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.VQuestionFollowSumQueryBasePageHelperResult = data.content;
                        console.log(self.VQuestionFollowSumQueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },

           /** 分页查询VQuestionFollowSum  --  存放的是指定的data.sub */
            queryBasePageHelperVQuestionFollowSumSub(pageNum,pageSize,sub) {
              let self = this;
              axios.post(queryBasePageHelperVQuestionFollowSum+"?pageNum="+pageNum+"&pageSize="+pageSize, self.VQuestionFollowSumQueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.$set(self.VQuestionFollowSumQueryBasePageHelperResult,sub,data.content);
                        console.log(self.VQuestionFollowSumQueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },


            /** 主键查询VQuestionFollowSum */
            queryVQuestionFollowSumByPrimaryKey() {
              let self = this;
              axios.get(queryVQuestionFollowSumByPrimaryKey, {
                  params: {
                  }
              }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.VQuestionFollowSumResult = data.content;
                        console.log(self.VQuestionFollowSumResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
                    function (response) {
                    //失败回调
                     alert(self.alertError);
              })
            },


            /** 多条件查询VQuestionFollowSum */
            queryBaseVQuestionFollowSum() {
              let self = this;
              axios.post(queryBaseVQuestionFollowSum, self.VQuestionFollowSumQueryBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.VQuestionFollowSumResults = data.content;
                        console.log(self.VQuestionFollowSumResults);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },



            /** 多条件更新VQuestionFollowSum */
            updateBaseVQuestionFollowSum() {
              let self = this;
              axios.post(updateBaseVQuestionFollowSum, self.VQuestionFollowSumUpdateBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
           },


            /** 主键更新TUser */
            updateTUserByPrimaryKey() {
              let self = this;
              axios.post(updateTUserByPrimaryKey, self.TUserUpdateByPrimaryKeyParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 插入TUser */
            insertTUser() {
              let self = this;
              axios.post(insertTUser, self.TUserInsertParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("insert 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 主键删除TUser */
            deleteTUserByPrimaryKey(name) {
              let self = this;
              axios.post(deleteTUserByPrimaryKey,  {
                  params: {
                name:name
                  }
             }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 分页查询TUser -- 存放的是默认的data */
            queryBasePageHelperTUser(pageNum,pageSize) {
              let self = this;
              axios.post(queryBasePageHelperTUser+"?pageNum="+pageNum+"&pageSize="+pageSize, self.TUserQueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.TUserQueryBasePageHelperResult = data.content;
                        console.log(self.TUserQueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },

           /** 分页查询TUser  --  存放的是指定的data.sub */
            queryBasePageHelperTUserSub(pageNum,pageSize,sub) {
              let self = this;
              axios.post(queryBasePageHelperTUser+"?pageNum="+pageNum+"&pageSize="+pageSize, self.TUserQueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.$set(self.TUserQueryBasePageHelperResult,sub,data.content);
                        console.log(self.TUserQueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },


            /** 主键查询TUser */
            queryTUserByPrimaryKey(name) {
              let self = this;
              axios.get(queryTUserByPrimaryKey, {
                  params: {
                name:name
                  }
              }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.TUserResult = data.content;
                        console.log(self.TUserResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
                    function (response) {
                    //失败回调
                     alert(self.alertError);
              })
            },


            /** 多条件查询TUser */
            queryBaseTUser() {
              let self = this;
              axios.post(queryBaseTUser, self.TUserQueryBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.TUserResults = data.content;
                        console.log(self.TUserResults);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },



            /** 多条件更新TUser */
            updateBaseTUser() {
              let self = this;
              axios.post(updateBaseTUser, self.TUserUpdateBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
           },


            /** 主键更新TSystemParam */
            updateTSystemParamByPrimaryKey() {
              let self = this;
              axios.post(updateTSystemParamByPrimaryKey, self.TSystemParamUpdateByPrimaryKeyParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 插入TSystemParam */
            insertTSystemParam() {
              let self = this;
              axios.post(insertTSystemParam, self.TSystemParamInsertParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("insert 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 主键删除TSystemParam */
            deleteTSystemParamByPrimaryKey(paramId) {
              let self = this;
              axios.post(deleteTSystemParamByPrimaryKey,  {
                  params: {
                paramId:paramId
                  }
             }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 分页查询TSystemParam -- 存放的是默认的data */
            queryBasePageHelperTSystemParam(pageNum,pageSize) {
              let self = this;
              axios.post(queryBasePageHelperTSystemParam+"?pageNum="+pageNum+"&pageSize="+pageSize, self.TSystemParamQueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.TSystemParamQueryBasePageHelperResult = data.content;
                        console.log(self.TSystemParamQueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },

           /** 分页查询TSystemParam  --  存放的是指定的data.sub */
            queryBasePageHelperTSystemParamSub(pageNum,pageSize,sub) {
              let self = this;
              axios.post(queryBasePageHelperTSystemParam+"?pageNum="+pageNum+"&pageSize="+pageSize, self.TSystemParamQueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.$set(self.TSystemParamQueryBasePageHelperResult,sub,data.content);
                        console.log(self.TSystemParamQueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },


            /** 主键查询TSystemParam */
            queryTSystemParamByPrimaryKey(paramId) {
              let self = this;
              axios.get(queryTSystemParamByPrimaryKey, {
                  params: {
                paramId:paramId
                  }
              }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.TSystemParamResult = data.content;
                        console.log(self.TSystemParamResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
                    function (response) {
                    //失败回调
                     alert(self.alertError);
              })
            },


            /** 多条件查询TSystemParam */
            queryBaseTSystemParam() {
              let self = this;
              axios.post(queryBaseTSystemParam, self.TSystemParamQueryBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.TSystemParamResults = data.content;
                        console.log(self.TSystemParamResults);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },



            /** 多条件更新TSystemParam */
            updateBaseTSystemParam() {
              let self = this;
              axios.post(updateBaseTSystemParam, self.TSystemParamUpdateBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
           },


            /** 主键更新TReportQuestion */
            updateTReportQuestionByPrimaryKey() {
              let self = this;
              axios.post(updateTReportQuestionByPrimaryKey, self.TReportQuestionUpdateByPrimaryKeyParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 插入TReportQuestion */
            insertTReportQuestion() {
              let self = this;
              axios.post(insertTReportQuestion, self.TReportQuestionInsertParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("insert 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 主键删除TReportQuestion */
            deleteTReportQuestionByPrimaryKey(id) {
              let self = this;
              axios.post(deleteTReportQuestionByPrimaryKey,  {
                  params: {
                id:id
                  }
             }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 分页查询TReportQuestion -- 存放的是默认的data */
            queryBasePageHelperTReportQuestion(pageNum,pageSize) {
              let self = this;
              axios.post(queryBasePageHelperTReportQuestion+"?pageNum="+pageNum+"&pageSize="+pageSize, self.TReportQuestionQueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.TReportQuestionQueryBasePageHelperResult = data.content;
                        console.log(self.TReportQuestionQueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },

           /** 分页查询TReportQuestion  --  存放的是指定的data.sub */
            queryBasePageHelperTReportQuestionSub(pageNum,pageSize,sub) {
              let self = this;
              axios.post(queryBasePageHelperTReportQuestion+"?pageNum="+pageNum+"&pageSize="+pageSize, self.TReportQuestionQueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.$set(self.TReportQuestionQueryBasePageHelperResult,sub,data.content);
                        console.log(self.TReportQuestionQueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },


            /** 主键查询TReportQuestion */
            queryTReportQuestionByPrimaryKey(id) {
              let self = this;
              axios.get(queryTReportQuestionByPrimaryKey, {
                  params: {
                id:id
                  }
              }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.TReportQuestionResult = data.content;
                        console.log(self.TReportQuestionResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
                    function (response) {
                    //失败回调
                     alert(self.alertError);
              })
            },


            /** 多条件查询TReportQuestion */
            queryBaseTReportQuestion() {
              let self = this;
              axios.post(queryBaseTReportQuestion, self.TReportQuestionQueryBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.TReportQuestionResults = data.content;
                        console.log(self.TReportQuestionResults);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },



            /** 多条件更新TReportQuestion */
            updateBaseTReportQuestion() {
              let self = this;
              axios.post(updateBaseTReportQuestion, self.TReportQuestionUpdateBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
           },


            /** 主键更新TAdminUser */
            updateTAdminUserByPrimaryKey() {
              let self = this;
              axios.post(updateTAdminUserByPrimaryKey, self.TAdminUserUpdateByPrimaryKeyParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 插入TAdminUser */
            insertTAdminUser() {
              let self = this;
              axios.post(insertTAdminUser, self.TAdminUserInsertParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("insert 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 主键删除TAdminUser */
            deleteTAdminUserByPrimaryKey(id) {
              let self = this;
              axios.post(deleteTAdminUserByPrimaryKey,  {
                  params: {
                id:id
                  }
             }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 分页查询TAdminUser -- 存放的是默认的data */
            queryBasePageHelperTAdminUser(pageNum,pageSize) {
              let self = this;
              axios.post(queryBasePageHelperTAdminUser+"?pageNum="+pageNum+"&pageSize="+pageSize, self.TAdminUserQueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.TAdminUserQueryBasePageHelperResult = data.content;
                        console.log(self.TAdminUserQueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },

           /** 分页查询TAdminUser  --  存放的是指定的data.sub */
            queryBasePageHelperTAdminUserSub(pageNum,pageSize,sub) {
              let self = this;
              axios.post(queryBasePageHelperTAdminUser+"?pageNum="+pageNum+"&pageSize="+pageSize, self.TAdminUserQueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.$set(self.TAdminUserQueryBasePageHelperResult,sub,data.content);
                        console.log(self.TAdminUserQueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },


            /** 主键查询TAdminUser */
            queryTAdminUserByPrimaryKey(id) {
              let self = this;
              axios.get(queryTAdminUserByPrimaryKey, {
                  params: {
                id:id
                  }
              }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.TAdminUserResult = data.content;
                        console.log(self.TAdminUserResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
                    function (response) {
                    //失败回调
                     alert(self.alertError);
              })
            },


            /** 多条件查询TAdminUser */
            queryBaseTAdminUser() {
              let self = this;
              axios.post(queryBaseTAdminUser, self.TAdminUserQueryBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.TAdminUserResults = data.content;
                        console.log(self.TAdminUserResults);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },



            /** 多条件更新TAdminUser */
            updateBaseTAdminUser() {
              let self = this;
              axios.post(updateBaseTAdminUser, self.TAdminUserUpdateBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
           },


            /** 主键更新TFollowPerson */
            updateTFollowPersonByPrimaryKey() {
              let self = this;
              axios.post(updateTFollowPersonByPrimaryKey, self.TFollowPersonUpdateByPrimaryKeyParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 插入TFollowPerson */
            insertTFollowPerson() {
              let self = this;
              axios.post(insertTFollowPerson, self.TFollowPersonInsertParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("insert 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 主键删除TFollowPerson */
            deleteTFollowPersonByPrimaryKey(userNameFollow,userName) {
              let self = this;
              axios.post(deleteTFollowPersonByPrimaryKey,  {
                  params: {
                userNameFollow:userNameFollow,
                userName:userName
                  }
             }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })},


            /** 分页查询TFollowPerson -- 存放的是默认的data */
            queryBasePageHelperTFollowPerson(pageNum,pageSize) {
              let self = this;
              axios.post(queryBasePageHelperTFollowPerson+"?pageNum="+pageNum+"&pageSize="+pageSize, self.TFollowPersonQueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.TFollowPersonQueryBasePageHelperResult = data.content;
                        console.log(self.TFollowPersonQueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },

           /** 分页查询TFollowPerson  --  存放的是指定的data.sub */
            queryBasePageHelperTFollowPersonSub(pageNum,pageSize,sub) {
              let self = this;
              axios.post(queryBasePageHelperTFollowPerson+"?pageNum="+pageNum+"&pageSize="+pageSize, self.TFollowPersonQueryBasePageHelperParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.$set(self.TFollowPersonQueryBasePageHelperResult,sub,data.content);
                        console.log(self.TFollowPersonQueryBasePageHelperResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },


            /** 主键查询TFollowPerson */
            queryTFollowPersonByPrimaryKey(userNameFollow,userName) {
              let self = this;
              axios.get(queryTFollowPersonByPrimaryKey, {
                  params: {
                userNameFollow:userNameFollow,
                userName:userName
                  }
              }).then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.TFollowPersonResult = data.content;
                        console.log(self.TFollowPersonResult);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
                    function (response) {
                    //失败回调
                     alert(self.alertError);
              })
            },


            /** 多条件查询TFollowPerson */
            queryBaseTFollowPerson() {
              let self = this;
              axios.post(queryBaseTFollowPerson, self.TFollowPersonQueryBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                        self.TFollowPersonResults = data.content;
                        console.log(self.TFollowPersonResults);
                    } else {
                        alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
            },



            /** 多条件更新TFollowPerson */
            updateBaseTFollowPerson() {
              let self = this;
              axios.post(updateBaseTFollowPerson, self.TFollowPersonUpdateBaseParam)
              .then(function (response) {
                   let data = response.data;
                    console.log(data);
                    if (data.code == 0) {
                         if(data.content == true)
                         alert("delete 成功");
                    } else {
                         alert(data.msg);
                    }
              }).catch(
              function (response) {
                  //失败回调
                  alert(self.alertError);
              })
           },


    }
});