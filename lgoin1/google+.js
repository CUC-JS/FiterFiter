(function() {
       var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
       po.src = 'https://apis.google.com/js/client:plusone.js';
       var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
     })();
     
     function signinCallback(authResult) {
      if (authResult['access_token']) {
        // 已成功授权
        // 用户已授权，隐藏登录按钮，例如：
        document.getElementById('signinButton').setAttribute('style', 'display: none');
      } else if (authResult['error']) {
        // 存在错误。
        // 可能的错误代码：
        //   “access_denied” - 用户拒绝访问您的应用
        //   “immediate_failed”- 无法自动登录用户帐户
        // console.log('存在错误：' + authResult['error']);
      }
}