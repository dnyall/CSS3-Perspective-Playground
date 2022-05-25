Vue.createApp({
  data() {
    return {
      perspectiveVal: 100,
      rotateXVal: 0,
      rotateYVal: 0,
      rotateZVal: 0,
    }
  },
  methods: {
    reset() {
      this.perspectiveVal = 100;
      this.rotateXVal = 0;
      this.rotateYVal = 0;
      this.rotateZVal = 0;
    },
    copy() {
      swal("Done!", "Your css copy to your Clipboard!", "success");
      const text = this.box;
      navigator.clipboard.writeText(text);
    }
  },
  computed: {
    box() {
      return `transform: perspective(${this.perspectiveVal}px) rotateX(${this.rotateXVal}deg) rotateY(${this.rotateYVal}deg) rotateZ(${this.rotateZVal}deg)`
    }
  }
}).mount("#app")
