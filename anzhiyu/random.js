var posts=["2025/01/14/hello-world/","2025/01/15/第六次/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };