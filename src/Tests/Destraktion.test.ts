import {userTypeProps} from "./Destraktion";

let props: userTypeProps

beforeEach(() => {
    props = {
        id: 1,
        name: 'Andrew',
        age: 27,
        lessons : [{title: 'Css'},{title: 'Js'}],
        address: {
            street: {
                title: 'Orlovskogo'
            }
        }
    }
})

test('test1', () => {

    //let age = props.age
    //let name = props.name
    let {age, name, id} = props
    let {title} = props.address.street

    expect(id).toBe(1)
    expect(name).toBe('Andrew')
    expect(age).toBe(27)
    expect(title).toBe('Orlovskogo')
})

test('test2', () => {

    const l1 = props.lessons[0].title
    const l2 = props.lessons[1].title

    const [ls1, ls2 ] = props.lessons

    let {title} = props.lessons[0]

    expect(l1).toBe('Css')
    expect(l2).toBe('Js')

    expect(ls1.title).toBe('Css')
    expect(ls2.title).toBe('Js')

    expect(title).toBe('Css')


})

