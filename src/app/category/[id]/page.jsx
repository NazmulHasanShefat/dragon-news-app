import NewsFeed from '@/components/homepage/newsFeed';
import { GetApiData } from '@/lib/Api_data';
import React from 'react';

const NewsDetailsPage = async ({params}) => {
    const {id} = await params
    const getNewsFeedPromise = GetApiData(`https://openapi.programming-hero.com/api/news/category/${id}`)
    return (
        <NewsFeed getNewsFeedPromise={getNewsFeedPromise} className={`col-span-6 lg:col-span-8`}/>
    );
};

export default NewsDetailsPage;