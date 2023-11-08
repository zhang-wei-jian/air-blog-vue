import { defineComponent, ref, toRefs } from 'vue';

export default defineComponent({
  name: 'MyComponent',
  props: {
    msg: String
  },
  setup(props, { attrs }) {
    // const level = ref('1') // 假设level为1
    // const href = ref('#')  // 假设href为'#'
    // const label = ref('This is a label') // 假设label为'This is a label'
    // const cover = ref('https://cdn2.unrealengine.com/unreal-engine-5-1-features-for-fortnite-chapter-4-header-1920x1080-2e96869442d6.jpg?resize=1&w=1920.jpg') // 假设cover为'cover.jpg'
    // const type = ref('Song') // 假设type为'Song'
    // const title = ref('Apple 推出新款 HomePod，带来突破性音质与智能体验') // 假设title为'This is a title'
    // const dateFormated = ref('2022-01-01') // 假设dateFormated为'2022-01-01'


    // tags={post.frontmatter.tags}
    // cover={post.frontmatter.cover.url}
    // level="2"
    // console.log(attrs, "attrsattrsattrsattrsattrs");

    return () => (


      <>
        <section class="archive">
          <div class="section-content section-tag">
            <div class="archive-tag">
              <h2 class="tag-header">关于我</h2>
              <div class="tag-post-list">
                <ul>
                  <li>嫩爹</li>
                  <li>😌</li>
                  <li>music</li>
                </ul>
              </div>
            </div>

            <div class="archive-tag">
              <h2 class="tag-header">关注我</h2>
              <div class="tag-post-list">
                <ul>
                  <li>
                    <a href="https://twitter.com/spacex" target="_blank"> Twitter</a>
                  </li>
                  <li>
                    <a href="https://github.com/zhang-wei-jian" target="_blank">Github</a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </section>
      </>





    )
  }
})
