<template>
    <!-- <div v-editable="blok">

        <h1>{{title}}</h1>
        <p>{{content}}</p>
    </div> -->
    <v-container v-editable="blok">
        <v-card>
            <v-flex>
            <v-container fill-height>
                <v-layout align-center>
                    <v-flex class="text-xs-center">
                        <h3 class="display-3">{{title}}</h3>

                        <span class="subheading">{{summary}}</span>
                    </v-flex>
                </v-layout>
        </v-container>
            
        </v-flex>
            <v-container>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 >
                        <v-container>
                                <img :src="image" :alt="title" class="pb-5" v-if="image">
                                <p class="body-2">{{content}} </p>

                                <v-card-actions>
                                    <v-btn large color="accent" to="/blog">Go back</v-btn>
                                </v-card-actions>
                        </v-container>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-container>
    
</template>

<script>
    export default {
        asyncData(context){
            return context.app.$storyapi.get('cdn/stories/blog/'+ context.params.postId, {
                version: context.isDev ? 'draft' : 'published'
            })
            .then( res => {
                console.log(res.data.story)
                return {
                    blok: res.data.story.content,
                    image: res.data.story.content.mainImage,
                    title: res.data.story.content.title,
                    summary: res.data.story.content.summary,
                    content: res.data.story.content.content
                }
            })
        },
        data(){
            return{
                image: 'Hello'
            }
        },
        mounted(){
            this.$storyblok.init()
            this.$storyblok.on('change', () => {
                location.reload(true)
            })
        }
    }
</script>

<style scoped>
    p{
        line-height: 2.4em;
        white-space: pre-wrap;
    }
    img{
        max-width: 70%;
        display: block;
        margin: 0 auto;
    }
</style>