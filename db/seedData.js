module.exports = [
    {
        username: 'adam',
        password: 'pw1',
        chirpsData: [
            {
                body: "Hey, my name's Adam",
                commentsData: [
                    {
                        username: "anthony",
                        body: "Hey Adam"
                    },{
                        username: "jaime",
                        body: "Where's Eve?"
                    }
                ]
            },{
                body: "Adam's 2nd chirp",
                commentsData: [
                    {
                        username: "oleg",
                        body: "This is a good chirp"
                    }
                ]
            }
        ]
    },{
        username: 'anthony',
        password: 'pw2',
        chirpsData: [
            {
                body: "Hey, my name's Anthony",
                commentsData: [
                    {
                        username: "adam",
                        body: "Hey Anthony"
                    }
                ]
            }
        ]
    },{
        username: 'jaime',
        password: 'pw3',
        chirpsData: [
            {
                body: "Hey, my name's Jaime",
                commentsData: [
                    {
                        username: "oleg",
                        body: "Hey Jaime"
                    }
                ]
            }
        ]
    },{
        username: 'oleg',
        password: 'pw4',
        chirpsData: [
            {
                body: "Hey, my name's Oleg",
                commentsData: [
                    {
                        username: "jaime",
                        body: "Hey Oleg"
                    }
                ]
            }
        ]
    }
]