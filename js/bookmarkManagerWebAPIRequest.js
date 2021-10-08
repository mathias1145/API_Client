/*
    Méthodes d'accès aux services Web API BookmarksManager
 */

    //const apiBaseUrl="";
const apiBaseURL= "http://localhost:5000/api/bookmarks";

function webAPI_getBookmarks( successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL,
        type: 'GET',
        contentType:'text/plain',
        data:{},
        success: bookmarks => {  successCallBack(bookmarks);
                                console.log("webAPI_getBookmarks - success");},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_getBookmarks - error");
        }
    });
}

function webAPI_getBookmark( id, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL + "/" + id,
        type: 'GET',
        contentType:'text/plain',
        data:{},
        success: bookmark => { successCallBack(bookmark); console.log("webAPI_getBookmark - success");},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_getBookmark - error");
        }
    });
}

function webAPI_getSortedBookmarks( sortKey, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL + "?sort=" + sortKey,
        type: 'GET',
        contentType:'text/plain',
        data:{},
        success: bookmark => { successCallBack(bookmark); console.log("webAPI_getSortBookmark - success");},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_getSortBookmark - error");
        }
    });
}

function webApi_getSearchBookmarks( searchData ,searchKey, successCallBack, errorCallback){
    $.ajax({
        url: apiBaseURL + "?" + searchData + "=" + searchKey,
        type: 'GET',
        contentType:'text/plain',
        data:{},
        success: bookmark => { successCallBack(bookmark); console.log("webAPI_getSearchNameBookmark - success");},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_getSearchNameBookmark - error");
        }
    });
}

function webApi_getAllSearchBookmarks( searchName ,searchCategory, successCallBack, errorCallback){
    $.ajax({
        url: apiBaseURL + "?name=" + searchName + "&category=" + searchCategory,
        type: 'GET',
        contentType:'text/plain',
        data:{},
        success: bookmark => { successCallBack(bookmark); console.log("webAPI_getAllSearchNameBookmark - success");},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_getAllSearchNameBookmark - error");
        }
    });
}

function webAPI_addBookmark( bookmark, successCallBack, errorCallBack) {
    console.log('add', bookmark)
    $.ajax({
        url: apiBaseURL,
        type: 'POST',
        contentType:'application/json',
        data: JSON.stringify(bookmark),
        success: () => {successCallBack();  console.log("webAPI_addBookmark - success");},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_addBookmark - error");
        }
    });
}

function webAPI_modifyBookmark( bookmark, successCallBack, errorCallBack) {
    console.log('modify', bookmark)
    $.ajax({
        url: apiBaseURL + "/" + bookmark.Id,
        type: 'PUT',
        contentType:'application/json',
        data: JSON.stringify(bookmark),
        success:() => {successCallBack();  console.log("webAPI_modifyBookmark - success");},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_modifyBookmark - error");
        }
    });
}

function webAPI_deleteBookmark( id, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL+"/" + id,
        contentType:'text/plain',
        type: 'DELETE',
        success:() => {successCallBack();  console.log("webAPI_deleteBookmark - success");},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_deleteBookmark - error");
        }
    });
}
