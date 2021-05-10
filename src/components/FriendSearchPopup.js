import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import { Typography } from '@material-ui/core';

// RS:
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// For Dialog version:
// export default function FriendSearchPopup(props) {

//     const {title, children, openPopup, toggleOpenClosed} = props;
//     //^
//     return (
//         <Dialog open={openPopup} onClose={toggleOpenClosed}>
//             <DialogTitle>
//                 Title
//             </DialogTitle>
//             <DialogContent>
//                 hahahahahhahaha
//             </DialogContent>
//         </Dialog>
//     )
// }

// Popover:
export default function FriendSearchPopup(props) {

    const {openPopup, toggleOpenClosed} = props;

    // const toggle = () => toggleOpenClosed(!openPopup);
    //^
    return (
    <Modal isOpen={openPopup} toggle={toggleOpenClosed}>
        <ModalHeader toggle={toggleOpenClosed}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
            
            <Button onClick={toggleOpenClosed}>Close</Button>
        </ModalFooter>
    </Modal>
    )
}

// export default function FriendSearchPopup(props) {
//     const { popoverState } = props;

//         // const {popoverState, anchorOrigin, transformOrigin} = props;
//         //^
//         return (
//             <Popover
//             {...bindPopover(this.props.popoverState)}
//             anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'center',
//               }}
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'center',
//               }}>
//                 <Typography>insert search bar</Typography>
//                 <DialogContent>
//                     hahahahahhahaha
//                 </DialogContent>
//             </Popover>
//         )
//     }