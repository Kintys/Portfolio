import DbOperations from './helpers/DbOperations'
const collectionDB = new DbOperations('users')

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useGeneralStore } from './general'

export const useUsersStore = defineStore('users', () => {
  const { generalApiOperation } = useGeneralStore()

  const usersList = ref(null)
  const currentUser = ref(null)

  async function loadUsersList() {
    usersList.value = await generalApiOperation({
      operation: () => collectionDB.loadItemsList()
    })
  }

  async function loadUserById(userId) {
    if (userId) {
      currentUser.value = await generalApiOperation({
        operation: () => collectionDB.getItemById(userId)
      })
      return currentUser.value
    }
  }

  async function addUser(userData) {
    currentUser.value = await generalApiOperation({
      operation: () => collectionDB.addItem(userData)
    })
  }

  async function addUserWithCustomId({ id, data }) {
    const userObj = await loadUserById(id)
    if (!userObj?.email) {
      currentUser.value = await generalApiOperation({
        operation: () => collectionDB.addItemWithCustomId(id, data)
      })
    }
  }

  async function updateUser({ id, data }) {
    await generalApiOperation({
      operation: () => collectionDB.updateItem(id, data)
    })
    if (currentUser.value.email === data.email) {
      currentUser.value = data
    }
  }

  async function deleteUser(userData) {
    currentUser.value = await generalApiOperation({
      operation: () => collectionDB.deleteItem(userData)
    })
  }

  const getUsersList = computed(() => usersList.value)
  const getCurrentUser = computed(() => currentUser.value)
  const getCurrentUserPermissions = computed(() => currentUser?.value?.permissions ?? {})

  return {
    usersList,
    loadUsersList,
    loadUserById,
    addUser,
    addUserWithCustomId,
    deleteUser,
    updateUser,

    getUsersList,
    getCurrentUser,
    getCurrentUserPermissions
  }
})
