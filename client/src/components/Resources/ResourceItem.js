import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function ResourceItem({ groupTitle, groupItem }) {
  return (
    <div className='col-md-5 mt-5 ResourceItem-Col w-100'>
      <h5>{groupTitle}</h5>
      {groupItem.map((i, x) => (
        <div key={x}>
          <strong>{i.desc}</strong>
          <br />
          <p
            style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}
          >
            {typeof i.link === 'string' ? (
              <a target='_blank' href={i.link}>
                {i.link}
              </a>
            ) : (
              i.link.map((l, i) => (
                <Fragment key={i}>
                  <a target='_blank' href={l}>
                    {l}
                  </a>
                  <br />
                </Fragment>
              ))
            )}
          </p>
        </div>
      ))}
    </div>
  );
}

ResourceItem.propTypes = {
  groupItem: PropTypes.array.isRequired,
  groupTitle: PropTypes.string.isRequired
};

export default ResourceItem;
