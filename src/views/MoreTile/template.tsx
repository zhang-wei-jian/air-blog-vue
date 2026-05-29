import { defineComponent, ref } from 'vue';
import { formatDate } from '@/utils.js';

export default defineComponent({
  name: 'TemplateComponent',
  props: {
    msg: String,
  },
  setup(props, { attrs }) {
    const { title, href, cover, tags, date, id } = attrs;

    const dateFormated = formatDate(date);
    let type = tags[0];
    const label = `${title} - ${type} - 发表时间 ${dateFormated}`;

    // console.log(cover, "cover");


    return () => (
      <li
        role="listitem"
        class="tile-item item-list nr-scroll-animation"
        style="--nr-animation-transform-y:20%;"
      >
        <router-Link
          // to={'/detail'}
          to={{ name: "catlogDetail", query: { id } }}
          class="tile tile-list medium-load small-load large-load"
          aria-label={label}
        >
          <div class="tile__media" aria-hidden="true">
            {/* <img class="cover image" v-lazy={cover} alt="lt" /> */}
            <img class="cover image" src={cover} alt="lt" />
            {/* <p>{cover}</p> */}
            {/* <img class="cover image" src={cover} alt="lt" /> */}
            <p> {cover}</p>
          </div>
          <div class="tile__description" aria-hidden="true">
            <div class="tile__head">
              <div class="tile__category">{type}</div>
              <div class="tile__headline">{title}</div>

            </div>
            <div class="tile__timestamp icon-hide icon icon-before icon-clock">{dateFormated}</div>
          </div>
        </router-Link>
      </li>
    )
  }
})
