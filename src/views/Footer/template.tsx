import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MyComponent',
  props: {
    msg: String
  },
  setup(props, {  }) {
    const attrs = {
      level: '高级',
      href: 'https://the.top',
      cover: 'cover.png',
      tags: ['标签1', '标签2'],
      title: '文章标题',
    };

    const dateFormated = '日记越类';
    const { level, href, cover, tags, title } = attrs;
    const type = tags[0];
    const label = `${title} - ${type} - 发表时间 ${dateFormated}`;

    console.log(attrs, "attrsattrsattrsattrsattrs");

    const SITE_TITLE = 'My Website';
    const SITE_EMAIL = 'mywebsite@example.com';
    const SITE_NAME = 'My Website';
    const year = new Date().getFullYear();

    const theme = "dark"; // 定义theme变量

    return () => (
     
<div class:list={["footer-main", { "footer-dark": theme === "dark" }]}>
  <div class="content-body footer-wraper">
    <div class="footer-box">
      <div class="foot-nav">
        <div class="foot-nav-items">
          <div class="item">
            <div class="logo">{SITE_TITLE}</div>
            <div class="email">Email: {SITE_EMAIL}</div>
          </div>

          <div class="item products">
            <div class="item-title">作品</div>
            <a href="/" target="_blank">本站博客</a>
            <a href="https://the.top" target="_blank">TOP Link</a> 
          </div>

          <div class="item community">
            <div class="item-title">社媒</div>
            <a href="https://twitter.com/austinit" target="_blank">Twitter</a>
            <a href="https://github.com/austin2035" target="_blank">Github</a>
            <a href="https://t.me/austin2035" target="_blank">Telegram</a>
          </div>
          
          <div class="item resources">
            <div class="item-title">友链</div>
            <a href="https://the.top" target="_blank">THE.TOP</a>
            <a href="https://yufengbiji.com" target="_blank">驭风笔记</a>
          </div>

        </div>
      </div>
      <div class="bottom">
        <div class="copyright">
          &copy; {`${year} ${SITE_NAME}`} 
          <a href="//github.com/austin2035/astro-air-blog">Astro-air-blog</a>
        </div>
      </div>
    </div>
  </div>
</div>

    )
  }
})
