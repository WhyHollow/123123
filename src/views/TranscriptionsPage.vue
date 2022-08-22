<template>
  <div>
    {{ test[0].name }}
    <div v-if="test">
      <audio-player
        ref="audioPlayer"
        :audio-list="test.map((elm) => elm.url)"
        theme-color="#ff2929"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import axios from "axios";
import AudioPlayer from "@liripeng/vue-audio-player";
export default {
  components: {
    AudioPlayer,
  },
  data() {
    return {
      test: [],
    };
  },
  computed: {
    ...mapState("audio", ["audio_id"]),
  },
  watch: {
    audio_id() {
      this.test = [
        {
          name: this.audio.title,
          url: axios.defaults.baseURL + this.audio.media_path,
        },
      ];
    },
  },
  methods: {
    ...mapActions({
      getAudio: "audio/get_audio_id",
    }),
  },
  beforeMount() {
    this.getAudio(this.$route.params.transcriptionId).then((response) => {
      console.log(response);
    });
  },
};
</script>

<style>
</style>