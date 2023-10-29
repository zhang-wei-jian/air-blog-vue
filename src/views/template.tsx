import { defineComponent, ref } from 'vue';
import Title from "./Title/index.vue";
import MoreTile from "./MoreTile/index.vue";
import "/static/js/animation.js"
export default defineComponent({
  name: 'MyComponent',
  // props: {
  //   msg: String
  // },
  setup(props) {




    // when layout is loaded, load the images


    const allPosts = ref([1, 2, 3, 4, 5, 6].map((item, index) => {
      if (index == 0) {

        return {
          // frontmatter 是一个对象，里面通常包含文章的各种元数据
          frontmatter: {
            // title，表示文章的标题
            title: "Apple 推出新款 HomePod，带来突破性音质与智能体验 ",
            // pubDate，表示文章的发布日期
            pubDate: "2022-12-08T14:30:00",
            // tags，表示与文章关联的标签数组
            tags: ["A分类", "B分类"],
            // cover 是一个对象，里面包含了文章封面图片的各种信息
            cover: {
              // url，表示封面图片的链接地址
              url: "https://www.apple.com.cn/newsroom/images/product/homepod/standard/Apple-HomePod-hero-230118_big.jpg.large_2x.jpg",
              // square，表示封面图片的方形版本链接地址。这是可选参数，可能并不存在
              square: "",
              alt: 'cover'//
            }
          },
          // url，表示指向这篇文章的链接地址
          url: "",
          author: 'Austin',//
          description: 'des',//
          theme: 'light',//
          featured: false//
        }
      } else {
        return {
          frontmatter: {
            title: "Apple 推出新款 HomePod，带来突破性音质与智能体验 ",
            pubDate: "2022-01-01",
            tags: ["Vue", "react"],
            cover: {
              url: "https://cdn2.unrealengine.com/unreal-engine-5-1-features-for-fortnite-chapter-4-header-1920x1080-2e96869442d6.jpg?resize=1&w=1920.jpg",
              square: "",
            }
          },
          url: "",
        }
      }
    }));

    // allPosts.value.sort((a, b) => Date.parse(b.frontmatter.pubDate) - Date.parse(a.frontmatter.pubDate));
    console.log(allPosts.value);

    return () => (


      <>





        <section class="everydayfeed">
          <div class="section-content">
            <h2 class="section-head">最新文章</h2>
            <ul role="list" class="section-tiles">
              {
                allPosts.value.slice(0, 1).map((post) => {
                  return (
                    <Title
                      title={post.frontmatter.title}
                      href={post.url}
                      date={post.frontmatter.pubDate}
                      tags={post.frontmatter.tags}
                      cover={post.frontmatter.cover.url}
                      level="1"
                    />
                  );
                })
              }

              {
                allPosts.value.slice(1, 5).map((post) => {
                  return (
                    <Title
                      title={post.frontmatter.title}
                      href={post.url}
                      date={post.frontmatter.pubDate}
                      tags={post.frontmatter.tags}
                      cover={post.frontmatter.cover.url}
                      level="2"
                    />
                  );
                })
              }

              {
                allPosts.value.slice(5, 11).map((post) => {
                  return (
                    <Title
                      title={post.frontmatter.title}
                      href={post.url}
                      date={post.frontmatter.pubDate}
                      tags={post.frontmatter.tags}
                      cover={post.frontmatter.cover.url}
                      level="3"
                    />
                  );
                })
              }
            </ul>
          </div>
        </section>

        <section class="more-from-newsroom">
          <div class="section-content">
            <h2 class="section-head">更多文章</h2>
            <ul role="list" class="section-tiles">
              {
                allPosts.value.slice(0, 6).map((post) => {
                  return (
                    <MoreTile
                      title={post.frontmatter.title}
                      href={post.url} date={post.frontmatter.pubDate}
                      tags={post.frontmatter.tags}
                      cover={post.frontmatter.cover.square !== "" ? post.frontmatter.cover.square : post.frontmatter.cover.url}
                    />
                  );
                })
              }
            </ul>
            <div class="view-archive-wrapper">
              <a href="/archive" class="cta-primary-light" data-analytics-region="router" data-analytics-title="view archive">阅读历史文章</a>
            </div>
          </div>
        </section>

      </>
    )
  }
});
