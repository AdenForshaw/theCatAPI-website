// src/components/ExBtn.js
import { VBtn } from 'vuetify/lib'
export default {
  extends: VBtn,
  name: 'ExBtn',
  props: {
    gacategory: {
      type: String,
      default: 'Button'
    },
    galabel: {
      type: String,
      default: 'Event label'
    },
    gavalue: {
      type: [String, Number],
      default: ''
    }
  },
  methods: {
    click (e) {
      !this.retainFocusOnClick && !this.fab && e.detail && this.$el.blur()
      // our new method is added before the basic 'click' event is emitted in the app
      this.trackEvent({ category: this.gacategory, label: this.galabel, value: this.gavalue })
      this.$emit('click', e)
      this.btnToggle && this.toggle()
    },
    // trackEvent is a new method in our extension
    trackEvent ({ category, label, value = '' }) {
      // check if $gtag is there
      if (this.$gtag) {
        this.$gtag.event('click', {
          event_category: category,
          event_label: label,
          value: value
        })
      }
    }
  }
}