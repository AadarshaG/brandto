import React from 'react';

import { AllInOne } from '../allinone/allinone';
import { Banner } from '../banner/banner';
import { Pricing } from '../pricing/pricing';
import { Support } from '../support/support';
import { TrustedBy } from '../trusted/trusted';

export function Home(){

    return(
        <>
            <Banner />
            <TrustedBy />
            <Support />
            <AllInOne />
            <Pricing />
        </>
    )
}