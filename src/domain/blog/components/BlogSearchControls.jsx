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

    const filterBlogsByCampaign = (campaignIds) => {
        // If campaignIds is empty, show all blogs
        if(campaignIds && campaignIds.length) {
            const newFilteredBlogs = blogs.filter(blog => campaignIds.includes(blog.campaign_id));
            filterBlogs(newFilteredBlogs);
        } else {
            filterBlogs(blogs);
        }
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
