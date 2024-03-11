import { defineStore } from "pinia";
import getStoreTemplate from "./helpers/storeTemplate";

import { useGeneralStore } from "./general";

export const useBarberList = defineStore("barbersList", () => {
    const { generalApiOperation } = useGeneralStore();
    return getStoreTemplate("barbersList", generalApiOperation);
});
