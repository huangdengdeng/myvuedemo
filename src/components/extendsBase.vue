<script>
import baseC from './base'
export default {
  extends: baseC,
  data () {
    return {
      a: '6'
    }
  },
  created () {
    console.log(this.a)
  },
  methods: {}
}
</script>
