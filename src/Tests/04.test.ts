export {}


test('choice courses', () => {

    let courses = [
        {title: 'css', price: 220},
        {title: 'js', price: 300},
        {title: 'ts', price: 110},
    ]

    const answer = courses.filter(x => x.price !== 220)

    expect(answer.length).toBe(2)
    expect(answer[0].price).toBe(300)
})