import React from 'react';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import { Popover } from '@material-ui/core';
import { Typography } from '@material-ui/core';

// For Dialog version:
// export default function FriendSearchPopup(props) {

//     const {title, children, openPopup, toggleOpenPopup} = props;
//     //^
//     return (
//         <Dialog open={openPopup} onClose={toggleOpenPopup}>
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

    const {openPopup, toggleOpenPopup} = props;
    //^
    return (
        <Popover open={openPopup} onClose={toggleOpenPopup}>
            <Typography>insert search bar</Typography>
            <DialogContent>
                hahahahahhahaha
            </DialogContent>
        </Popover>
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