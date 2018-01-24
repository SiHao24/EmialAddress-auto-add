//mailBoxs里存储用来匹配的串
var mailBoxs = "@163.com @126.com @129.com"
mailBoxs += " @qq.com @vip.qq.com @foxmail.com @live.cn @hotmail.com @sina.com @sina.cn @vip.sina.com";
var matchmail = document.getElementById("match_email");
var email = document.getElementById("email");
function match_mail(keyword) {
    matchmail.innerHTML = "";
    matchmail.style.display = "none";
    if (!keyword)
        return;
    if (!keyword.match(/^[\w\.\-]+@\w*[\.]?\w*/))
        return;
    keyword = keyword.match(/@\w*[\.]?\w*/);
    var matchs = mailBoxs.match(new RegExp(keyword + "[^ ]* ", "gm"));
    if (matchs) {
        matchs = matchs.join("").replace(/ $/, "").split(" ");
        matchmail.style.display = "block";
        for (var i = 0; i < matchs.length; i++) {
            matchmail.innerHTML += '<div>' + matchs[i] + '</div>';
        }
    }
}
//点击除了匹配框之外的任何地方，匹配框消失
document.onclick = function (e) {
    var target = e.target;
    if (target.id != "matchmail")
        matchmail.style.display = "none";
}
//将匹配框上鼠标所点的字符放入输入框
matchmail.onclick = function (e) {
    var target = e.target;
    email.value = email.value.replace(/@.*/, target.innerHTML);
}