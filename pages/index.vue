<template>
  <div>
      <v-parallax src="/material_design-wallpaper-3840x2160.jpg">
      <v-container fill-height>
        <v-layout align-center justify-center>
          <v-flex md7>
            <h3 class="display-3 font-weight-black">Front End Developer.</h3>

            <p class="subheading mt-3">Based out of Augusta, GA. Specializing in Front end Development. Looking for a application to better help your business? Or a nice website for online presence? Or  you're an Employer looking to hire me. You can get in touch with me <a href="http://" class="white--text">here</a>.</p>
            <v-btn
              class="mx-0"
              color="primary"
              large
            >
              Contact Me
              <v-icon right dark>keyboard_arrow_right</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
      </v-parallax>
      <v-container fill-height>
        <v-layout mb-3 row wrap align-center justify-center>
          <v-flex xs12 sm6 md4 mb-3>
            <v-card>
              <v-card-media
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="200px"
              >
              </v-card-media>

              <v-card-title primary-title>
                <div>
                  <div class="headline">Wallstreet Ticker Bot</div>
                  <span class="grey--text">Discord Bot</span>
                </div>
              </v-card-title>

              <v-card-actions>
                <v-btn color="primary" dark href="https://discordapp.com/oauth2/authorize?client_id=470446617376456715&scope=bot" target="_blank">Invite Bot</v-btn>
                <v-spacer></v-spacer>
                <v-btn icon @click="show2 = !show2">
                  <v-icon>{{ show2 ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-slide-y-transition>
                <v-card-text v-show="show2">
                  <h3>Overview</h3>
                  <p>The bot gives you realtime updated information about a stock that's traded on the NYSE and Nasdaq.</p>
                  <h3>How to use the bot?</h3>
                  <p>After you have allowed the bot to join your server. The command to use the bot is !tick ${name of stock ticker} (!tick $AMD).</p>
                </v-card-text>
              </v-slide-y-transition>
            </v-card>
          </v-flex>
          
        </v-layout>
      </v-container>
      
  </div>
    
</template>

<script>

export default {
  data(){
    return{
      show: false,
      show2: false
    }
    
  }
}
</script>
<style scoped>
  p{
    line-height: 2em;
  }
</style>

