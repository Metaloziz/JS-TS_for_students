import {usersPro, velcom} from "./05map";

export {}


test('transformator', () => {





    expect(usersPro.length).toBe(3)
    expect(usersPro[0].skilss).toBe('Css')
    expect(usersPro[0].name).toBe('Andrew')


    expect(velcom[0]).toBeDefined()




})