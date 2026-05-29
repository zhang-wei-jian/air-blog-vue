import { defineComponent, ref, toRefs, computed } from 'vue';
import { useRouter } from 'vue-router';
import { formatDate } from '@/utils.js';

export default defineComponent({
  name: 'MyComponent',
  props: {
    dataList: Array
  },
  setup(props) {
    const { dataList } = toRefs(props);
    const currentPage = ref(1);
    const pageSize = 10;

    const total = computed(() => dataList.value.length);
    const totalPages = computed(() => Math.ceil(total.value / pageSize));
    const pagedData = computed(() => {
      const start = (currentPage.value - 1) * pageSize;
      return dataList.value.slice(start, start + pageSize);
    });

    const prevPage = () => {
      if (currentPage.value > 1) currentPage.value--;
    };
    const nextPage = () => {
      if (currentPage.value < totalPages.value) currentPage.value++;
    };
    const goToPage = (page) => {
      currentPage.value = page;
    };

    return () => (
      <>
        <section class="archive">
          <div class="section-content section-tag">
            <div class="archive-header">
              <div class="archive-header-top">
                <h2 class="archive-title">全部文章</h2>
                <span class="archive-total">共 {total.value} 篇</span>
              </div>
              {
                totalPages.value > 1 && (
                  <div class="archive-pagination">
                    <button class="page-btn" disabled={currentPage.value === 1} onClick={prevPage}>
                      ← 上一页
                    </button>
                    <div class="page-numbers">
                      {Array.from({ length: totalPages.value }, (_, i) => i + 1).map((page) => (
                        <button
                          class={{ 'page-btn': true, 'active': page === currentPage.value }}
                          onClick={() => goToPage(page)}
                        >
                          {page}
                        </button>
                      ))}
                    </div>
                    <button class="page-btn" disabled={currentPage.value === totalPages.value} onClick={nextPage}>
                      下一页 →
                    </button>
                  </div>
                )
              }
            </div>
            <div class="archive-list">
              {
                pagedData.value.map((tag, index) => {
                  return (
                    <router-Link
                      to={{ name: "catlogDetail", query: { id: tag.frontmatter.id } }}
                      class="archive-item"
                      style={`animation-delay: ${index * 0.05}s`}
                    >
                      <div class="archive-tag">
                        <div class="archive-tag-left">
                          <span class="tag-index">#{(currentPage.value - 1) * pageSize + index + 1}</span>
                          <h3 class="tag-header">{tag.frontmatter.title}</h3>
                        </div>
                        <div class="archive-tag-right">
                          <span class="tag-date">{formatDate(tag.frontmatter.pubDate)}</span>
                          <span class="tag-arrow">→</span>
                        </div>
                      </div>
                    </router-Link>
                  );
                })
              }
            </div>
          </div>
        </section>
      </>
    )
  }
})
