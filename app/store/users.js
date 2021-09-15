export const state = () => ({
    id: 0,
    name:"",
    emain:"",
    password:""
})

export const mutation = {
    storeId: (state, data) => {
        state.id = data
    },
    storeName: (state, data) => {
        state.name = data
    },
    storeEmail: (state, data) => {
        state.emain = data
    },
    storePassword: (state, data) => {
        state.password = data
    },
}