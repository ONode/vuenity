import Vuenity from "./vuenity.vue";
import Vue from "vue";


function install (Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.component ("Vuenity", Vuenity);
}

const plugin = {
    install
};

let GlobalVue = null;

if (typeof window !== "undefined") {
    GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
    GlobalVue = global.Vue;
}

if (GlobalVue) {
    GlobalVue.use (plugin);
}

Vuenity.install = install;

export default Vuenity;

export { UnityContent } from "./unity-content";
import { loggingService } from "./services/logging-service";