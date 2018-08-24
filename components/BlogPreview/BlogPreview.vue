<template>
    <v-container>
        <v-flex xs12 sm4 md3>
            <v-card :to="'blog/'+id">
                <v-card-media
                    :src="thumbnailImage"
                    height="200px"
                ></v-card-media>
                <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">{{title}}</h3>
                        <div>{{excerpt}}</div>
                    </div>
                </v-card-title>
                
            </v-card>
        </v-flex>
    </v-container>
    
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: true
            },
            thumbnailImage: {
                type: String,
                required: true
            },
            id: {
                type: String,
                required: true
            },
            excerpt: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>