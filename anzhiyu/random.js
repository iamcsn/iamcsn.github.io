var posts=["2025/01/14/hello-world/","2025/01/15/第六次/","2025/01/16/2025年.1月.15日-16日笔记/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };