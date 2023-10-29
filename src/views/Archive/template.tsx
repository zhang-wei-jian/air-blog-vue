import { defineComponent, ref, toRefs } from 'vue';

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

    const tags = ref(['Tag 1', 'Tag 2', 'Tag 3']);
    return () => (


      <>
        <section class="archive">
          <div class="section-content section-tag">
            {
              tags.value.map((tag, index) => {
                return (
                  <div class="archive-tag">
                    <h2 class="tag-header">{tag}</h2>
                    <div class="tag-post-list">{posts.value[index].length !== 0 ? <ArchivePostList posts={posts.value[index]} /> : <div class="no-posts">暂无文章</div>}</div>
                  </div>
                );
              })
            }
          </div>
        </section>
      </>





    )
  }
})
