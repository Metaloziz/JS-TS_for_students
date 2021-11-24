export {}


type usersType = {
    item: usersItemTypes
}

type usersItemTypes = {
    id: number
    name: string
}

export let users = [
    {
        id: 21341324,
        name: 'Andrew'
    },
    {
        id: 14134,
        name: 'Alex'
    },
    {
        id: 245072405,
        name: 'Bro'
    }
]


export let usersPro = users.map(
    (x) => ({
            name: x.name,
            skilss: 'Css',
            age: 123
        }
    )
)





export let velcom = () => {

    let callbackfn = (x:usersItemTypes)  => <div >Hello {x.name}</div>;

    return   users.map(callbackfn)}