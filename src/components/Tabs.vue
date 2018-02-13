<template>
        <div class="container">
        <vue-tabs   active-tab-color="#7AB55C" 
                    active-text-color="white"
                    type="pills"
                    text-position="bottom"
                    centered
           >
            <v-tab title="About Me" icon="ti-user">
                Content
            </v-tab>
            <v-tab title="Experience">
                Content Third
            </v-tab>
            <v-tab title="Projects">
                Content Third Blah blah blah blah blah ablh ablah blah blah blah 
            </v-tab>
        </vue-tabs>
        </div>
</template>
<script>
import {VueTabs, VTab} from 'vue-nav-tabs'

export default{
    name: 'Tabs',

    components: {
        VueTabs,
        VTab
    },

    props: {
        activeTabColor: String,
        activeTextColor: String,
        /**
         * Tab title position: center | bottom | top
         */
        textPosition: {
            type: String,
            default: 'center'
        },
        /**
         * Tab type: tabs | pills
         */
        type: {
            type: String,
            default: 'pills'
        },
        direction: {
            type: String,
            default: 'horizontal'
        },
        /**
         * Centers the tabs and makes the container div full width
         */
        centered: Boolean,
        value: [String, Number, Object]
        }

}
</script>
<style>

</style>