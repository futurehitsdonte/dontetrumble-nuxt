<template>
    <div>
        <h1 class="text-xs-center display-3 font-weight-thin">Blog</h1>
        <v-flex >
            <v-layout align-center>
                <BlogPreview  
                v-for="post in posts"
                :key="post.id"
                :title="post.title"
                :excerpt="post.previewText"
                :thumbnailImage="post.thumbnailUrl"
                :id="post.id"/>
            </v-layout>
        </v-flex>
        
    </div>
</template>

<script>
    import BlogPreview from '@/components/BlogPreview/BlogPreview'
    export default {
        components: {
            BlogPreview
        },
        asyncData(context){
            return context.app.$storyapi.get('cdn/stories', {
                version: context.isDev ? 'draft' : 'published',
                starts_with: 'blog/'
            })
            .then( res => {
                return {
                    posts: res.data.stories.map( bp => {
                        return {
                            id: bp.slug,
                            title: bp.content.title,
                            previewText: bp.content.summarySmall,
                            thumbnailUrl: bp.content.thumbnail
                        };
                        
                    })
                }
            })
        },
        data(){
            return{

            }
        }
    }
</script>

<style scoped>

</style>