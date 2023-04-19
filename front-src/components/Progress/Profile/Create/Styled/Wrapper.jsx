import styled from 'styled-components';
import Progress from '@nest-datum-ui/Progress';

const Wrapper = styled(Progress)`
    && .progress-profile__content-wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;
    }

    && .svg_logo-preloader {
        margin-bottom: 17px;
    }

    @media (max-width: 600px) {
        padding: 0px!important;
    }
`;

export default Wrapper;