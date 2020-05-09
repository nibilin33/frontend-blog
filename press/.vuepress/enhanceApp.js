import {update} from './db';
function showComment(router) {
    router.afterEach(async (to) => {
      console.log(to.path);
      let comment = document.getElementById('valine-vuepress-comment');
      if (to.path.indexOf('/guide/comment.html') > -1) {
        comment && (comment.style.display='block');
      } else {
        comment && (comment.style.display='none');
      }
      await update(router);
    });

  }
  export default async ({Vue, options, router}) => {
    try {
      document && showComment(router);
    } catch (e) {
      console.error(e.message)
    }
  }