import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classes from './SearchDropdown.module.scss';
import { dropDownArrow, dropUpArrow, checkboxActive, checkboxInactive } from '../../assets';

// eslint-disable-next-line no-unused-vars
const SearchDropdown = ({ title, values, filterValuesById }) => {
    const [listOpen, setListOpen] = useState(false);
    const [dropdownValues, setDropdownValues] = useState([]);
    const [selectedIds, setSelectedIds] = useState([]);

    const onListItemClick = (id) => {
        setListOpen(false);

        // Update dropdownValues
        setDropdownValues(dropdownValues.map(dropdownValue => {
            if(dropdownValue.id === id) {
                return {
                    ...dropdownValue,
                    selected: !dropdownValue.selected
                }
            } else {
                return dropdownValue;
            }
        }));
        
        // if selectedIds contains id, remove it
        // else add it
        if(selectedIds && selectedIds.includes(id)) {
            setSelectedIds(selectedIds.filter(selectedId => selectedId.id !== id));
        } else {
            setSelectedIds(selectedIds => [...selectedIds, id]);
        }

        // eslint-disable-next-line no-console
        console.log(selectedIds);
        // call filter function passing selectedIds
        // filterValuesById(selectedIds);
        
    }

    useEffect(() => {
        const filteredValues = values.map(value => {
            return {
                ...value,
                selected: false
            }
        });
        setDropdownValues(filteredValues);
    }, [values]);

    const RenderValues = () => (
        <div className={classes.dropdownList}>
            {dropdownValues.map(value => (
                <div className={classes.listItem} key={value.id} onClick={() => onListItemClick(value.id)}>
                    {value.selected ?
                        <img src={checkboxActive} alt="Selected" />
                        :
                        <img src={checkboxInactive} alt="Value Deselected" />
                    }
                    {value.title}
                </div>
            ))}
        </div>
    )

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
               <RenderValues />
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
