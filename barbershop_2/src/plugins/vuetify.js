/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";
import { VuetifyDateAdapter } from "vuetify/lib/composables/date/adapters/vuetify";

export default createVuetify({
    date: {
        adapter: VuetifyDateAdapter,
    },
});
