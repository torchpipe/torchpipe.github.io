/**
 * 例子
 * name: 名称
 * avatar：链接，也可通过 "github:用户名" 使用 GitHub 头像
 * description：描述
 * Url： 链接，可选
 * blogUrl：博客链接或其他媒体链接，可选
 */
const members: Member[] = [
    {
      name: 'resnet18',
      avatar: '',
      description: '解码+resnet18',
      Url: 'https://github.com/torchpipe/torchpipe/tree/v0/examples/resnet18',
      blogUrl: '',
    },
  ]
  .map(it => ({
    ...it,
    avatar: it.avatar
  }));
  
  function handleAvatar(avatar: string) {
    var match = /^github\:(.+)$/.exec(avatar);
    if (match) return "https://avatars.githubusercontent.com/" + match[1] + "?s=256";
    return avatar;
  }
  
  export default members;