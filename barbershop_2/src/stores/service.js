import { defineStore } from "pinia";
import getStoreTemplate from "./helpers/storeTemplate";

import { useGeneralStore } from "./general";

export const useServiceList = defineStore("serviceList", () => {
    const { generalApiOperation } = useGeneralStore();
    return getStoreTemplate("serviceList", generalApiOperation);
});
