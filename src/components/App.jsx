import React from 'react';
import Admin from './Admin';
import Guest from './Guest';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      masterRoomsList: {
        1: {
          name: 'Room1',
          description: 'room description here',
          numberOfGuests: 2,
          seasonPrice: 100,
          offSeasonPrice: 80,
          reservations: {'2018-03-02': {id: '2018-03-02', lastDay: '2018-03-12', firstName: 'John', lastName: 'Smith', phone: '206 123 4567'}, '2018-05-02': {id: '2018-05-02', lastDay: '2018-05-20', firstName: 'Matilda', lastName: 'Doe', phone: '206 123 9876'} },
          id: '1'
        },
        2: {
          name: 'Room2',
          description: 'room description here',
          numberOfGuests: 2,
          seasonPrice: 100,
          offSeasonPrice: 80,
          reservations: {'2018-03-20': {id: '2018-03-20', lastDay: '2018-03-29', firstName: 'John', lastName: 'Smith', phone: '206 123 4567'}, '2018-05-02': {id: '2018-05-02', lastDay: '2018-05-20', firstName: 'Matilda', lastName: 'Doe', phone: '206 123 9876'} },
          id: '2'
        },
        3: {
          name: 'Room3',
          description: 'room description here',
          numberOfGuests: 3,
          seasonPrice: 130,
          offSeasonPrice: 100,
          reservations: {'2018-03-02': {id: '2018-03-02', lastDay: '2018-03-12', firstName: 'John', lastName: 'Smith', phone: '206 123 4567'}, '2018-05-02': {id: '2018-05-02', lastDay: '2018-05-20', firstName: 'Matilda', lastName: 'Doe', phone: '206 123 9876'} },
          id: '3'
        },
        4: {
          name: 'Room4',
          description: 'room description here',
          numberOfGuests: 3,
          seasonPrice: 130,
          offSeasonPrice: 100,
          reservations: {'2018-03-02': {id: '2018-03-02', lastDay: '2018-03-12', firstName: 'John', lastName: 'Smith', phone: '206 123 4567'}, '2018-05-02': {id: '2018-05-02', lastDay: '2018-05-20', firstName: 'Matilda', lastName: 'Doe', phone: '206 123 9876'} },
          id: '4'
        },
        5: {
          name: 'Room5',
          description: 'room description here',
          numberOfGuests: 3,
          seasonPrice: 130,
          offSeasonPrice: 100,
          reservations: {'2018-03-02': {id: '2018-03-02', lastDay: '2018-03-12', firstName: 'John', lastName: 'Smith', phone: '206 123 4567'}, '2018-05-02': {id: '2018-05-02', lastDay: '2018-05-20', firstName: 'Matilda', lastName: 'Doe', phone: '206 123 9876'} },
          id: '5'
        },
        6: {
          name: 'Room6',
          description: 'room description here',
          numberOfGuests: 4,
          seasonPrice: 150,
          offSeasonPrice: 120,
          reservations: {'2018-03-02': {id: '2018-03-02', lastDay: '2018-03-12', firstName: 'John', lastName: 'Smith', phone: '206 123 4567'}, '2018-05-02': {id: '2018-05-02', lastDay: '2018-05-20', firstName: 'Matilda', lastName: 'Doe', phone: '206 123 9876'} },
          id: '6'
        },
        7: {
          name: 'Room7',
          description: 'room description here',
          numberOfGuests: 4,
          seasonPrice: 150,
          offSeasonPrice: 120,
          reservations: {'2018-03-02': {id: '2018-03-02', lastDay: '2018-03-12', firstName: 'John', lastName: 'Smith', phone: '206 123 4567'}, '2018-05-02': {id: '2018-05-02', lastDay: '2018-05-20', firstName: 'Matilda', lastName: 'Doe', phone: '206 123 9876'} },
          id: '7'
        },
        8: {
          name: 'Room8',
          description: 'room description here',
          numberOfGuests: 4,
          seasonPrice: 150,
          offSeasonPrice: 120,
          reservations: {'2018-03-02': {id: '2018-03-02', lastDay: '2018-03-12', firstName: 'John', lastName: 'Smith', phone: '206 123 4567'}, '2018-05-02': {id: '2018-05-02', lastDay: '2018-05-20', firstName: 'Matilda', lastName: 'Doe', phone: '206 123 9876'} },
          id: '8'
        },
        9: {
          name: 'Room9',
          description: 'room description here',
          numberOfGuests: 5,
          seasonPrice: 200,
          offSeasonPrice: 150,
          reservations: {'2018-03-02': {id: '2018-03-02', lastDay: '2018-03-12', firstName: 'John', lastName: 'Smith', phone: '206 123 4567'}, '2018-05-02': {id: '2018-05-02', lastDay: '2018-05-20', firstName: 'Matilda', lastName: 'Doe', phone: '206 123 9876'} },
          id: '9'
        },
        10: {
          name: 'Room10',
          description: 'room description here',
          numberOfGuests: 5,
          seasonPrice: 200,
          offSeasonPrice: 150,
          reservations: {'2018-03-02': {id: '2018-03-02', lastDay: '2018-03-12', firstName: 'John', lastName: 'Smith', phone: '206 123 4567'}, '2018-05-02': {id: '2018-05-02', lastDay: '2018-05-20', firstName: 'Matilda', lastName: 'Doe', phone: '206 123 9876'} },
          id: '10'
        }
      },
      reservationsRequestsList: {
        1: {
          roomId: '5',
          firstName: 'John',
          lastName: 'Smith',
          phone: '206 123 4567',
          startDay: '2018-03-02',
          endDay: '2018-03-03',
          totalPrice: 300,
          id: '1'
        },
        2: {
          roomId: '2',
          firstName: 'Matilda',
          lastName: 'Johnson',
          phone: '206 321 4567',
          startDay: '2018-07-02',
          endDay: '2018-07-03',
          totalPrice: 200,
          id: '2'
        }
      },
      roomsFilter: {numberOfGuests: null, startDay: null, lastDay: null}
    };
    this.handleNewFilterCreation=this.handleNewFilterCreation.bind(this);
    this.handleNewReservationRequestCreation=this.handleNewReservationRequestCreation.bind(this);
  }

  handleNewFilterCreation(newFilter){
    var newRoomsFilter = {};
    newRoomsFilter['numberOfGuests'] = newFilter.numberOfGuests;
    newRoomsFilter['startDay'] = newFilter.fromDate;
    newRoomsFilter['lastDay'] = newFilter.toDate;
    this.setState({roomsFilter: newRoomsFilter});
  }

  handleNewReservationRequestCreation(reservation) {
    var newReservationsRequestsList = Object.assign({}, this.state.reservationsRequestsList);
    var newReservationsRequests = {};
    newReservationsRequests['firstName'] = reservation.firstName;
    newReservationsRequests['lastName'] = reservation.lastName;
    newReservationsRequests['phone'] = reservation.phone;
    newReservationsRequests['startDay'] = reservation.startDay;
    newReservationsRequests['endDay'] = reservation.endDay;
    newReservationsRequests['roomId'] = reservation.roomId;
    newReservationsRequests['totalPrice'] = reservation.totalPrice;
    newReservationsRequests['id'] = reservation.id;

    newReservationsRequestsList[reservation.id] = newReservationsRequests;

    this.setState({reservationsRequestsList: newReservationsRequestsList});
    console.log(newReservationsRequestsList);
  }

  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path='/' render={()=><Guest
            masterRoomsList={this.state.masterRoomsList}
            onNewFilterCreation={this.handleNewFilterCreation}
            roomsFilter={this.state.roomsFilter}
            onNewReservationRequestCreation={this.handleNewReservationRequestCreation} />} />
          <Route path='/admin' render={()=><Admin masterRoomsList={this.state.masterRoomsList} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
