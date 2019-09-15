// import React, { Component } from "react";
// import {Dropdown,ButtonToolbar,DropdownButton} from 'react-bootstrap/Dropdown';

// class Drop extends Component {
//   state = {
//     isOpen: false
//   };

//   toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

//   render() {
   
//     return (
//       <div>
//         <h2>Specialization</h2>
//       <ButtonToolbar>
//   {['Primary'].map(
//     variant => (
//       <DropdownButton
//         title={variant}
//         variant={variant.toLowerCase()}
//         id={`dropdown-variants-${variant}`}
//         key={variant}
//       >
//         <Dropdown.Item eventKey="1">Eye Specialist</Dropdown.Item>
//         <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
//         <Dropdown.Item eventKey="3" active>
//           Active Item
//         </Dropdown.Item>
//         <Dropdown.Divider />
//         <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
//       </DropdownButton>
//     ),
//   )}
// </ButtonToolbar>
//       </div>
//     );
//   }
// }
 
// export default Drop;