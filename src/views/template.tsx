import { defineComponent, ref, toRefs, onMounted, } from 'vue';
import Title from "./Title/index.vue";
import MoreTile from "./MoreTile/index.vue";
// import "/static/js/animation.js"
export default defineComponent({
  name: 'Home',
  props: ["dataList", "allPosts"],
  setup(props) {



    // console.log(props, "propspropsprops");


    const { dataList, allPosts } = toRefs(props);
    // const dataList = ref(props.dataList);
    // console.log(props.dataList, "aaa");

    onMounted(() => {
      // import("/static/js/animation.js")
    })

    // when layout is loaded, load the images
    function getRandomNumber(min, max) {
      // 通过 Math.random() 生成一个 0 到 1 之间的随机小数
      // 将其乘以 (max - min) 得到一个在范围内的随机数
      // 再加上 min 得到最终的随机数
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // const allPosts = ref([1, 2, 3, 4, 5, 6, 7, 213, 2, 14, 1, 43, 2, 213, 21, 3, 213, 21, 4, 43, 24, 32, 2].map((item, index) => {
    //   const sectionItem = {
    //     frontmatter: {
    //       title: 'Golang net/http & HTTP Serve 源码分析',
    //       pubDate: '2035-06-01',
    //       description: '很多Go web框架都通过封装 net/http 来实现核心功能，因此学习 net/http 是研究 Gin等框架的基础。',
    //       author: '作者是我',
    //       tags: ["源码", "标准库", "golang", "gin"],
    //       theme: 'light',
    //       featured: true,
    //       cover: {
    //         url: 'https://pic.lookcos.cn/i/usr/uploads/2022/04/2067928922.png',
    //         square: '',
    //         alt: 'cover'
    //       },
    //     }
    //   }

    //   const resRandom = getRandomNumber(1, 2)

    //   if (resRandom == 0) {
    //     sectionItem.frontmatter.cover.url = "https://www.apple.com.cn/newsroom/images/product/homepod/standard/Apple-HomePod-hero-230118_big.jpg.large_2x.jpg"

    //   } else if (resRandom == 1) {
    //     sectionItem.frontmatter.cover.url = "https://cdn.seovx.com/ha/?mom=302&timestamp=" + index


    //   } else if (resRandom == 2) {
    //     sectionItem.frontmatter.cover.url = "https://cdn.seovx.com/?mom=302&timestamp=" + index
    //   }


    //   return sectionItem

    // }));

    // allPosts.value.sort((a, b) => Date.parse(b.frontmatter.pubDate) - Date.parse(a.frontmatter.pubDate));
    // console.log(allPosts.value);

    // allPosts.value = dataList.value;


    const click = () => {
      // const { dataList } = props
      console.log();

      console.log("click", dataList, dataList);
    }
    return () => (


      <>





        <section class="everydayfeed">
          <div class="section-content">
            <h2 class="section-head">最新文章    </h2>
            {/* <h1 onClick={click}></h1> */}
            <ul role="list" class="section-tiles">
              {
                allPosts.value.slice(0, 1).map((post) => {
                  return (
                    <Title
                      title={post.frontmatter.title}
                      href={"/1"}
                      date={post.frontmatter.pubDate}
                      tags={post.frontmatter.tags}
                      cover={post.frontmatter.cover.url}
                      level="1"
                      id={post.frontmatter.id}
                      key={post.frontmatter.id}
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
                      id={post.frontmatter.id}
                      key={post.frontmatter.id}
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
                      id={post.frontmatter.id}
                      key={post.frontmatter.id}
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
                      id={post.frontmatter.id}
                      key={post.frontmatter.id}
                    />
                  );
                })
              }
            </ul>
            <div class="view-archive-wrapper">
              {/* <a href="/archive" class="cta-primary-light" data-analytics-region="router" data-analytics-title="view archive">阅读历史文章</a> */}
              <router-Link to="/archive" class="cta-primary-light" data-analytics-region="router" data-analytics-title="view archive">阅读历史文章</router-Link>
            </div>
          </div>
        </section>

      </>
    )
  }
});
