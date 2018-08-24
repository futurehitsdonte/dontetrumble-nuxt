<template>
    <div>
        <v-navigation-drawer
            :clipped="clipped"
            v-model="drawer"
            fixed
            disable-resize-watcher
            app
            >
                <v-list>
                    <v-list-tile
                    router
                    :to="item.to"
                    :key="i"
                    v-for="(item, i) in items"
                    exact
                    >
                    <v-list-tile-action>
                        <v-icon v-html="item.icon"></v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-navigation-drawer>
            <v-toolbar fixed app :clipped-left="clipped"  dark color="primary darken-1">
                <v-toolbar-side-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
                <v-toolbar-title v-text="title"></v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items class="hidden-sm-and-down" >
                    <v-btn flat to="/">Home</v-btn>
                    <!-- <v-btn flat to="/about">About</v-btn> -->
                    <v-btn flat to="/contact">Contact</v-btn>
                    <v-btn flat to="/blog">Blog</v-btn>
                </v-toolbar-items>
            </v-toolbar>
            
            <v-navigation-drawer
            temporary
            :right="right"
            fixed
            >
            <v-list>
                <v-list-tile @click.native="right = !right">
                <v-list-tile-action>
                    <v-icon light>compare_arrows</v-icon>
                </v-list-tile-action>
                <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
    export default {
    data() {
        return {
            clipped: true,
            drawer: false,
            fixed: true,
            items: [
            { title: 'Home', to: '/' },
            { title: 'Contact', to: '/Contact' },
            { title: 'Blog', to: '/Blog' }
            ],
            right: true,
            title: 'Donte Trumble'
        }
    }
    }
</script>

<style scoped>

</style>