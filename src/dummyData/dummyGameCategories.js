
const categoryList = [
    {
        name: 'popular'
    },
    {
        name: 'funny'
    },
    {
        name: 'strategy'
    },
    {
        name: 'adventure'
    },
    {
        name: 'family'
    },
    {
        name: 'multiple player'
    },
    {
        name: 'party'
    }
]

const dummyCategoryList = Array.from(categoryList, (name ,index) => ({...name, id: index}))

export { dummyCategoryList }

