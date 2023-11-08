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



    const dateFormated = '日记越类';
    const { level, href, cover, tags, title, } = attrs;
    const type = tags[0];
    const label = `${title} - ${type} - 发表时间 ${dateFormated}`;


    // title, href, cover, tags, date, level
    // title={post.frontmatter.title}
    // href={post.url}
    // date={post.frontmatter.pubDate}
    // tags={post.frontmatter.tags}
    // cover={post.frontmatter.cover.url}
    // level="2"
    // console.log(attrs, "attrsattrsattrsattrsattrs");

    return () => (

      <li
        role="listitem"
        class={["tile-item", "nr-scroll-animation", { "item-hero": level === "1", "item-2up": level === "2", "item-3up": level === "3" }]}
        style="--nr-animation-transform-y:20%;"
      >
        <a
          href={href}
          class={["tile", "large-load", "medium-load", "small-load", { "tile-hero": level === "1", "tile-2up": level === "2", "tile-3up": level === "3" }]}
          aria-label={label}
        >
          <div class="tile__media" aria-hidden="true">
            <img class="cover image" src={cover} alt="lt" />
          </div>

          <div class="tile__description" aria-hidden="true">
            <div class="tile__head">
              <div class="tile__category">{type}</div>
              <div class="tile__headline">{title}</div>
            </div>
            <div class="tile__timestamp icon-hide icon icon-before icon-clock">{dateFormated}</div>
          </div>
        </a>
      </li>





      // <li
      //   role="listitem"
      //   class={["tile-item", "nr-scroll-animation", { "item-hero": level.value === "1", "item-2up": level.value === "2", "item-3up": level.value === "3" }]}
      //   style="--nr-animation-transform-y:20%;"
      // >
      //   <a
      //     href={href.value}
      //     class={["tile", "large-load", "medium-load", "small-load", { "tile-hero": level.value === "1", "tile-2up": level.value === "2", "tile-3up": level.value === "3" }]}
      //     aria-label={label.value}
      //   >
      //     <div class="tile__media" aria-hidden="true">
      //       <img class="cover image" src={cover.value} alt="lt" />
      //     </div>

      //     <div class="tile__description" aria-hidden="true">
      //       <div class="tile__head">
      //         <div class="tile__category">{type.value}</div>
      //         <div class="tile__headline">{title.value}</div>
      //       </div>
      //       <div class="tile__timestamp icon-hide icon icon-before icon-clock">{dateFormated.value}</div>
      //     </div>
      //   </a>
      // </li>
    )
  }
})
