import styled from 'styled-components';
import List from '../../List.jsx';

const Wrapper = styled(List)`
    width: 100%;

    && .listBox{
        display: flex;
        gap: 16px;
        flex-direction: column;
    }

    && .stepper-dots__wrapper{
        display: none;
    }

    @media (max-width: 600px) {
        overflow-x: hidden;
        
        && .listBox{
            display: flex;
            gap: 76px;
            flex-direction: row;
            width: max-content;
            padding: 0px 38px;
        }

        && .listBoxScroll{
            overflow-x: visible;
        }

        && .stepper-dots__wrapper{
            display: flex;
            justify-content: center;
            margin-top: 24px;
            gap: 13px;
        }
    }
`;

export default Wrapper;