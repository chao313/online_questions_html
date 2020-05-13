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


var vue = new Vue({
    el: "#body",
    data: {
        alertError: "系统错误，请联系管理员！",
        alertSuccess: "操作成功",

        BASE_URL:BASE_URL,

        host:host,
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
           logo: null
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
          logo: null
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
          logo: null
        }
        ,
       /** 存储TUser主键更新*/
       TUserUpdateByPrimaryKeyParam:{
         source:{
            id: null,
            salt: null,
            phone: null,
            email: null,
            status: null,
            createTime: null,
            updateTime: null,
            deleteFlag: null,
            approveStatus: null,
            blackListUser: null,
            logo: null
         }
         ,
         target:{
            name: null,
            password: null,
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
           logo: null
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
          logo: null
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
          logo: null
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
          logo: null
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
            logo: null
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
           userId: null,
           questionId: null,
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
          userId: null,
          questionId: null,
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
          userId: null,
          questionId: null,
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
            userId: null,
            questionId: null,
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
           userId: null,
           questionId: null,
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
          userId: null,
          questionId: null,
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
          userId: null,
          questionId: null,
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
          userId: null,
          questionId: null,
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
            userId: null,
            questionId: null,
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
        /** 存储TQuestions多个结果*/
        TQuestionsResults:[{
           id: null,
           userName: null,
           title: null,
           content: null,
           tag: null,
           status: null,
           deleteFlag: null,
           blackFlag: null,
           createTime: null,
           updateTime: null
        }]
        ,
        /** 存储TQuestions单个结果*/
        TQuestionsResult:{
          id: null,
          userName: null,
          title: null,
          content: null,
          tag: null,
          status: null,
          deleteFlag: null,
          blackFlag: null,
          createTime: null,
          updateTime: null
        }
        ,
        /** 存储TQuestions插入结果*/
        TQuestionsInsertParam:{
          id: null,
          userName: null,
          title: null,
          content: null,
          tag: null,
          status: null,
          deleteFlag: null,
          blackFlag: null,
          createTime: null,
          updateTime: null
        }
        ,
       /** 存储TQuestions主键更新*/
       TQuestionsUpdateByPrimaryKeyParam:{
         source:{
            userName: null,
            title: null,
            content: null,
            tag: null,
            status: null,
            deleteFlag: null,
            blackFlag: null,
            createTime: null,
            updateTime: null
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
           status: null,
           deleteFlag: null,
           blackFlag: null,
           createTime: null,
           updateTime: null
         }
         ,
         target:{
          id: null,
          userName: null,
          title: null,
          content: null,
          tag: null,
          status: null,
          deleteFlag: null,
          blackFlag: null,
          createTime: null,
          updateTime: null
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
          status: null,
          deleteFlag: null,
          blackFlag: null,
          createTime: null,
          updateTime: null
       }
       ,
       /** 存储TQuestions多条件查询条件(分页，去除分页的num和size)*/
       TQuestionsQueryBasePageHelperParam:{
          id: null,
          userName: null,
          title: null,
          content: null,
          tag: null,
          status: null,
          deleteFlag: null,
          blackFlag: null,
          createTime: null,
          updateTime: null
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
            status: null,
            deleteFlag: null,
            blackFlag: null,
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
    
    },
    created() {
     /** 初始化 */
    },
    methods: {
            /** 处理queryByPrimaryKey */

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
            deleteTUserByPrimaryKey(name,password) {
              let self = this;
              axios.post(deleteTUserByPrimaryKey,  {
                  params: {
                name:name,
                password:password
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
            queryTUserByPrimaryKey(name,password) {
              let self = this;
              axios.get(queryTUserByPrimaryKey, {
                  params: {
                name:name,
                password:password
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


    }
});