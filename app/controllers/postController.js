const posts = [
  {
    title: 'javascript权威指南',
    description: '这是一本好书'
  },
  {
    title: 'css蝉翼花园',
    description: '这是一本不错的书'
  }
];

exports.list =  async function(ctx) {
  await ctx.render('index', { posts: posts, title: '首页' });
}

exports.add =  async function (ctx) {
  await ctx.render('new');
}

/**
 * Show post :id.
 */

exports.show = async function (ctx) {
  const id = ctx.params.id;
  const post = posts[id];
  if (!post) ctx.throw(404, 'invalid post id');
  await ctx.render('show', { post: post });
}

/**
 * Create a post.
 */

exports.create = async function(ctx) {
  const post = ctx.request.body;
  const id = posts.push(post) - 1;
  post.created_at = new Date();
  post.id = id;
  ctx.redirect('/');
}