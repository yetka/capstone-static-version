import React from 'react';
import AdminNavBar from './AdminNavBar';
import GuestsRequestsList from './GuestsRequestsList';
import ReservationsToEdit from './ReservationsToEdit';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';


function Admin(props){

  return (
    <div className="row">
      <div className="col-md-3">
        <AdminNavBar />
      </div>
      <div className="col-md-9">
        <Switch>
          <Route exact path='/admin/' render={()=><GuestsRequestsList reservationsRequestsList={props.reservationsRequestsList}
            onDeleteReservationRequest={props.onDeleteReservationRequest}
            onSubmitReservationRequest={props.onSubmitReservationRequest}/>} />
          <Route path='/admin/reservations-to-edit' render={()=><ReservationsToEdit
            masterRoomsList={props.masterRoomsList}
            onDeleteReservation={props.onDeleteReservation}
            onReservationEdition={props.onReservationEdition} />} />
        </Switch>
      </div>
    </div>
  );
}

Admin.propTypes = {
  masterRoomsList: PropTypes.object,
  reservationsRequestsList: PropTypes.object,
  onReservationEdition: PropTypes.func,
  onDeleteReservationRequest: PropTypes.func,
  onSubmitReservationRequest: PropTypes.func,
  onDeleteReservation: PropTypes.func
};

export default Admin;
