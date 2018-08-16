<template>
    <div v-editable="blok">
        <h1>{{title}}</h1>
        <p>{{content}}</p>
    </div>
</template>

<script>
    export default {
        asyncData(context){
            return context.app.$storyapi.get('cdn/stories/about', {
                version: context.isDev ? 'draft' : 'published'
            })
            .then( res =>{
                return{
                    blok: res.data.story.content,
                    title: res.data.story.content.title,
                    content: res.data.story.content.content
                }
            })
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

</style>