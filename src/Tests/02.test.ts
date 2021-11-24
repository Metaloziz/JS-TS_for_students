export {}

test('max number of array', ()=>{
    const a = [1,2,3,4,5,6]

    const c = a.filter(b => b > 3 )

    expect(c.length).toBe(3)
    expect(c[0]).toBe(4)
    expect(a).toBeDefined()
})