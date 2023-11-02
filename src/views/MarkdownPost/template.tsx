import { defineComponent, ref, toRefs, onMounted } from 'vue';


import txt from "./json";
// import "/static/js/initPost.js"
import MarkdownIt from 'markdown-it';
import md5 from 'md5';
import { visit } from 'unist-util-visit'
import { unified } from 'unified'


import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';




export default defineComponent({
  name: 'MarkdownPost',
  props: {

  },
  setup(pp, { attrs }) {


    onMounted(async () => {
      // const module = await import('/static/js/initPost.js');
      var script = document.createElement("script");
      script.src = "/static/js/initPost.js";
      document.head.appendChild(script);

    })

    let md = new MarkdownIt();
    let mdTxtHtml = md.render(txt);



    // markdown转html再次处理插件
    function pipeline() {
      return [

        () => (tree) => {
          visit(tree, 'element', (node, index) => {
            if (node.tagName === 'p' && node.children[0].tagName === 'img') {
              node.tagName = 'figure';

              let img = node.children[0];
              let sign = md5(img.properties.src);
              let data = img.properties.alt.split("|");
              let alt = data[0];
              let size = "big";
              if (data.length > 1) {
                size = data[1];
              }

              let classes = ['image component image-fullbleed body-copy-wide nr-scroll-animation nr-scroll-animation--on'];
              classes.push(`image-${size}`);

              node.properties.className = classes;
              node.children = [
                {
                  type: 'element',
                  tagName: 'div',
                  properties: { className: ['component-content'] },
                  children: [
                    {
                      type: 'element',
                      tagName: 'div',
                      properties: { className: ['image-sharesheet'] },
                      children: [
                        {
                          type: 'element',
                          tagName: 'div',
                          properties: { className: [`image image-load image-asset image-${sign}`], id: `lht${sign}` },
                          children: [
                            {
                              type: 'element',
                              tagName: 'picture',
                              properties: { className: ['picture'] },
                              children: [
                                {
                                  type: 'element',
                                  tagName: 'img',
                                  properties: {
                                    'data-src': img.properties.src,
                                    alt: alt,
                                    className: ['picture-image'],
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: 'element',
                      tagName: 'div',
                      properties: { className: ['image-description'] },
                      children: [
                        {
                          type: 'element',
                          tagName: 'div',
                          properties: { className: ['image-caption'] },
                          children: [
                            {
                              type: 'text',
                              value: alt
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          })
        },

        () => (tree) => {
          tree.children.forEach((node) => {
            if (node.type === "raw") {
              node.value = `<div class="pagebody code component"><div class="component-content code"> ${node.value} </div></div>`
              // node.value = node.value.replace(/astro-code/g, 'astro-code')
            }
          });
        },


        () => (tree) => {
          for (let i = 0; i < tree.children.length; i++) {
            let node = tree.children[i];
            if (node.type === "element" && ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', "ul", "ol", "blockquote"].includes(node.tagName)) {

              let next = tree.children[i + 1];
              let nodes = [node];
              while (next && !['figure'].includes(next.tagName) && next.type != "raw") {

                nodes.push(next);
                next = tree.children[tree.children.indexOf(next) + 1];
              }

              if (nodes.length > 1) {
                // rename label
                nodes.forEach((node) => {
                  if (node.tagName === "p") {
                    node.properties.className = ['pagebody-copy'];
                    node.tagName = "div";
                  }
                  if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(node.tagName)) {
                    node.properties.className = ['pagebody-header'];
                  }
                });

                tree.children.splice(i, nodes.length, {
                  type: 'element',
                  tagName: 'div',
                  properties: { className: ['pagebody  text component'] },
                  children: [
                    {
                      type: 'element',
                      tagName: 'div',
                      properties: { className: ['component-content'] },
                      children: nodes
                    }
                  ]
                });

              }
            }
          }
        },
        () => (tree) => {
          let len = tree.children.length;
          for (let index = 0; index < len; index++) {
            let node = tree.children[index];
            if (node.type === "element" && node.tagName === "figure") {
              tree.children.splice(index, 0, {
                type: 'element',
                tagName: 'div',
                properties: { className: ['tertiarynav component'] },
                children: [{
                  type: 'element',
                  tagName: 'div',
                  properties: { className: ['component-content'] },
                }]
              })
              index++;
            }
          }
        }
      ]
    }

    const convertMarkdownToHtml = () => {

      unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(pipeline())  // 这里调用你的函数作为插件

        .use(rehypeStringify)
        .process(txt, (err, file) => {
          if (err) throw err;
          mdTxtHtml = String(file)
          console.log(String(file));

        });
    }

    convertMarkdownToHtml()











    var props = {

      frontmatter: {
        title: 'Golang net/http & HTTP Serve 源码分析',
        pubDate: '2035-06-01',
        description: '很多Go web框架都通过封装 net/http 来实现核心功能，因此学习 net/http 是研究 Gin等框架的基础。',
        author: '作者是我',
        tags: ["源码", "标准库", "golang", "gin"],
        theme: 'light',
        featured: true,
        cover: {
          url: 'https://pic.lookcos.cn/i/usr/uploads/2022/04/2067928922.png',
          square: 'https://pic.lookcos.cn/i/usr/uploads/2022/04/2067928922.png',
          alt: 'cover'
        },

      }
    }

    const { frontmatter } = props
    const type = frontmatter.tags[0]
    const { pubDate, title, description, featured } = frontmatter
    const dateFormated = '时间叫回来我们很多东西'
    const SITE_LANG = "zh-CN";

    return () => (


      <>



        <main id="main" class="main">
          <section>
            <article class="article">
              <div class={{ "featured-header": featured, "article-header": !featured }}>
                <div class="category component">
                  <div class="component-content">
                    <div class="category-eyebrow">
                      <span class="category-eyebrow__category category_original">{type}</span>
                      <span class="category-eyebrow__date">{dateFormated}</span>
                    </div>
                  </div>
                </div>
                <div class="pagetitle component">
                  <div class="component-content">
                    <h1 class="hero-headline">{title}</h1>
                  </div>
                </div>
                <div class={{ "featured-subhead": featured, "article-subhead": !featured, "component": true }}>
                  <div class="component-content">{description}</div>
                </div>

                <div class={["tagssheet component"]}>
                  <div class="component-content">
                    {
                      frontmatter.tags.map((tag) => {
                        return (
                          <a href={`/tags/${tag}`} class="tag">
                            {tag}
                          </a>
                        );
                      })
                    }
                  </div>
                </div>
              </div>
              {/* <slot /> */}
              <div v-html={mdTxtHtml}> </div>
              <div class="component">
                <div class="component-content">
                  <div class="article-copyright">
                    <a class="content" href="https://creativecommons.org/licenses/by-nc-nd/3.0/deed.zh" target="_blank"
                    >版权声明：自由转载-非商用-非衍生-保持署名（创意共享3.0许可证）</a
                    >
                    <p class="content">作者： {frontmatter.author} 发表日期：{dateFormated}</p>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </main >








      </>



    )
  }
})
