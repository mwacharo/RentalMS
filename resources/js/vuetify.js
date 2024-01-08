// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as directives from "vuetify/directives";

const customeTheme = {
    dark: false,
    colors: {
        primary: "#673AB7",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
        lightblue: "#14c6FF",
        yellow: "#FFCF00",
        pink: "#FF1976",
        orange: "#FF8657",
        magenta: "#C33AFC",
        darkblue: "#1E2D56",
        gray: "#909090",
        neutralgray: "#9BA6C1",
        green: "#2ED47A",


        red: "#FF5c4E",
        darkblueshade: "#308DC2",
        lightgray: "#BDBDBD",
        lightpink: "#FFCFE3",
        white: "#FFFFFF",
        muted: "#6c757d",
    },
};

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: "customeTheme",
        themes: {
            customeTheme,
        },
    },
});

export default vuetify;