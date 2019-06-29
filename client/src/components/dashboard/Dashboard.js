import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import DashboardActions from "./DashboardActions";
import ProfileTop from "./../profile/ProfileTop";
import ProfileAbout from "./../profile/ProfileAbout";

import { getCurrentProfile, deleteAccount } from "../../actions/profile";


const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="container">
        <h1 className="large text-primary">Profile</h1>
        <p className="lead text-center">
          <i className="fas fa-user" /> Welcome {user && user.name}
        </p>
        {profile !== null ? (
          <Fragment>
            <div className="container">
            <DashboardActions />
            <div className="profile-grid my-1">
              <ProfileTop profile={profile} />
              <ProfileAbout profile={profile} />
            </div>

            <div className="my-2 text-center">
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteAccount()}
              >
                <i className="fas fa-user-minus" /> Delete My Account
              </button>
            </div>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <p className="text-center">You have not yet setup a profile, please add some info</p>
            
            <div className="text-center">
            <Link to="/create-profile" className="btn btn-primary my-1">
              Create Profile
            </Link>
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(Dashboard);
