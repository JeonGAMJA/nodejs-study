const path = require('path');

function getPost(req, res) {
  res.render('posts', {
    templateName: 'post',
  });
  //   res.sendFile(
  //     path.join(
  //       __dirname,
  //       '..',
  //       'public',
  //       'images',
  //       '스크린샷 2024-03-26 오전 4.24.52.png',
  //     ),
  //   );
  //   res.send('<div><h1>Post Title</h1><p>This is a post</p>>/div>');
}

module.exports = {
  getPost,
};
