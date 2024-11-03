function managingTickets(array, sortCriteria) {
    let data = []

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    for (const ele of array) {
        let [destination, price, status] = ele.split('|')
        let newCity = new Ticket(destination, price, status)
        data.push(newCity)
    }

    if (sortCriteria === 'destination') {
        data = data.sort((a, b) => a.destination.localeCompare(b.destination))
    } else if (sortCriteria === 'price') {
        data = data.sort((a, b) => a.price - b.price)
    } else if (sortCriteria === 'status') {
        data = data.sort((a, b) => a.status.localeCompare(b.status))
    }


    return data

}
let result = managingTickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination')