import delay from './delay';
import moment from 'moment'
const venue = {
    id: "595435530fe3dc001077f2c5",
    name: "Yankee Stadium",
    address: "One East 161st Street",
    city: "Bronx",
    state: "NY",
    zip: "10451",
    phone: "(718) 293-4300",
    country: "US",
    updatedAt: "2017-06-28T23:01:39.965Z",
    createdAt: "2017-06-28T23:01:39.965Z",
}

const loginUser = {
    updatedAt: "2017-06-29T22:15:21.099Z",
    createdAt: "2017-06-29T22:15:21.099Z",
    email: "b.castles@umiami.edu",
    password: "$2a$10$YIAtXpcWS8zbCVC9fVD7D.UZEOQfxc9/r3s/rKiiAsZdX4MaOGUWm",
    active: true,
    id: "59557bf958f0e10010e1e71d",
    first_name: "Brian",
    last_name: "Castles",
    is_admin: true
}

const performers = [
    {
        id: "5954332e0fe3dc001077f2b7",
        updatedAt: "2017-06-28T22:52:30.783Z",
        createdAt: "2017-06-28T22:52:30.783Z",
        name: "Colorado Rockies",
        __v: 0,
        images: []
    },
    {
        id: "595431830fe3dc001077f29f",
        updatedAt: "2017-06-28T22:45:23.635Z",
        createdAt: "2017-06-28T22:45:23.635Z",
        name: "New York Mets",
        __v: 0,
        images: []
    }
]


const events = [
    {
        updatedAt: "2017-06-28T23:13:35.512Z",
        createdAt: "2017-06-28T23:13:35.512Z",
        id: "595431830fe3dc001077f29f",
        title: "Yankees vs Red Sox",
        eventtimedisplay: "7/1/2017 - 7/4/2017",
        eventtime: [moment("2017-07-01", "YYYY/MM/DD"), moment("2017-07-04", "YYYY/MM/DD")],
        venue: {
            id: "595435300fe3dc001077f2c4",
            updatedAt: "2017-06-28T23:01:04.590Z",
            createdAt: "2017-06-28T23:01:04.590Z",
            name: "Citi Field",
            address: "120-01 Roosevelt Avenue",
            city: "Corona", 
            state: "NY",
            zip: "11368",
            phone: "(718) 507-6387",
            country: "US",
            __v: 0,
            images: []
        },
        performers: [],
        tickets: [
            {
                id: "djdkdkjcldkdkd",
                event_id: "595431830fe3dc001077f29f",
                locationId: 1,
                location: "Section A, Row 1, Seat 1",
                section: "Section A",
                row: "1-5",
                seat: "1-5",
                price: 45
            },
            {
                id: "dcdjowkdl",
                event_id: "595431830fe3dc001077f29f",
                locationId: 2,
                location: "Section B, Row 1, Seat 1",
                section: "Section B",
                row: "3-7",
                seat: "6-10",
                price: 55,
            }
        ],
        created_by: "595430d9399e930010eb7434"
    },
    {
        updatedAt: "2017-06-28T23:13:35.512Z",
        createdAt: "2017-06-28T23:13:35.512Z",
        id: "595431830fe3dc001077f29g",
        title: "Yankees vs Red Sox",
        eventtimedisplay: "8/1/2017 - 8/4/2017",
        eventtime: [moment("2017-07-01", "YYYY/MM/DD"), moment("2017-07-04", "YYYY/MM/DD")],
        venue: {
            id: "595435300fe3dc001077f2c4",
            updatedAt: "2017-06-28T23:01:04.590Z",
            createdAt: "2017-06-28T23:01:04.590Z",
            name: "Citi Field",
            address: "120-01 Roosevelt Avenue",
            city: "Corona",
            state: "NY",
            zip: "11368",
            phone: "(718) 507-6387",
            country: "US",
            __v: 0,
            images: []
        },
        performers: [],
        tickets: [
            {
                id: "lolmmmm",
                event_id: "595431830fe3dc001077f29g",
                locationId: 1,
                location: "Section A, Row 1, Seat 1",
                section: "Section C",
                row: "1-5",
                seat: "1-5",
                price: 45
            },
            {
                id: "vvceo",
                event_id: "595431830fe3dc001077f29g",
                locationId: 2,
                location: "Section B, Row 1, Seat 1",
                section: "Section D",
                row: "3-7",
                seat: "6-10",
                price: 55,
            }
        ],
        created_by: "595430d9399e930010eb7434"
    }
];

const floorplans = [
    {
        id: 1,
        section: "A-B",
        row: "1-3",
        seat: "1-4",
        value: 'Section A, Row 1-4, Seat 1-5',
        sectionOption: "Letter",
        rowOption: "Number",
        seatOption: "Number"
    },
    {
        id: 2,
        section: "C-D",
        row: "1-3",
        seat: "1-5",
        value: 'Section A, Row 1-4, Seat 6-10',
        sectionOption: "Number",
        rowOption: "Letter",
        seatOption: "Letter"
    }
];

class VenueApi {
    static getVenue() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], venue))
            }, delay);
        });
    }

    static getUser(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], user))
            }, delay);
        });
    }
    static getPerformers() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], performers))
            }, delay);
        });
    }

    static getEvents() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], events))
            }, delay);
        });
    }

    static getFloorplans() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], floorplans))
            }, delay);
        });
    }

    static saveVenue(venue) {
        venue = Object.assign({}, venue); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (venue.id != "") {
                    const existingIndex = events.findIndex(a => a.id == venue.id);
                    events.splice(existingIndex, 1, venue);
                } else {
                    venue.id = "595435530fe3dc001077f2c6";
                }

                resolve(venue);
            }, delay);
        });
    }

    static saveUser(user) {
        user = Object.assign({}, user); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user.id != "") {
                    const existingIndex = events.findIndex(a => a.id == user.id);
                    events.splice(existingIndex, 1, user);
                } else {
                    user.id = "595435530fe3dc001077f2c6";
                }

                resolve(user);
            }, delay);
        });
    }

    static savePerformer(performer) {
        performer = Object.assign({}, performer); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (performer.id != "") {
                    const existingIndex = events.findIndex(a => a.id == performer.id);
                    events.splice(existingIndex, 1, performer);
                } else {
                    performer.id = "595435530fe3dc001077f2c6";
                    performers.push(performer);
                }

                resolve(performer);
            }, delay);
        });
    }

    static saveEvent(event) {
        event = Object.assign({}, event); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (event.id != "") {
                    const existingIndex = events.findIndex(a => a.id == event.id);
                    events.splice(existingIndex, 1, event);
                } else {
                    event.id = "595435530fe3dc001077f2c6"+events.length.toString();
                    events.push(event);
                }

                resolve(event);
            }, delay);
        });
    }

    static saveTicket(ticket) {
        ticket = Object.assign({}, ticket); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const event = events.filter(f=>f.id == ticket.event_id)[0];
                if(ticket.id == "")     
                    ticket.id = "afsad"+event.tickets.length;
                resolve(ticket);
            }, delay);
        });
    }

    static saveFloorplan(floorplan) {
        floorplan = Object.assign({}, floorplan); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (floorplan.id > 0) {
                    const existingIndex = floorplans.findIndex(a => a.id == floorplan.id);
                    floorplans.splice(existingIndex, 1, floorplan);
                } else {
                    floorplan.id = floorplans.length + 1;
                    floorplans.push(floorplan);
                }
                resolve(floorplan);
            }, delay);
        });
    }

    static login(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(loginUser);
            }, delay);
        });
    }
}

export default VenueApi;