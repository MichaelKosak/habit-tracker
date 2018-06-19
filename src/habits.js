import uid from 'uid'
export default [
  { text: 'Sport gemacht', id: uid(), type: 'toggle', category: 'good' },
  { text: 'Gesund gegessen', id: uid(), type: 'toggle', category: 'good' },
  {
    text: 'Liter Wasser getrunken',
    id: uid(),
    type: 'counter',
    category: 'good'
  },
  { text: 'Zigaretten geraucht', id: uid(), type: 'counter', category: 'bad' }
]
