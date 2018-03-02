import React from 'react';
import Admin from './Admin';
import Guest from './Guest';
import { Switch, Route } from 'react-router-dom';

const masterRoomsList= {
  1: {
    name: 'Room1',
    description: 'room description here',
    numberOfGuests: 2,
    reservations: {'07/01/2018-07/15/2018': {firstName: 'John', secondName: 'Smith', phone: '206 123 4567'}, '07/16/2018-08/15/2018': {firstName: 'Matilda', secondName: 'Doe', phone: '206 123 9876'} },
    id: '1'
  },
  2: {
    name: 'Room2',
    description: 'room description here',
    numberOfGuests: 2,
    reservations: {'07/01/2018-07/15/2018': {firstName: 'John', secondName: 'Smith', phone: '206 123 4567'}, '07/16/2018-08/15/2018': {firstName: 'Matilda', secondName: 'Doe', phone: '206 123 9876'} },
    id: '2'
  },
  3: {
    name: 'Room3',
    description: 'room description here',
    numberOfGuests: 3,
    reservations: {'07/01/2018-07/15/2018': {firstName: 'John', secondName: 'Smith', phone: '206 123 4567'}, '07/16/2018-08/15/2018': {firstName: 'Matilda', secondName: 'Doe', phone: '206 123 9876'} },
    id: '3'
  },
  4: {
    name: 'Room4',
    description: 'room description here',
    numberOfGuests: 3,
    reservations: {'07/01/2018-07/15/2018': {firstName: 'John', secondName: 'Smith', phone: '206 123 4567'}, '07/16/2018-08/15/2018': {firstName: 'Matilda', secondName: 'Doe', phone: '206 123 9876'} },
    id: '4'
  },
  5: {
    name: 'Room5',
    description: 'room description here',
    numberOfGuests: 4,
    reservations: {'07/01/2018-07/15/2018': {firstName: 'John', secondName: 'Smith', phone: '206 123 4567'}, '07/16/2018-08/15/2018': {firstName: 'Matilda', secondName: 'Doe', phone: '206 123 9876'} },
    id: '5'
  },
  6: {
    name: 'Room6',
    description: 'room description here',
    numberOfGuests: 5,
    reservations: {'07/01/2018-07/15/2018': {firstName: 'John', secondName: 'Smith', phone: '206 123 4567'}, '07/16/2018-08/15/2018': {firstName: 'Matilda', secondName: 'Doe', phone: '206 123 9876'} },
    id: '6'
  }
};

function App(){
  return (
    <div className="container">
      <Switch>
        <Route exact path='/' render={()=><Guest masterRoomsList={masterRoomsList} />} />
        <Route path='/admin' render={()=><Admin masterRoomsList={masterRoomsList} />} />
      </Switch>
    </div>
  );
}

export default App;
