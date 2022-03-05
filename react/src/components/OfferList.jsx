import Offer from "./Offer"
import OfferForm from './OfferForm';

import { useState, useEffect } from 'react';
import { getOffers,   createOffers,    deleteOffers} from "../api/Offers";

const OfferList = ({jwt}) => {
    const [offers, setOffers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    

    const doCreateOffer = (offer, jwt) => {
        setIsLoading(true);
        createOffers(offer)
            .then((newOffer) => {
                 setOffers((prevState) => [...prevState, newOffer]);
                 setIsLoading(false);       
            }); 
    };
    

    const doDeleteOffer = (offer, jwt) => {
       setIsLoading(true);
       deleteOffers(offer)
       .then(loadData);
       setIsLoading(false)
   };

    const loadData = () => {
        setIsLoading(true);
        getOffers(jwt).then((offers) => {    
            setIsLoading(false)
            setOffers(offers);
        }).catch(() => setIsLoading(false));
    }
    useEffect(loadData,[]); 
    
    return <>
        {isLoading ? 
            <p>espera...</p> : 
            offers.map(offer => 
                <Offer 
                    key={offer._id} 
                    offer={offer} 
                   onDelete={() => doDeleteOffer(offer)}
                />)}
        <OfferForm createOffers={doCreateOffer}></OfferForm>
    </>
        
}
    

export default OfferList;