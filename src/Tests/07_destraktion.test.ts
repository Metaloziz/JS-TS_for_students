export {}

type userTypeProps = {
    id: number
    name: string
    age: number
    address: {
        street: {
            title: string
        }
    }
}

let props: userTypeProps

beforeEach(() => {
    props = {
        id: 1,
        name: 'Andrew',
        age: 27,
        address: {
            street: {
                title: 'Orlovskogo'
            }
        }
    }
})

test('dest1', () => {

    //let age = props.age
    //let name = props.name
    let {age, name, id} = props
    let {title} = props.address.street

    expect(id).toBe(1)
    expect(name).toBe('Andrew')
    expect(age).toBe(27)
    expect(title).toBe('Orlovskogo')
})

test('dest2', () => {
    let {age, name, id} = props
    let {title} = props.address.street

    expect(id).toBe(1)
    expect(name).toBe('Andrew')
    expect(age).toBe(27)
    expect(title).toBe('Orlovskogo')

})

