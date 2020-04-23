import React from 'react';

import { FlatList } from 'react-native';

import { getImageFromId } from '../utils/api';

import Card from './Card';


const CardList = ({ items }) => {

    const keyExtractor = ({ id }) => id.toString();

    const renderCard = ({ item: { id, author } }) => {
        return <Card fullName={author} image={{ uri: getImageFromId(id) }} />
    };

    return (
        <FlatList data={items} renderItem={renderCard} keyExtractor={keyExtractor} />
    )
}

export default CardList;


