$(document).ready(function() {
jQuery.fn.dataTableExt.oSort['formatted-num-asc'] = function(x,y) {
    /* 正規表現で数値と小数点以外は削除する */
    x = x.replace(/[^\d\-\.\/]/g, '');
    y = y.replace(/[^\d\-\.\/]/g, '');
    /* 文字列が分数の場合は除算してソートできるようにする */
    if(x.indexOf('/') >= 0) x = eval(x);
    if(y.indexOf('/') >= 0) y = eval(y);
    return x/1 - y/1;
}
jQuery.fn.dataTableExt.oSort['formatted-num-desc'] = function(x,y) {
    /* 正規表現で数値と小数点以外は削除する */
    x = x.replace(/[^\d\-\.\/]/g, '');
    y = y.replace(/[^\d\-\.\/]/g, '');
    /* 文字列が分数の場合は除算してソートできるようにする */
    if(x.indexOf('/') >= 0) x = eval(x);
    if(y.indexOf('/') >= 0) y = eval(y);
    return y/1 - x/1;
}
});
