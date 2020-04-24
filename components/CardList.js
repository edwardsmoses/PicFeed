import React from 'react';

import { FlatList } from 'react-native';

import { getImageFromId } from '../utils/api';

import Card from './Card';


const CardList = ({ items, itemComments, onPressComments }) => {

    const keyExtractor = ({ id }) => id.toString();

    const renderCard = ({ item: { id, author } }) => {
        const comments = itemComments[id];
        return <Card fullName={author} image={{ uri: getImageFromId(id) }}
            linkText={`${comments ? comments.length : 0} Comments`}
            onPressLinkText={() => onPressComments(id)} />
    };

    return (
        <FlatList data={items} renderItem={renderCard} keyExtractor={keyExtractor} extraData={itemComments} />
    )
}

export default CardList;


