# EmialAddress-auto-add
邮箱地址自动提示
## 自动匹配技术
根据用户输入当然信息来提示一些相似项供用户选择。具有很广泛的应用，比如我们最常用的百度，当输入一些搜索内容后会自动匹配很多相关信息；再比如我们最常用的输入法，都是使用这些技术。
## 用到的正则表达式
(1)keyword = keyword.match(/@/w*[\.]?\w*/); 只获取@后面的内容，包括@    
(2)var matchs = mailBoxs.match(new RgeExp(keyword + "[^ ]*", "gm"));进行匹配，吧mailBoxs中的keyword匹配的存入matchs中，[^ ]*指遇到空格不匹配，参数"gm"中'g'只进行全局匹配，'m'之对行匹配。     
(3)matchs = matchs.join("").replace(/ $/, "").split(" ");字符串的结尾用空格匹配，$表示字符串的结尾。     
在两个匿名函数中，e是在鼠标点击事件发生时系统自读生成的，e.target是获得鼠标所点的当前对象。


