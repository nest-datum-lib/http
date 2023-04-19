import React from 'react';

let Item = () => {
	return <React.Fragment>
		Item
	</React.Fragment>;
};

Item = React.memo(Item);
Item.defaultProps = {
};
Item.propTypes = {
};

export default Item;
