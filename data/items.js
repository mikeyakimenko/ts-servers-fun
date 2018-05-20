module.exports = () => {
    const BOOTDATES = [
        '2018-03-11',
        '2017-12-02',
        '2018-01-14',
        '2018-02-09',
        '2018-03-12',
    ]

    const LOCATIONGROUPS = [
        'London',
        'Amsterdam',
        'Krakow',
        'Atheens',
        'Mumbai',
        'New York',
        'Tokio',
        'Kiev',
        'Berlin',
        'Hamburg',
        'Brno'
    ]

    const generateID = (number) => Math.random().toString(36).substr(2, number)

    const randomFromArray = (arrayOf) => arrayOf[Math.floor(Math.random()*arrayOf.length)]

    const data = {
        items: []
    }

    for (let i = 0; i < 1000; i++) {
        data.items.push({
            id: i,
            serverName: `serve: ${generateID(1) + i}/${generateID(4)}`,
            serverGroup:randomFromArray(LOCATIONGROUPS),
            stabiltyRate: Math.floor(Math.random() * 10) + 1 ,
            powerRate: Math.floor(Math.random() * 10) + 1 ,
            bootDate: new Date(randomFromArray(BOOTDATES))
        })
    }
    return data
}
