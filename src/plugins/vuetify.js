import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                background: colors.lightGreen.lighten5,
                header: colors.lightGreen.lighten1,
                primary: colors.green,
            },
            dark: {

            },
        },
    },
});
