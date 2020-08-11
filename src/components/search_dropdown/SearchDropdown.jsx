import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classes from './SearchDropdown.module.scss';
import { dropDownArrow, dropUpArrow } from '../../assets';

const SearchDropdown = ({ title, values, filterValuesById }) => {
    const [listOpen, setListOpen] = useState(false);

    const onListItemClick = (id) => {
        setListOpen(false);
        filterValuesById(id);
    }

    return (
        <div className={classes.dropdownContainer} tabIndex="0" onBlur={() => setListOpen(false)}>
            <div className={classes.dropdownHeader} onClick={() => setListOpen(!listOpen)}>
                <div>{title}</div>
                {listOpen ?
                    <img src={dropUpArrow} alt="Drop Up Arrow" />
                    :
                    <img src={dropDownArrow} alt="Drop Down Arrow" />
                }
            </div>
            {listOpen &&
                <div className={classes.dropdownList}>
                    {values.map(value => (
                        <div className={classes.listItem} key={value.id} onClick={() => onListItemClick(value.id)}>{value.title}</div>
                    ))}
                </div>
            }
        </div>
    );
};


SearchDropdown.propTypes = {
    title: PropTypes.string.isRequired,
    values: PropTypes.array.isRequired,
    filterValuesById: PropTypes.func
};


export default SearchDropdown;
