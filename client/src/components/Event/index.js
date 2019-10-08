import React from 'react';
import './Event.css';
const Event = () => {
  return (
    <div className='row m-0 Event_Container'>
      <div className='col-md-4 col-xs-12 p-0 pr-3'>
        <div
          className='Event_Img_Container'
          style={{
            background: 'url(/images/adobe1.jpg) no-repeat center',
            width: '100%',
            height: '100%'
          }}
        ></div>
      </div>
      <div className='col-md-8 col-xs-12 p-0'>
        <h5>Title One</h5>
        <small className='text-muted'>Private</small>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          laudantium est doloremque nulla dignissimos similique minima modi quod
          aliquam dolor tempore officia nihil qui praesentium porro ducimus,
          adipisci vitae repellendus dicta reiciendis distinctio natus magni! Ad
          distinctio fuga libero, tempora dicta alias minus ab unde autem iure
          fugit exercitationem debitis repudiandae facere, reiciendis doloremque
          porro deserunt quod sed officiis soluta, repellat velit dolorum
          pariatur. Exercitationem repellat, fuga vero, quos eveniet facere qui
          tempore voluptatum molestiae eligendi odio libero. Quos eos impedit
          architecto, ad recusandae magni ipsa. Molestias porro cumque itaque.
          Unde amet, optio modi libero nemo delectus tenetur assumenda earum.
        </p>
        <p>
          <strong>12-12-2019</strong>
        </p>
        <button className='teal-btn'>Sign Up</button>
      </div>
    </div>
  );
};

export default Event;
