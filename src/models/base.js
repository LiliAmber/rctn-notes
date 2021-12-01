export const base = {
  // Initial state pada Rematch
  state: {
    title: "React Notes",
    menus: [
      { name: 'Home', to: '/', type: 'internal' },
      { name: '18-21 - Concepts', to: '/concepts', type: 'internal' },
      { name: '20 - Hooks', to: '/hooks', type: 'internal' },
      { name: '21 - Fetching', to: '/fetching', type: 'internal' },
      { name: '23 - Styling', to: '/styling', type: 'internal' },
      { name: '24 - Router', to: '/router', type: 'internal' },
      { name: '25-26 - Redux di React', to: '/redux', type: 'internal' },
      { name: '27 - React Testing', to: '/testing', type: 'internal' },
    ],
    reduxMenus: [
      { name: 'Apa itu Redux?', to: '/styling', type: 'internal' },
      { name: 'Login', to: '/router', type: 'internal' },
      { name: 'Movies', to: '/redux', type: 'internal' },
      { name: 'Studios', to: '/testing', type: 'internal' },
    ]
  },

  // Reducers sama seperti cara kerja reducer di Redux,
  // hanya saja:
  // - kita tidak perlu set default parameter pada parameter state,
  // - cara kerja Reducers sama persis seperti dispatch dengan plain
  //   object atau object literal -> {} biasa, pada Redux
  reducers: {
    setTitle (state, payload) {
      return { ...state, title: payload }
    }
  },

  // Effects di Rematch memiliki cara kerja yang sama
  // seperti async Actions di Redux + Thunk
  // contoh:
  // effects: dispatch => ({
  //   setTitle: (newTitle) => dispatch.base.setTitle(newTitle)
  // })
  // ! NOTE: effects dan reducers akan menyebabkan infinite loop
  // !       jika terdapat nama function yang sama di antara keduanya!
}
