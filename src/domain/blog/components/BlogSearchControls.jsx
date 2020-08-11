import React from 'react';
import classes from '../Blog.module.scss';
import { SearchDropdown } from '../../../components';
import PropTypes from 'prop-types';

const BlogSearchControls = ({ campaigns, blogs, filterBlogs }) => {

    const campaignNames = campaigns.map(campaign => {
        return {
            id: campaign.id,
            title: campaign.title,
        };
    });

    const filterBlogsByCampaign = (campaignId) => {
        const newFilteredBlogs = blogs.filter(blog => blog.campaign_id === campaignId);
        filterBlogs(newFilteredBlogs);
    }

    return (
        <div className={classes.SearchControls}>
            <SearchDropdown title="Choose Campaigns" values={campaignNames} filterValuesById={filterBlogsByCampaign} />
            {/* <SearchBox title="I want to look for" placeholder="Search for article" onSubmit={onSearch} /> */}
        </div>
    );
};

BlogSearchControls.propTypes = {
    campaigns: PropTypes.array,
    blogs: PropTypes.array,
    filterBlogs: PropTypes.func
}

export default BlogSearchControls;
