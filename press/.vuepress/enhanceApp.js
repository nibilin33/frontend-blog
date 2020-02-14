function showComment(router) {
    router.afterEach((to) => {
      let comment = document.getElementById('valine-vuepress-comment');
      if (to.path.indexOf('/guide/comment.html') > -1) {
        comment && (comment.style.display='block');
      } else {
        comment && (comment.style.display='none');
      }
    });

  }
  
  export default ({Vue, options, router}) => {
    try {
      document && showComment(router);
    } catch (e) {
      console.error(e.message)
    }
  }