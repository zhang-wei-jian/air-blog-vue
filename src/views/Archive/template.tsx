import { defineComponent, ref, toRefs } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'MyComponent',
  props: {
    msg: String
  },
  setup(aa, { attrs }) {
    const posts = ref([
      // 每个数组元素代表一个帖子，你可以根据实际需要修改帖子内容
      ['Post 1', 'Post 2'],
      ['Post 3'],
      ['Post 4', 'Post 5', 'Post 6'],
    ]);

    let postsArr = []

    postsArr = JSON.parse(sessionStorage.getItem("posts"))
    if (!postsArr) {
      // const router = useRouter();
      // router.push({ name: 'home' });
    }
    console.log(postsArr);

    const tags = ref(postsArr);
    return () => (


      <>
        <section class="archive">
          <div class="section-content section-tag">
            {
              tags.value.map((tag, index) => {
                return (


                  <router-Link
                    to={{ name: "catlogDetail", query: { id: tag.frontmatter.id } }}

                  >



                    <div class="archive-tag">
                      <h3 class="tag-header">{tag.frontmatter.title}</h3>
                      {/* <div class="tag-post-list">{posts.value[index].length !== 0 ? <ArchivePostList posts={posts.value[index]} /> : <div class="no-posts">暂无文章</div>}</div> */}


                    </div>
                  </router-Link>


                );
              })
            }
          </div>
        </section>
      </>





    )
  }
})
