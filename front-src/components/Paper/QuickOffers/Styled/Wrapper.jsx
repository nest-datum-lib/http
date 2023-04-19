import styled from 'styled-components';
import Transparent from '../../Transparent';

const Wrapper = styled(Transparent)`
    width: 855px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: none!important;

    && .titleSomeJobs{
        margin-bottom: 40px!important;
    }
    && .quickOffersLastBox{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 484px;
        margin-top: 49px;
        margin-bottom: 24px;
    }

    && .quickOffersLastBox p{
        margin-bottom: 54px!important;
    }
    && .quickOffersLastBox a{
        width: 418px;
    }

    @media (max-width: 600px) {
        width: 100%;
        min-height: calc(100vh - 32px);
        box-sizing: border-box;

        && .quickOffersLastBox{
            width: 100%;
            padding: 0px 48px;
            box-sizing: border-box;
            min-width: auto;
        }
    
        && .quickOffersLastBox p{
            display: none;
        }
        && .quickOffersLastBox a{
            width: 100%;
        }
        && .titleSomeJobs{
            max-width: 50%;
        }
    }
`;

export default Wrapper;