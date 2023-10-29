import { defineComponent, ref } from 'vue';
// import { formatDate } from "../utils";
export default defineComponent({
  name: 'TemplateComponent',
  props: {
    msg: String,
    // cover: String,
  },
  setup(props, { attrs }) {
    // console.log(props, attrs, "attrs");
    const { title, href, cover, tags, date } = attrs;


    const dateFormated = '2035 年 6 月 1 日';
    // const dateFormated = formatDate(date);
    // let type = tags[0];
    let type = 'type'
    // const label = `${title} - ${type} - 发表时间 ${dateFormated}`;
    const label = `- 发表时间 `;

    return () => (
      <li
        role="listitem"
        class="tile-item item-list nr-scroll-animation"
        style="--nr-animation-transform-y:20%;"
      >
        <a
          href={href}
          class="tile tile-list medium-load small-load large-load"
          aria-label={label}
        >
          <div class="tile__media" aria-hidden="true">
            {/* <img class="cover image" v-lazy={cover} alt="lt" /> */}
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
    )
  }
})
