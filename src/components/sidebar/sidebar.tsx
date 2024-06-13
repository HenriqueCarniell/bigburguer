import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


function OffCanvasExample({ show, setShow, children, ...props }: any) {
    const handleClose = () => setShow(false);
  
    return (
      <>
        <div onClick={() => setShow(true)}>
          {children}
        </div>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

export default OffCanvasExample