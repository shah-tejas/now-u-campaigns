import React from 'react';
import classes from './MonthCampaigns.module.scss';
import { CampaignAd } from '../../../components';
import PropTypes from 'prop-types';

const MonthCampaigns = ({ campaigns }) => {
    
    return (
        <div className={classes.container}>
            <div className={classes.title}>This month campaign</div>
            {campaigns.map(campaign => (
                <CampaignAd campaign={campaign} key={campaign.id} />
            ))}
        </div>
    );
};

MonthCampaigns.propTypes = { 
    campaigns: PropTypes.array.isRequired
}

export default MonthCampaigns;
