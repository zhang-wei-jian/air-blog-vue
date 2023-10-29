import { defineComponent, ref, toRefs } from 'vue';
import "/static/js/test"

import txt from "./json";
import "/static/js/initPost.js"
import MarkdownIt from 'markdown-it';




// import { remarkParse } from 'remark-parse'
// import { rehypeStringify } from 'rehype-stringify'
import { visit } from 'unist-util-visit'
import { unified } from 'unified'




// import unified from 'unified';
import markdownParse from 'remark-parse';
import htmlStringify from 'rehype-stringify';
// import visit from 'unist-util-visit';
// 或者你可以根据你的 pipeline 打包设置导入你自己的处理函数


// import { visit } from 'unist-util-visit'










export default defineComponent({
  name: 'MyComponent',
  props: {
    msg: String
  },
  setup(pp, { attrs }) {
    let md = new MarkdownIt();
    let mdTxtHtml = md.render(txt);



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
      unified().use(markdownParse).use(pipeline).use(htmlStringify).process(txt, (err, file) => {
        if (err) throw err;
        mdTxtHtml = String(file);
      });
    }


















    var props = {

      frontmatter: {
        title: 'Golang net/http & HTTP Serve 源码分析',
        pubDate: '2035-06-01',
        description: '很多Go web框架都通过封装 net/http 来实现核心功能，因此学习 net/http 是研究 Gin等框架的基础。',
        author: 'Austin',
        cover: {
          url: 'https://pic.lookcos.cn/i/usr/uploads/2022/04/2067928922.png',
          square: 'https://pic.lookcos.cn/i/usr/uploads/2022/04/2067928922.png',
          alt: 'cover'
        },
        tags: ["源码研究", "标准库", "golang", "gin"],
        theme: 'light',
        featured: false
      }
    }

    const { frontmatter } = props
    const type = frontmatter.tags[0]
    const { pubDate, title, description, featured } = frontmatter
    const dateFormated = 'a1'
    const SITE_LANG = "zh-CN";

    return () => (


      <>

        <body class: list={["page-article", { "theme-dark": frontmatter.theme === "dark" }]}>
          <Header />
          <main id="main" class="main">
            <section>
              <article class="article">
                <div class: list={[{ "featured-header": featured, "article-header": !featured }]}>
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
                  <div class: list={[{ "featured-subhead": featured, "article-subhead": !featured }, "component"]}>
                    <div class="component-content">{description}</div>
                  </div>

                  <div class: list={["tagssheet component"]}>
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
          </main>




        </body>



      </>



    )
  }
})
